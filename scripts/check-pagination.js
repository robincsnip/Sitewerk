#!/usr/bin/env node
/**
 * Print pagination gate for Sitewerk client reports.
 * Generates PDF from print HTML and fails closed on bad breaks.
 *
 * Usage:
 *   node scripts/check-pagination.js runs/<id>/print/rapport.html
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error("Usage: node scripts/check-pagination.js <rapport.html>");
  process.exit(1);
}

const absHtml = path.resolve(htmlPath);
if (!fs.existsSync(absHtml)) {
  console.error(`Missing ${absHtml}`);
  process.exit(1);
}

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  for (const bin of ["google-chrome-stable", "google-chrome", "chromium-browser", "chromium"]) {
    const r = spawnSync("which", [bin], { encoding: "utf8" });
    if (r.status === 0) return r.stdout.trim();
  }
  return null;
}

function normalizeText(s) {
  return (s || "").replace(/\s+/g, " ").trim();
}

function pagesForSnippet(pages, snippet) {
  const needle = normalizeText(snippet);
  if (!needle || needle.length < 8) return [];
  return pages
    .map((text, idx) => (normalizeText(text).includes(needle) ? idx + 1 : -1))
    .filter((n) => n > 0);
}

async function extractPdfPages(pdfBuffer) {
  const { PDFParse } = require("pdf-parse");
  const parser = new PDFParse({ data: pdfBuffer });
  const result = await parser.getText();
  await parser.destroy();
  return result.pages.map((page) => page.text);
}

async function checkPagination() {
  let chromium;
  try {
    ({ chromium } = require("playwright-core"));
  } catch {
    console.error("check-pagination: playwright-core required");
    process.exit(1);
  }

  const chrome = findChrome();
  if (!chrome) {
    console.error("check-pagination: no Chrome/Chromium found");
    process.exit(1);
  }

  const tmpPdf = path.join(os.tmpdir(), `sitewerk-pagination-${process.pid}.pdf`);
  const browser = await chromium.launch({
    executablePath: chrome,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`file://${absHtml}`, { waitUntil: "load", timeout: 30_000 });
    await page.emulateMedia({ media: "print" });
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 3000))]);
      }
    });

    const blocks = await page.evaluate(() => {
      const atomicSelector =
        ".finding-shell,.prio-shell,.good-shell,.decision-card,.measure-shell,.callout-decision,.lead-block,.werklijst-block";
      const items = [];
      for (const el of document.querySelectorAll(atomicSelector)) {
        const text = (el.textContent || "").replace(/\s+/g, " ").trim();
        items.push({
          kind: "block",
          element: (el.className || el.tagName).split(" ")[0],
          start: text.slice(0, 48),
          end: text.slice(-48),
          sample: text.slice(0, 72),
        });
      }
      for (const row of document.querySelectorAll(".report table tr")) {
        const text = (row.textContent || "").replace(/\s+/g, " ").trim();
        if (!text) continue;
        items.push({
          kind: "row",
          element: "tr",
          start: text.slice(0, 40),
          end: text.slice(-40),
          sample: text.slice(0, 60),
        });
      }
      for (const h of document.querySelectorAll(".report h2.section-head, .report h3")) {
        const next = h.nextElementSibling;
        if (!next) continue;
        const head = (h.textContent || "").replace(/\s+/g, " ").trim();
        const body = (next.textContent || "").replace(/\s+/g, " ").trim();
        items.push({
          kind: "heading",
          element: h.tagName.toLowerCase(),
          start: head.slice(0, 48),
          end: body.slice(0, 48),
          sample: head.slice(0, 72),
        });
      }
      return items;
    });

    await page.pdf({
      path: tmpPdf,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    const pdfBuffer = fs.readFileSync(tmpPdf);
    const pages = await extractPdfPages(pdfBuffer);
    if (pages.length === 0) {
      console.error("check-pagination: could not read PDF pages");
      process.exit(1);
    }

    const failures = [];
    for (const block of blocks) {
      const startPages = pagesForSnippet(pages, block.start);
      const endPages = pagesForSnippet(pages, block.end);
      const all = [...new Set([...startPages, ...endPages])].sort((a, b) => a - b);
      if (all.length > 1) {
        failures.push({
          code: block.kind === "heading" ? "orphan-heading" : block.kind === "row" ? "split-table-row" : "split-block",
          element: block.element,
          pages: all.join("→"),
          text: block.sample,
        });
      }
      if (block.kind === "heading" && startPages.length === 1 && endPages.length === 1 && startPages[0] !== endPages[0]) {
        failures.push({
          code: "orphan-heading",
          element: block.element,
          pages: `${startPages[0]}→${endPages[0]}`,
          text: block.sample,
        });
      }
    }

    if (failures.length > 0) {
      console.error("Pagination check FAILED — fix print CSS/HTML before delivering PDF:\n");
      for (const issue of failures) {
        console.error(`  [${issue.code}] ${issue.element} p.${issue.pages}: ${issue.text}`);
      }
      console.error(`\n${failures.length} issue(s) on ${pages.length} pages. See playbooks/rapport-pdf.md (Paginatie-gate).`);
      process.exit(1);
    }

    console.log(`Pagination check OK (${pages.length} pages)`);
  } finally {
    await browser.close();
    if (fs.existsSync(tmpPdf)) fs.unlinkSync(tmpPdf);
  }
}

checkPagination().catch((err) => {
  console.error("check-pagination error:", err.message || err);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Print pagination gate for Sitewerk client reports.
 * Generates PDF from print HTML and fails closed on bad breaks.
 *
 * Orphan headings are checked against real PDF text geometry (pdf.js
 * item positions), not HTML layout heuristics.
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
  return (s || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*/g, "-")
    .trim()
    .toLowerCase();
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

function clusterLines(items) {
  const lines = [];
  let cur = null;
  for (const item of items) {
    if (!cur || Math.abs(cur.y - item.y) > 4) {
      if (cur && cur.str.trim()) lines.push(cur);
      cur = { y: item.y, str: item.str, x: item.x };
    } else {
      const gap = item.str.startsWith(" ") || cur.str.endsWith(" ") ? "" : " ";
      cur.str += gap + item.str;
    }
  }
  if (cur && cur.str.trim()) lines.push(cur);
  return lines;
}

async function extractPdfGeometry(pdfBuffer) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = Uint8Array.from(pdfBuffer);
  const doc = await pdfjs.getDocument({ data, verbosity: 0, isEvalSupported: false }).promise;
  const pages = [];
  try {
    for (let n = 1; n <= doc.numPages; n++) {
      const page = await doc.getPage(n);
      const viewport = page.getViewport({ scale: 1 });
      const content = await page.getTextContent();
      const items = [];
      for (const item of content.items) {
        if (!item.str || !item.transform) continue;
        items.push({
          str: item.str,
          x: item.transform[4],
          y: item.transform[5],
          width: item.width || 0,
        });
      }
      const lines = clusterLines(items);
      pages.push({
        num: n,
        width: viewport.width,
        height: viewport.height,
        items,
        lines,
        haystack: normalizeText(lines.map((l) => l.str).join(" ")),
      });
    }
  } finally {
    await doc.destroy();
  }
  return pages;
}

function findHeadingGeometry(geoPages, headingText, used) {
  const needle = normalizeText(headingText);
  if (!needle) return null;
  for (const page of geoPages) {
    for (let li = 0; li < page.lines.length; li++) {
      const line = page.lines[li];
      const key = `${page.num}:${li}`;
      if (used.has(key)) continue;
      if (normalizeText(line.str) !== needle) continue;
      used.add(key);
      return {
        page: page.num,
        y: line.y,
        fromTop: page.height - line.y,
        pageHeight: page.height,
        str: line.str,
      };
    }
  }
  return null;
}

function findSnippetGeometry(geoPages, snippet) {
  const needle = normalizeText(snippet);
  if (!needle || needle.length < 8) return [];
  const hits = [];
  for (const page of geoPages) {
    const idx = page.haystack.indexOf(needle);
    if (idx === -1) continue;
    let walked = 0;
    let y = page.lines[0] ? page.lines[0].y : page.height / 2;
    for (const line of page.lines) {
      const piece = normalizeText(line.str);
      if (walked + piece.length >= idx) {
        y = line.y;
        break;
      }
      walked += piece.length + 1;
    }
    hits.push({ page: page.num, y, fromTop: page.height - y, pageHeight: page.height });
  }
  return hits;
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

    const collected = await page.evaluate(() => {
      function visibleText(el) {
        if (!el) return "";
        return (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
      }
      function isThin(el) {
        if (!el) return true;
        if (el.tagName === "HR") return true;
        return el.classList.contains("section-intro");
      }
      function substantialNext(heading) {
        let n = heading.nextElementSibling;
        while (n && isThin(n)) n = n.nextElementSibling;
        return n;
      }

      const atomicSelector =
        ".finding-shell,.prio-shell,.good-shell,.decision-card,.measure-shell,.callout-decision,.lead-block,.werklijst-block,.table-shell";
      const items = [];
      for (const el of document.querySelectorAll(atomicSelector)) {
        const text = visibleText(el);
        items.push({
          kind: "block",
          element: (el.className || el.tagName).toString().split(" ")[0],
          start: text.slice(0, 48),
          end: text.slice(-48),
          sample: text.slice(0, 72),
        });
      }
      for (const row of document.querySelectorAll(".report table tbody tr")) {
        const text = visibleText(row);
        if (!text) continue;
        items.push({
          kind: "row",
          element: "tr",
          start: text.slice(0, 40),
          end: text.slice(-40),
          sample: text.slice(0, 60),
        });
      }

      const headingEls = document.querySelectorAll(
        ".report h2.section-head, .report-section > h3, .heading-keep > h3",
      );
      const headings = [];
      for (const h of headingEls) {
        const body = substantialNext(h);
        const bodyText = visibleText(body);
        headings.push({
          kind: "heading",
          element: h.tagName.toLowerCase(),
          text: visibleText(h),
          bodyStart: bodyText.slice(0, 64),
          bodyElement: body ? (body.className || body.tagName).toString().split(" ")[0] : "",
          hasBody: Boolean(body && bodyText),
          sample: visibleText(h).slice(0, 72),
        });
      }
      return { items, headings };
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

    let geoPages;
    try {
      geoPages = await extractPdfGeometry(pdfBuffer);
    } catch (err) {
      console.error("check-pagination: PDF geometry read failed (fail-closed):", err.message || err);
      process.exit(1);
    }
    if (!geoPages || geoPages.length === 0) {
      console.error("check-pagination: PDF geometry empty (fail-closed)");
      process.exit(1);
    }

    const failures = [];
    for (const block of collected.items) {
      const startPages = pagesForSnippet(pages, block.start);
      const endPages = pagesForSnippet(pages, block.end);
      const all = [...new Set([...startPages, ...endPages])].sort((a, b) => a - b);
      if (all.length > 1) {
        failures.push({
          code: block.kind === "row" ? "split-table-row" : "split-block",
          element: block.element,
          pages: all.join("→"),
          text: block.sample,
        });
      }
    }

    const usedHeadings = new Set();
    for (const heading of collected.headings) {
      if (!heading.text) continue;
      const headGeo = findHeadingGeometry(geoPages, heading.text, usedHeadings);
      if (!headGeo) {
        failures.push({
          code: "orphan-heading",
          element: heading.element,
          pages: "not-in-pdf",
          text: `${heading.sample} (heading not found in PDF geometry)`,
        });
        continue;
      }
      if (!heading.hasBody || normalizeText(heading.bodyStart).length < 8) continue;

      const bodyHits = findSnippetGeometry(geoPages, heading.bodyStart);
      if (bodyHits.length === 0) {
        failures.push({
          code: "orphan-heading",
          element: heading.element,
          pages: `${headGeo.page}→not-in-pdf`,
          text: `${heading.sample} (body not found in PDF geometry)`,
        });
        continue;
      }

      const samePageBody = bodyHits.find((hit) => {
        if (hit.page !== headGeo.page) return false;
        return hit.y <= headGeo.y + 8;
      });
      const bodyGeo = samePageBody || bodyHits[0];
      if (bodyGeo.page !== headGeo.page) {
        failures.push({
          code: "orphan-heading",
          element: heading.element,
          pages: `${headGeo.page}→${bodyGeo.page}`,
          text: heading.sample,
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

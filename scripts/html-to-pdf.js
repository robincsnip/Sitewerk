#!/usr/bin/env node
/**
 * HTML → PDF via Playwright + system Chrome (preferred) or Chrome CLI fallback.
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error("Usage: node scripts/html-to-pdf.js <rapport.html> [out.pdf]");
  process.exit(1);
}

const absHtml = path.resolve(htmlPath);
if (!fs.existsSync(absHtml)) {
  console.error(`Missing ${absHtml}`);
  process.exit(1);
}

const outPdf =
  process.argv[3] || path.join(path.dirname(absHtml), "rapport.pdf");

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

async function pdfWithPlaywright(chromePath) {
  let chromium;
  try {
    ({ chromium } = require("playwright-core"));
  } catch {
    return false;
  }

  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
  });
  try {
    const page = await browser.newPage();
    await page.goto(`file://${absHtml}`, {
      waitUntil: "load",
      timeout: 30_000,
    });
    // Fonts optional; do not hang forever on network @import
    await page.evaluate(async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await Promise.race([
            document.fonts.ready,
            new Promise((r) => setTimeout(r, 2000)),
          ]);
        }
      } catch {
        /* ignore */
      }
    });
    await page.pdf({
      path: outPdf,
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
  } finally {
    await browser.close();
  }
  return true;
}

function pdfWithChromeCli(chromePath) {
  const userDataDir = path.join(os.tmpdir(), `sitewerk-chrome-${process.pid}`);
  fs.mkdirSync(userDataDir, { recursive: true });
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    `--user-data-dir=${userDataDir}`,
    "--no-pdf-header-footer",
    `--print-to-pdf=${outPdf}`,
    `file://${absHtml}`,
  ];
  const result = spawnSync(chromePath, args, {
    encoding: "utf8",
    timeout: 60_000,
  });
  if (result.error) {
    console.error(result.error.message);
    return false;
  }
  if (result.status !== 0) {
    console.error(result.stderr || result.stdout || "Chrome CLI failed");
    return false;
  }
  return fs.existsSync(outPdf);
}

(async () => {
  const chrome = findChrome();
  if (!chrome) {
    console.error("No Chrome/Chromium found. Set CHROME_PATH.");
    process.exit(1);
  }

  let ok = false;
  try {
    ok = await pdfWithPlaywright(chrome);
  } catch (err) {
    console.error("Playwright PDF failed, trying Chrome CLI:", err.message || err);
  }

  if (!ok) {
    ok = pdfWithChromeCli(chrome);
  }

  if (!ok || !fs.existsSync(outPdf)) {
    console.error("PDF was not created");
    process.exit(1);
  }

  console.log(`Wrote ${outPdf} (${fs.statSync(outPdf).size} bytes)`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

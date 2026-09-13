#!/usr/bin/env node
/**
 * Minimal Markdown → HTML for Sitewerk reports.
 * Supports headings, paragraphs, lists, tables, hr, bold/italic, blockquotes.
 */
const fs = require("fs");
const path = require("path");

const mdPath = process.argv[2];
if (!mdPath) {
  console.error("Usage: node scripts/md-to-html.js <rapport-klant.md>");
  process.exit(1);
}

const abs = path.resolve(mdPath);
const runDir = path.dirname(abs);
const printDir = path.join(runDir, "print");
fs.mkdirSync(printDir, { recursive: true });

const md = fs.readFileSync(abs, "utf8");
const repoRoot = path.resolve(__dirname, "..");
const themeHref = path.relative(printDir, path.join(repoRoot, "assets/rapport-theme.css"));

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineFormat(text) {
  let t = escapeHtml(text);
  t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*(.+?)\*/g, "<em>$1</em>");
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  return t;
}

function isTableSep(line) {
  return /^\s*\|?[\s:-]+\|[\s|:-]*$/.test(line);
}

function parseTable(lines, start) {
  const rows = [];
  let i = start;
  while (i < lines.length && lines[i].includes("|")) {
    if (!isTableSep(lines[i])) {
      const cells = lines[i]
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim());
      rows.push(cells);
    }
    i++;
  }
  if (rows.length === 0) return { html: "", next: start + 1 };
  const [head, ...body] = rows;
  let html = "<table><thead><tr>";
  for (const c of head) html += `<th>${inlineFormat(c)}</th>`;
  html += "</tr></thead><tbody>";
  for (const row of body) {
    html += "<tr>";
    for (const c of row) html += `<td>${inlineFormat(c)}</td>`;
    html += "</tr>";
  }
  html += "</tbody></table>";
  return { html, next: i };
}

function mdToHtml(src, { skipFirstH1 = false } = {}) {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let para = [];
  let listType = null;
  let skippedH1 = false;

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inlineFormat(para.join(" "))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (listType) {
      out.push(listType === "ol" ? "</ol>" : "</ul>");
      listType = null;
    }
  };

  // Skip YAML-ish first title duplication handled in body as-is
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushPara();
      flushList();
      i++;
      continue;
    }

    if (trimmed === "---") {
      flushPara();
      flushList();
      out.push("<hr />");
      i++;
      continue;
    }

    if (trimmed.startsWith("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      flushPara();
      flushList();
      const { html, next } = parseTable(lines, i);
      out.push(html);
      i = next;
      continue;
    }

    const h = /^(#{1,3})\s+(.*)$/.exec(trimmed);
    if (h) {
      flushPara();
      flushList();
      const level = h[1].length;
      if (skipFirstH1 && !skippedH1 && level === 1) {
        skippedH1 = true;
        i++;
        continue;
      }
      out.push(`<h${level}>${inlineFormat(h[2])}</h${level}>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushPara();
      flushList();
      out.push(`<blockquote><p>${inlineFormat(trimmed.replace(/^>\s?/, ""))}</p></blockquote>`);
      i++;
      continue;
    }

    const ul = /^[-*]\s+(.*)$/.exec(trimmed);
    if (ul) {
      flushPara();
      if (listType !== "ul") {
        flushList();
        out.push("<ul>");
        listType = "ul";
      }
      out.push(`<li>${inlineFormat(ul[1])}</li>`);
      i++;
      continue;
    }

    const ol = /^\d+\.\s+(.*)$/.exec(trimmed);
    if (ol) {
      flushPara();
      if (listType !== "ol") {
        flushList();
        out.push("<ol>");
        listType = "ol";
      }
      out.push(`<li>${inlineFormat(ol[1])}</li>`);
      i++;
      continue;
    }

    flushList();
    para.push(trimmed);
    i++;
  }
  flushPara();
  flushList();
  return out.join("\n");
}

const body = mdToHtml(md, { skipFirstH1: true });
const titleMatch = md.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1] : "Sitewerk-rapport";
const klant = title.split("—")[0].trim();
const datumMatch = md.match(/\*\*Peildatum:\*\*\s*(.+)/);
const datum = datumMatch ? datumMatch[1].trim() : "";

const themePath = path.join(repoRoot, "assets/rapport-theme.css");
const themeCss = fs.readFileSync(themePath, "utf8");
// Self-contained print HTML: inline CSS so PDF export does not depend on relative paths.
const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
${themeCss}
  </style>
  <!-- linked theme kept for browser preview of the template -->
  <link rel="stylesheet" href="${themeHref.split(path.sep).join("/")}" />
</head>
<body>
  <header class="cover">
    <p class="brand">Sitewerk</p>
    <h1>${escapeHtml(klant)}</h1>
    <p class="meta">${escapeHtml(datum)} · concept — niets live gezet</p>
  </header>
  <main class="report">
${body}
  </main>
  <footer class="colophon">
    <p>Sitewerk · persoonlijk lab · geen live zonder eigenaren-akkoord</p>
  </footer>
</body>
</html>
`;

const outPath = path.join(printDir, "rapport.html");
fs.writeFileSync(outPath, html, "utf8");
console.log(`Wrote ${outPath}`);

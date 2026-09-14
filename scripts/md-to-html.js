#!/usr/bin/env node
/**
 * Markdown → HTML for Sitewerk client reports.
 * Supports headings, lists, tables, blockquotes, and ::: visual fences.
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const htmlOnly = args.includes("--html-only");
const mdPath = args.find((arg) => !arg.startsWith("-"));
if (!mdPath) {
  console.error("Usage: node scripts/md-to-html.js <rapport-klant.md> [--html-only]");
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

function renderKpiRow(lines) {
  const cards = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [value, label, note = ""] = line.split("|").map((s) => s.trim());
      return `<div class="kpi-card"><div class="kpi-value">${inlineFormat(value)}</div><div class="kpi-label">${inlineFormat(label)}</div>${note ? `<div class="kpi-note">${inlineFormat(note)}</div>` : ""}</div>`;
    });
  return `<div class="kpi-row">${cards.join("")}</div>`;
}

function renderPrioCards(lines) {
  const cards = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [num, title, done = ""] = line.split("|").map((s) => s.trim());
      return `<div class="prio-card"><div class="prio-num">${inlineFormat(num)}</div><div class="prio-body"><div class="prio-title">${inlineFormat(title)}</div>${done ? `<div class="prio-done">${inlineFormat(done)}</div>` : ""}</div></div>`;
    });
  return `<div class="prio-shell"><div class="prio-grid">${cards.join("")}</div></div>`;
}

function renderGoodGrid(lines) {
  const items = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<div class="good-item">${inlineFormat(line.replace(/^[-*]\s+/, ""))}</div>`);
  return `<div class="good-shell"><div class="good-grid">${items.join("")}</div></div>`;
}

function renderBaselineChart(lines) {
  const items = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [value, label, max = ""] = line.split("|").map((s) => s.trim());
      const num = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
      const maxNum = max ? parseFloat(max.replace(/[^\d.]/g, "")) : num;
      const pct = maxNum > 0 ? Math.min(100, Math.round((num / maxNum) * 100)) : 100;
      return { value, label, pct };
    });
  const rows = items
    .map(
      (item) =>
        `<div class="chart-row"><span class="chart-label">${inlineFormat(item.label)}</span><div class="chart-bar" aria-hidden="true"><div class="chart-fill" style="width:${item.pct}%"></div></div><span class="chart-value">${inlineFormat(item.value)}</span></div>`,
    )
    .join("");
  return `<div class="baseline-chart-shell">${rows}</div>`;
}

function renderMeasureRow(lines) {
  const items = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [when, label, text = ""] = line.split("|").map((s) => s.trim());
      return `<div class="measure-card"><div class="measure-when">${inlineFormat(when)}</div><div class="measure-label">${inlineFormat(label)}</div><div class="measure-text">${inlineFormat(text)}</div></div>`;
    });
  return `<div class="measure-shell"><div class="measure-grid">${items.join("")}</div></div>`;
}

function renderDecisionCards(inner, renderFragment) {
  const blocks = inner.split(/\n(?=### )/).filter((b) => b.trim());
  const cards = blocks.map((block) => {
    const lines = block.trim().split("\n");
    const titleLine = lines[0].replace(/^###\s+/, "");
    const body = renderFragment(lines.slice(1).join("\n"));
    return `<div class="decision-card"><h3>${inlineFormat(titleLine)}</h3>${body}</div>`;
  });
  return `<div class="decision-grid">${cards.join("")}</div>`;
}

function renderFindingCard(level, inner, renderFragment) {
  const badge = level.toUpperCase();
  const kpiMatch = inner.match(/@kpi\n([\s\S]*?)\n@end\n?/);
  let bodyInner = inner;
  let kpiHtml = "";
  if (kpiMatch) {
    kpiHtml = renderFindingKpi(
      kpiMatch[1]
        .trim()
        .split("\n")
        .filter(Boolean),
    );
    bodyInner = inner.replace(kpiMatch[0], "");
  }
  const body = `${kpiHtml}${renderFragment(bodyInner)}`;
  return `<div class="finding-shell"><div class="finding-card finding-${level}"><div class="finding-content"><div class="finding-badge">${badge}</div>${body}</div></div></div>`;
}

function renderFindingKpi(lines) {
  const items = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [value, label] = line.split("|").map((s) => s.trim());
      return `<div class="mini-kpi"><div class="mini-kpi-value">${inlineFormat(value)}</div><div class="mini-kpi-label">${inlineFormat(label)}</div></div>`;
    });
  return `<div class="mini-kpi-row">${items.join("")}</div>`;
}

function renderFence(type, inner, renderFragment) {
  const lines = inner.trim().split("\n");
  const kind = type.trim().toLowerCase();

  if (kind === "kpi") return renderKpiRow(lines);
  if (kind === "chart") return renderBaselineChart(lines);
  if (kind === "prio-cards") return renderPrioCards(lines);
  if (kind === "good-grid") return renderGoodGrid(lines);
  if (kind === "measure") return renderMeasureRow(lines);
  if (kind === "decisions") return renderDecisionCards(inner, renderFragment);
  if (kind === "finding-kpi") return renderFindingKpi(lines);
  if (kind.startsWith("finding")) {
    const level = kind.split(/\s+/)[1] || "p1";
    return renderFindingCard(level, inner, renderFragment);
  }
  if (kind === "lead") {
    return `<div class="lead-block"><p>${inlineFormat(inner.trim())}</p></div>`;
  }
  if (kind === "callout-decision") {
    return `<div class="callout-decision">${renderFragment(inner)}</div>`;
  }
  if (kind === "callout-fictief") {
    return `<div class="callout-fictief">${renderFragment(inner)}</div>`;
  }
  if (kind === "section-intro") {
    return `<p class="section-intro">${inlineFormat(inner.trim())}</p>`;
  }

  return `<div class="fence-${kind.replace(/\s+/g, "-")}">${renderFragment(inner)}</div>`;
}

function findInnermostFence(lines) {
  let depth = 0;
  let start = -1;
  let startType = "";

  for (let i = 0; i < lines.length; i++) {
    const open = /^:::\s*(.+)$/.exec(lines[i]);
    const close = /^:::\s*$/.test(lines[i]);

    if (open) {
      if (depth === 0) {
        start = i;
        startType = open[1].trim();
      }
      depth++;
      continue;
    }

    if (close) {
      depth--;
      if (depth === 0 && start >= 0) {
        return {
          start,
          end: i,
          type: startType,
          inner: lines.slice(start + 1, i).join("\n"),
        };
      }
    }
  }

  return null;
}

function extractFences(src) {
  const placeholders = [];
  let index = 0;
  let lines = src.replace(/\r\n/g, "\n").split("\n");

  while (true) {
    const found = findInnermostFence(lines);
    if (!found) break;
    const key = `%%FENCE_${index}%%`;
    placeholders.push({ key, type: found.type, inner: found.inner });
    lines = [...lines.slice(0, found.start), key, ...lines.slice(found.end + 1)];
    index++;
  }

  return { stripped: lines.join("\n"), placeholders };
}

function materializeFences(placeholders, renderFragment) {
  const rendered = new Map();
  for (const p of placeholders) {
    let inner = p.inner;
    for (const q of placeholders) {
      if (rendered.has(q.key) && inner.includes(q.key)) {
        inner = inner.split(q.key).join(rendered.get(q.key));
      }
    }
    rendered.set(p.key, renderFence(p.type, inner, renderFragment));
  }
  return rendered;
}

function restoreFences(html, rendered) {
  let out = html;
  for (const [key, fenceHtml] of rendered.entries()) {
    out = out.replace(`<p>${key}</p>`, fenceHtml);
    out = out.split(key).join(fenceHtml);
  }
  return out;
}

function renderMarkdown(src, { skipFirstH1 = false, rendered = new Map() } = {}) {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let para = [];
  let listType = null;
  let skippedH1 = false;
  let lastH2 = "";
  let pendingWerklijstH3 = null;

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
      out.push('<hr class="section-break" />');
      i++;
      continue;
    }

    if (trimmed.startsWith("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      flushPara();
      flushList();
      const { html, next } = parseTable(lines, i);
      let tableClass = "data-table";
      if (lastH2.includes("bekeken")) tableClass += " scope-table";
      else if (lastH2.includes("Werklijst")) tableClass += " werklijst-table";
      else if (lastH2.includes("Bijlage")) tableClass += " appendix-table";
      const tableHtml = html.replace("<table>", `<table class="${tableClass}">`);
      if (tableClass.includes("werklijst-table") && pendingWerklijstH3) {
        out.push(`<div class="werklijst-block">${pendingWerklijstH3}<div class="table-shell">${tableHtml}</div></div>`);
        pendingWerklijstH3 = null;
      } else if (tableClass.includes("werklijst-table")) {
        out.push(`<div class="table-shell">${tableHtml}</div>`);
      } else {
        out.push(tableHtml);
      }
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
      const text = h[2];
      if (level === 2) {
        lastH2 = text;
        pendingWerklijstH3 = null;
      }
      if (level === 3 && lastH2.includes("Werklijst")) {
        pendingWerklijstH3 = `<h3>${inlineFormat(text)}</h3>`;
        i++;
        continue;
      }
      const sectionClass = level === 2 ? ' class="section-head"' : "";
      out.push(`<h${level}${sectionClass}>${inlineFormat(text)}</h${level}>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushPara();
      flushList();
      out.push(`<blockquote class="callout"><p>${inlineFormat(trimmed.replace(/^>\s?/, ""))}</p></blockquote>`);
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
  return restoreFences(out.join("\n"), rendered);
}

function sectionClass(part) {
  const head = part.slice(0, 160);
  if (/Bijlage/.test(head)) return "report-section report-section--appendix";
  if (/Bevindingen|Werklijst/.test(head)) return "report-section report-section--chapter";
  return "report-section";
}

function isAppendixPart(part) {
  return /Bijlage/.test(part.slice(0, 200));
}

function wrapReportSections(html) {
  const parts = html.split(/(?=<h2 class="section-head">)/).filter((p) => p.trim());
  if (parts.length <= 1) return html;
  const main = parts.filter((part) => !isAppendixPart(part));
  const appendices = parts.filter((part) => isAppendixPart(part));
  return [...main, ...appendices]
    .map((part) => `<section class="${sectionClass(part)}">${part}</section>`)
    .join("\n");
}

function mdToHtml(src, { skipFirstH1 = false } = {}) {
  const { stripped, placeholders } = extractFences(src);
  const fragment = (inner) => renderMarkdown(inner, { rendered: new Map() });
  const rendered = materializeFences(placeholders, fragment);
  return wrapReportSections(renderMarkdown(stripped, { skipFirstH1, rendered }));
}

function extractCoverKpis(src) {
  const match = src.match(/:::kpi\n([\s\S]*?)\n:::/);
  if (!match) {
    return [];
  }
  return match[1]
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [value, label, note = ""] = line.split("|").map((s) => s.trim());
      return { value, label, note };
    });
}

function renderCoverKpiTable(kpis) {
  if (kpis.length === 0) return "";
  const values = kpis.map((k) => `<td>${escapeHtml(k.value)}</td>`).join("");
  const labels = kpis.map((k) => `<td>${escapeHtml(k.label)}</td>`).join("");
  const notes = kpis.some((k) => k.note)
    ? `<tr class="cover-kpi-notes">${kpis.map((k) => `<td>${escapeHtml(k.note)}</td>`).join("")}</tr>`
    : "";
  return `<table class="cover-kpi"><tr class="cover-kpi-values">${values}</tr><tr class="cover-kpi-labels">${labels}</tr>${notes}</table>`;
}

const titleMatch = md.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1] : "Sitewerk-rapport";
const titleParts = title.split("—").map((s) => s.trim());
const klant = titleParts[0] || "Klant";
const belofte = titleParts[1] || "Wat er speelt online — en wat we eerst doen.";
const datumMatch = md.match(/\*\*Peildatum:\*\*\s*(.+)/);
const datum = datumMatch ? datumMatch[1].trim() : "";
const coverKpis = extractCoverKpis(md);
const bodyMd = md.replace(/:::kpi\n[\s\S]*?\n:::\s*\n?/, "");
const body = mdToHtml(bodyMd, { skipFirstH1: true });

const tokenDir = path.join(repoRoot, "tokens");
const tokenFiles = ["typography.css", "colors.css", "spacing.css", "components.css"];
const themePath = path.join(repoRoot, "assets/rapport-theme.css");
let themeCss = "";
for (const file of tokenFiles) {
  themeCss += fs.readFileSync(path.join(tokenDir, file), "utf8") + "\n";
}
themeCss += fs
  .readFileSync(themePath, "utf8")
  .replace(/@import url\("\.\.\/tokens\/[^"]+"\);\s*/g, "");

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
${themeCss}
  </style>
  <link rel="stylesheet" href="${themeHref.split(path.sep).join("/")}" />
</head>
<body>
  <header class="cover cover-papier">
    <div class="cover-rule" aria-hidden="true"></div>
    <div class="cover-inner">
      <p class="brand">Sitewerk</p>
      <div class="cover-center">
        <h1>${escapeHtml(klant)}</h1>
        <p class="cover-date">${escapeHtml(datum)}</p>
        <p class="cover-belofte">${escapeHtml(belofte)}</p>
      </div>
      ${renderCoverKpiTable(coverKpis)}
    </div>
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

if (!htmlOnly) {
  const pdfResult = spawnSync(
    process.execPath,
    [path.join(__dirname, "html-to-pdf.js"), outPath],
    { cwd: repoRoot, stdio: "inherit" },
  );
  if (pdfResult.status !== 0) {
    process.exit(pdfResult.status ?? 1);
  }
}

/**
 * SVG charts styled after GSC Performance + agency report patterns.
 * Pure functions — no DOM. Used by md-to-html.js for print PDFs.
 */

function parseNum(s) {
  return parseFloat(String(s).replace(/[^\d.,-]/g, "").replace(",", ".")) || 0;
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function chartShell(title, subtitle, svg, legendHtml = "") {
  return `<div class="gsc-chart-shell">
  <div class="gsc-chart-head">
    <h4 class="gsc-chart-title">${escapeXml(title)}</h4>
    ${subtitle ? `<p class="gsc-chart-sub">${escapeXml(subtitle)}</p>` : ""}
  </div>
  ${legendHtml}
  <div class="gsc-chart-body">${svg}</div>
  <p class="gsc-chart-note">fictief / voorbeeld</p>
</div>`;
}

function legend(items) {
  const chips = items
    .map((item) => `<span class="gsc-legend-item"><span class="gsc-legend-swatch ${item.className}"></span>${escapeXml(item.label)}</span>`)
    .join("");
  return `<div class="gsc-legend">${chips}</div>`;
}

function yTicks(max, count = 4) {
  const step = max / count;
  return Array.from({ length: count + 1 }, (_, i) => Math.round(step * i));
}

function renderGscTrendChart(lines) {
  const rows = lines
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [period, clicks, impressions] = line.split("|").map((s) => s.trim());
      return { period, clicks: parseNum(clicks), impressions: parseNum(impressions) };
    });
  if (rows.length === 0) return "";

  const W = 520;
  const H = 210;
  const pad = { l: 44, r: 44, t: 16, b: 36 };
  const chartW = W - pad.l - pad.r;
  const chartH = H - pad.t - pad.b;
  const maxClicks = Math.max(...rows.map((r) => r.clicks), 1) * 1.15;
  const maxImpr = Math.max(...rows.map((r) => r.impressions), 1) * 1.15;
  const slot = chartW / rows.length;

  let bars = "";
  let points = "";
  rows.forEach((row, i) => {
    const cx = pad.l + slot * i + slot / 2;
    const barH = (row.clicks / maxClicks) * chartH;
    const barX = cx - slot * 0.22;
    const barW = slot * 0.44;
    bars += `<rect class="gsc-bar-clicks" x="${barX.toFixed(1)}" y="${(pad.t + chartH - barH).toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" rx="1"/>`;
    const py = pad.t + chartH - (row.impressions / maxImpr) * chartH;
    points += `${cx.toFixed(1)},${py.toFixed(1)} `;
    bars += `<text class="gsc-axis-label" x="${cx.toFixed(1)}" y="${H - 8}" text-anchor="middle">${escapeXml(row.period)}</text>`;
  });

  let yLeft = "";
  for (const tick of yTicks(maxClicks)) {
    const y = pad.t + chartH - (tick / maxClicks) * chartH;
    yLeft += `<text class="gsc-axis-tick" x="${pad.l - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end">${tick}</text>`;
    if (tick > 0) {
      yLeft += `<line class="gsc-grid" x1="${pad.l}" y1="${y.toFixed(1)}" x2="${(pad.l + chartW).toFixed(1)}" y2="${y.toFixed(1)}"/>`;
    }
  }

  let yRight = "";
  for (const tick of yTicks(maxImpr)) {
    const y = pad.t + chartH - (tick / maxImpr) * chartH;
    const label = tick >= 1000 ? `${Math.round(tick / 1000)}k` : tick;
    yRight += `<text class="gsc-axis-tick gsc-axis-tick-right" x="${(pad.l + chartW + 6).toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="start">${label}</text>`;
  }

  const svg = `<svg class="gsc-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Klikken en vertoningen over tijd">
    ${yLeft}
    <line class="gsc-axis" x1="${pad.l}" y1="${pad.t + chartH}" x2="${pad.l + chartW}" y2="${pad.t + chartH}"/>
    <polyline class="gsc-line-impressions" points="${points.trim()}"/>
    ${rows.map((row, i) => {
      const cx = pad.l + slot * i + slot / 2;
      const py = pad.t + chartH - (row.impressions / maxImpr) * chartH;
      return `<circle class="gsc-dot-impressions" cx="${cx.toFixed(1)}" cy="${py.toFixed(1)}" r="2.5"/>`;
    }).join("")}
    ${bars}
    ${yRight}
    <text class="gsc-axis-title" x="8" y="${(pad.t + chartH / 2).toFixed(1)}" transform="rotate(-90 8 ${(pad.t + chartH / 2).toFixed(1)})">Klikken</text>
    <text class="gsc-axis-title gsc-axis-title-right" x="${W - 8}" y="${(pad.t + chartH / 2).toFixed(1)}" transform="rotate(90 ${W - 8} ${(pad.t + chartH / 2).toFixed(1)})">Vertoningen</text>
  </svg>`;

  return chartShell(
    "Klikken en vertoningen over tijd",
    "GSC Performance-patroon: staafdiagram klikken + lijn vertoningen (wekelijks)",
    svg,
    legend([
      { className: "swatch-clicks", label: "Klikken" },
      { className: "swatch-impressions", label: "Vertoningen" },
    ]),
  );
}

function renderGscMetricsChart(lines) {
  const rows = lines
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [period, ctr, position] = line.split("|").map((s) => s.trim());
      return { period, ctr: parseNum(ctr), position: parseNum(position) };
    });
  if (rows.length === 0) return "";

  const W = 520;
  const H = 210;
  const pad = { l: 44, r: 44, t: 16, b: 36 };
  const chartW = W - pad.l - pad.r;
  const chartH = H - pad.t - pad.b;
  const maxCtr = Math.max(...rows.map((r) => r.ctr), 1) * 1.2;
  const minPos = Math.min(...rows.map((r) => r.position)) * 0.85;
  const maxPos = Math.max(...rows.map((r) => r.position)) * 1.1;
  const posRange = maxPos - minPos || 1;
  const slot = chartW / rows.length;

  let ctrPoints = "";
  let posPoints = "";
  let labels = "";
  rows.forEach((row, i) => {
    const cx = pad.l + slot * i + slot / 2;
    const cyCtr = pad.t + chartH - (row.ctr / maxCtr) * chartH;
    const cyPos = pad.t + chartH - ((row.position - minPos) / posRange) * chartH;
    ctrPoints += `${cx.toFixed(1)},${cyCtr.toFixed(1)} `;
    posPoints += `${cx.toFixed(1)},${cyPos.toFixed(1)} `;
    labels += `<text class="gsc-axis-label" x="${cx.toFixed(1)}" y="${H - 8}" text-anchor="middle">${escapeXml(row.period)}</text>`;
  });

  let grid = "";
  for (const tick of yTicks(maxCtr, 3)) {
    const y = pad.t + chartH - (tick / maxCtr) * chartH;
    grid += `<line class="gsc-grid" x1="${pad.l}" y1="${y.toFixed(1)}" x2="${(pad.l + chartW).toFixed(1)}" y2="${y.toFixed(1)}"/>`;
    grid += `<text class="gsc-axis-tick" x="${pad.l - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end">${tick.toFixed(1)}%</text>`;
  }
  for (let i = 0; i <= 3; i++) {
    const pos = minPos + (posRange * i) / 3;
    const y = pad.t + chartH - ((pos - minPos) / posRange) * chartH;
    grid += `<text class="gsc-axis-tick gsc-axis-tick-right" x="${(pad.l + chartW + 6).toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="start">${pos.toFixed(1)}</text>`;
  }

  const svg = `<svg class="gsc-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="CTR en gemiddelde positie over tijd">
    ${grid}
    <line class="gsc-axis" x1="${pad.l}" y1="${pad.t + chartH}" x2="${pad.l + chartW}" y2="${pad.t + chartH}"/>
    <polyline class="gsc-line-ctr" points="${ctrPoints.trim()}"/>
    <polyline class="gsc-line-position" points="${posPoints.trim()}"/>
    ${labels}
    <text class="gsc-axis-title" x="8" y="${(pad.t + chartH / 2).toFixed(1)}" transform="rotate(-90 8 ${(pad.t + chartH / 2).toFixed(1)})">CTR %</text>
    <text class="gsc-axis-title gsc-axis-title-right" x="${W - 8}" y="${(pad.t + chartH / 2).toFixed(1)}" transform="rotate(90 ${W - 8} ${(pad.t + chartH / 2).toFixed(1)})">Gem. positie</text>
  </svg>`;

  return chartShell(
    "CTR en gemiddelde positie over tijd",
    "Twee lijnen, dubbele as — zoals GSC metric-toggle en agency dashboards",
    svg,
    legend([
      { className: "swatch-ctr", label: "CTR" },
      { className: "swatch-position", label: "Gem. positie" },
    ]),
  );
}

function parseCompareLines(lines) {
  let periodLabels = ["Nulmeting", "30 dagen", "90 dagen"];
  const dataLines = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("# periods:")) {
      periodLabels = trimmed
        .replace("# periods:", "")
        .split("|")
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }
    if (trimmed.startsWith("#")) continue;
    dataLines.push(trimmed);
  }
  return { periodLabels, dataLines };
}

function renderGscCompareChart(lines, { title, subtitle, periods }) {
  const rows = lines
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const parts = line.split("|").map((s) => s.trim());
      const label = parts[0];
      const values = parts.slice(1, 1 + periods.length).map(parseNum);
      return { label, values };
    });
  if (rows.length === 0) return "";

  const W = 520;
  const rowH = 34;
  const pad = { l: 132, r: 16, t: 20, b: 28 };
  const H = pad.t + pad.b + rows.length * rowH + 8;
  const chartW = W - pad.l - pad.r;
  const maxVal = Math.max(...rows.flatMap((r) => r.values), 1) * 1.1;
  const barH = (rowH - 6) / periods.length - 2;

  let content = "";
  rows.forEach((row, ri) => {
    const rowY = pad.t + ri * rowH;
    const label = row.label.length > 22 ? `${row.label.slice(0, 20)}…` : row.label;
    content += `<text class="gsc-compare-label" x="${pad.l - 8}" y="${(rowY + rowH / 2 + 3).toFixed(1)}" text-anchor="end">${escapeXml(label)}</text>`;
    row.values.forEach((val, pi) => {
      const y = rowY + 3 + pi * (barH + 2);
      const barLen = (val / maxVal) * chartW;
      const opacity = pi === 0 ? 0.45 : pi === 1 ? 0.72 : 1;
      content += `<rect class="gsc-bar-compare" x="${pad.l}" y="${y.toFixed(1)}" width="${barLen.toFixed(1)}" height="${barH.toFixed(1)}" rx="1" style="opacity:${opacity}"/>`;
      if (val > 0) {
        content += `<text class="gsc-bar-value" x="${(pad.l + barLen + 4).toFixed(1)}" y="${(y + barH - 1).toFixed(1)}" text-anchor="start">${val}</text>`;
      }
    });
  });

  const legendItems = periods.map((label, i) => ({
    className: `swatch-period-${i}`,
    label,
  }));

  const svg = `<svg class="gsc-svg gsc-svg-compare" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeXml(title)}">
    <line class="gsc-axis" x1="${pad.l}" y1="${H - pad.b}" x2="${W - pad.r}" y2="${H - pad.b}"/>
    ${content}
  </svg>`;

  return chartShell(title, subtitle, svg, legend(legendItems));
}

function renderGscCompareQueries(lines) {
  const { periodLabels, dataLines } = parseCompareLines(lines);
  return renderGscCompareChart(dataLines, {
    title: "Top zoekopdrachten — klikken per periode",
    subtitle: "Groepstaafdiagram: nulmeting vs vervolg (SE Ranking / agency-vergelijkingspatroon)",
    periods: periodLabels,
  });
}

function renderGscComparePages(lines) {
  const { periodLabels, dataLines } = parseCompareLines(lines);
  return renderGscCompareChart(dataLines, {
    title: "Top pagina's — klikken per periode",
    subtitle: "Landingpage-vergelijking over rapportmomenten",
    periods: periodLabels,
  });
}

module.exports = {
  renderGscTrendChart,
  renderGscMetricsChart,
  renderGscCompareQueries,
  renderGscComparePages,
};

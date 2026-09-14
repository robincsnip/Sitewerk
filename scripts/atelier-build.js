#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const VARIANTS = ["redactie", "gids", "compact"];
const SKINS = { redactie: "terras", gids: "keuken", compact: "allday" };
const PAGES = [
  "index",
  "plaatsen",
  "provincie-drenthe",
  "plek-kampen",
  "over",
  "contact",
];

function fail(message) {
  console.error(`atelier-build: ${message}`);
  process.exit(1);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function bundleCss(extraRelPaths) {
  const files = [
    "tokens/colors.css",
    "tokens/typography.css",
    "tokens/spacing.css",
    "tokens/components.css",
    "assets/atelier/screen.css",
    "assets/atelier/preview-banner.css",
    ...extraRelPaths,
  ];
  return files.map(read).join("\n\n");
}

function loadFacts(runId) {
  const file = path.join(ROOT, "runs", runId, "atelier", "feiten.json");
  if (!fs.existsSync(file)) fail(`geen feiten.json in runs/${runId}/atelier/`);
  const facts = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!facts.name) fail("feiten.json mist name");
  if (!Array.isArray(facts.services) || facts.services.length === 0) {
    fail("feiten.json mist services[]");
  }
  for (const key of ["adres", "telefoon", "uren"]) {
    if (facts[key]) fail(`geen ${key} verzinnen of vullen zonder dossier; gebruik null`);
  }
  return facts;
}

function href(page) {
  return `${page}.html`;
}

function banner(facts) {
  return `<div class="preview-banner">${escapeHtml(facts.preview.banner)}</div>`;
}

function skipLink() {
  return `<a class="skip" href="#inhoud">Naar inhoud</a>`;
}

function documentShell({ facts, variant, title, current, body, script }) {
  const cssHref = "../_assets/" + (variant === "chooser" ? "chooser.css" : `${variant}.css`);
  const skin = SKINS[variant] || "";
  const extra = script ? `\n  <script src="${script}" defer></script>` : "";
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="${escapeHtml(facts.preview.robots)}">
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="${cssHref}">${extra}
</head>
<body data-atelier-variant="${escapeHtml(variant)}" data-atelier-skin="${escapeHtml(skin)}" data-atelier-page="${escapeHtml(current)}">
${banner(facts)}
${skipLink()}
${body}
</body>
</html>
`;
}

function navCurrent(current, page) {
  return current === page ? ' aria-current="page"' : "";
}

function redactieChrome(facts, current, inner) {
  const n = facts.name;
  return `
<header class="masthead">
  <a class="mark" href="${href("index")}">${escapeHtml(n)}</a>
  <nav aria-label="Hoofd">
    <a href="${href("plaatsen")}"${navCurrent(current, "plaatsen")}>Plekken</a>
    <a href="${href("provincie-drenthe")}"${navCurrent(current, "provincie-drenthe")}>Gids</a>
    <a href="${href("over")}"${navCurrent(current, "over")}>Over</a>
  </nav>
</header>
<main id="inhoud">${inner}</main>
<footer class="colophon">
  <p>${escapeHtml(n)} · ${escapeHtml(facts.domain)}</p>
  <p><a href="${href("contact")}">Contact</a></p>
</footer>`;
}

function gidsChrome(facts, current, inner) {
  const n = facts.name;
  return `
<div class="shell">
  <aside class="rail">
    <a class="mark" href="${href("index")}">${escapeHtml(n)}</a>
    <nav aria-label="Hoofd">
      <a href="${href("index")}"${navCurrent(current, "index")}>Home</a>
      <a href="${href("plaatsen")}"${navCurrent(current, "plaatsen")}>Alle plekken</a>
      <a href="${href("provincie-drenthe")}"${navCurrent(current, "provincie-drenthe")}>Provincies</a>
      <a href="${href("over")}"${navCurrent(current, "over")}>Over</a>
      <a href="${href("contact")}"${navCurrent(current, "contact")}>Contact</a>
    </nav>
    <p class="rail-foot">${escapeHtml(facts.listings_nl)} plekken in Nederland · ${escapeHtml(String(facts.province_hubs))} provincie-overzichten</p>
  </aside>
  <div class="canvas" id="inhoud">${inner}</div>
</div>`;
}

function compactChrome(facts, current, inner, options = {}) {
  const n = facts.name;
  const withEnd = options.endbar !== false;
  return `
<header class="topbar">
  <a class="mark" href="${href("index")}">${escapeHtml(n)}</a>
  <nav aria-label="Hoofd">
    <a href="${href("plaatsen")}"${navCurrent(current, "plaatsen")}>Plekken</a>
    <a href="${href("contact")}"${navCurrent(current, "contact")}>Contact</a>
  </nav>
  <a class="cta" href="${href("plaatsen")}">Plekken bekijken</a>
</header>
${inner}
${withEnd ? `<footer class="endbar">
  <span>${escapeHtml(n)}</span>
  <a href="${href("over")}">Over</a>
</footer>` : ""}`;
}

function servicesList(facts) {
  return `<ul>${facts.services.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`;
}

function pageTitle(facts, page) {
  const drenthe = facts.hubs.find((h) => h.slug === "drenthe");
  const place = facts.specimen_place;
  if (page === "index") return facts.name;
  if (page === "plaatsen") return `Plekken · ${facts.name}`;
  if (page === "provincie-drenthe") return `${drenthe.name} · ${facts.name}`;
  if (page === "plek-kampen") return `${place.listing} · ${facts.name}`;
  if (page === "over") return `Over · ${facts.name}`;
  if (page === "contact") return `Contact · ${facts.name}`;
  return facts.name;
}

function pageBodies(facts) {
  const drenthe = facts.hubs.find((h) => h.slug === "drenthe");
  const overijssel = facts.hubs.find((h) => h.slug === "overijssel");
  const place = facts.specimen_place;

  return {
    redactie: {
      index: `
<p class="kicker">Gids</p>
<h1>${escapeHtml(facts.tagline)}</h1>
<p class="lead typewriter" data-typewriter="${escapeHtml(String(facts.listings_nl))} plekken in Nederland, ${escapeHtml(String(facts.province_hubs))} provincie-overzichten, stadspagina’s en plekpagina’s met een bronlink."></p>
<p class="only-cta"><a class="cta" href="${href("provincie-drenthe")}">Open de gids</a></p>
<div class="drop">
  <p>${escapeHtml(facts.name)} is een overzicht van camperplaatsen in Nederland: plekken, steden en provincies, met een bronlink per plek.</p>
</div>
<blockquote class="pull">${escapeHtml(drenthe.name)}: ${escapeHtml(String(drenthe.count))} plekken in het overzicht.</blockquote>
<ol class="toc">
  <li><a href="${href("provincie-drenthe")}">${escapeHtml(drenthe.name)}</a><span>${escapeHtml(String(drenthe.count))}</span></li>
  <li><a href="${href("plek-kampen")}">${escapeHtml(place.name)}</a><span>${escapeHtml(overijssel.name)}</span></li>
  <li><a href="${href("plaatsen")}">Alle plekken</a><span>${escapeHtml(String(facts.listings_nl))}</span></li>
</ol>`,
      plaatsen: `
<p class="crumb"><a href="${href("index")}">Home</a> / Plekken</p>
<h1>Plekken in Nederland</h1>
<p>${escapeHtml(facts.listings_nl)} plekken in het Nederlandse overzicht. Belgische en Duitse plekken horen niet in dit overzicht tot er landpagina’s zijn.</p>
<ul class="toc">
  <li><a href="${href("plek-kampen")}">${escapeHtml(place.listing)}</a><span>${escapeHtml(place.city)}, ${escapeHtml(place.province)}</span></li>
</ul>`,
      "provincie-drenthe": `
<p class="crumb"><a href="${href("index")}">Gids</a> / ${escapeHtml(drenthe.name)}</p>
<h1>Camperplaatsen in ${escapeHtml(drenthe.name)}</h1>
<p class="lead">${escapeHtml(String(drenthe.count))} plekken in dit provincie-overzicht.</p>
<p>Wie ${escapeHtml(drenthe.name)} zoekt, komt op deze provinciepagina — niet op een algemene zoekpagina.</p>
<p><a href="${href("plaatsen")}">Naar het Nederlandse overzicht</a></p>`,
      "plek-kampen": `
<p class="crumb"><a href="${href("plaatsen")}">Plekken</a> / <a href="${href("index")}">${escapeHtml(place.province)}</a> / ${escapeHtml(place.city)}</p>
<h1>${escapeHtml(place.listing)}</h1>
<p class="lead">${escapeHtml(place.city)}, ${escapeHtml(place.province)}.</p>
<div class="drop">
  <p>Voorzieningen, OpenStreetMap-kaart en een bronlink naar gemeente of eigenaar. Daarna kun je de plek claimen.</p>
</div>
<p>Claimen: «${escapeHtml(place.claim_label)}» (${escapeHtml(place.claim_price)}). Dat staat onder de plekfeiten.</p>`,
      over: `
<p class="kicker">Colofon</p>
<h1>Over ${escapeHtml(facts.name)}</h1>
<p>${escapeHtml(facts.name)} (${escapeHtml(facts.domain)}) is een gids met plek-, stad- en provinciepagina’s. Diensten:</p>
${servicesList(facts)}`,
      contact: `
<p class="kicker">Contact</p>
<h1>Contact</h1>
<p>Telefoon en bezoekadres staan niet op deze pagina.</p>`,
    },
    gids: {
      index: `
<h1>Camperplaatsen in Nederland</h1>
<p>${escapeHtml(String(facts.listings_nl))} plekken · ${escapeHtml(String(facts.province_hubs))} provincie-overzichten. Kies een provincie.</p>
<ul class="hubs">
  <li><a href="${href("provincie-drenthe")}"><span class="nr">01</span><strong>${escapeHtml(drenthe.name)}</strong><span>${escapeHtml(String(drenthe.count))}</span></a></li>
  <li><a href="${href("plek-kampen")}"><span class="nr">02</span><strong>${escapeHtml(overijssel.name)}</strong><span>${escapeHtml(place.city)}</span></a></li>
</ul>
<p><a class="btn" href="${href("plaatsen")}">${escapeHtml(String(facts.listings_nl))} plekken</a></p>`,
      plaatsen: `
<h1>Alle plekken</h1>
<p>Nederlandse index: ${escapeHtml(String(facts.listings_nl))} plekpagina’s. Geen buitenland in dit overzicht.</p>
<ul class="list">
  <li><a href="${href("plek-kampen")}">${escapeHtml(place.listing)}</a><span>${escapeHtml(place.city)}</span></li>
</ul>`,
      "provincie-drenthe": `
<h1>${escapeHtml(drenthe.name)}</h1>
<p>${escapeHtml(String(drenthe.count))} plekken in ${escapeHtml(drenthe.name)}.</p>
<dl class="facts">
  <dt>Plekken</dt><dd>${escapeHtml(String(drenthe.count))}</dd>
</dl>
<p><a href="${href("plaatsen")}">Terug naar alle plekken</a></p>`,
      "plek-kampen": `
<h1>${escapeHtml(place.listing)}</h1>
<dl class="facts">
  <dt>Plaats</dt><dd>${escapeHtml(place.city)}</dd>
  <dt>Provincie</dt><dd>${escapeHtml(place.province)}</dd>
  <dt>Bron</dt><dd>Gemeente of eigenaar</dd>
  <dt>Kaart</dt><dd>OpenStreetMap</dd>
  <dt>Claim</dt><dd>${escapeHtml(place.claim_label)} · ${escapeHtml(place.claim_price)}</dd>
</dl>`,
      over: `
<h1>Over ${escapeHtml(facts.name)}</h1>
${servicesList(facts)}`,
      contact: `
<h1>Contact</h1>
<p>Telefoon en bezoekadres staan niet op deze pagina.</p>`,
    },
    compact: {
      index: `
<section class="hero">
  <div>
    <h1>${escapeHtml(facts.tagline)}</h1>
    <p>${escapeHtml(facts.services.join(" · "))}</p>
  </div>
  <p class="count"><span>Nederland</span> ${escapeHtml(String(facts.listings_nl))}</p>
</section>
<div class="strips">
  <a class="strip" href="${href("plaatsen")}"><span class="label">Plekken</span><h2>Nederlandse index</h2><span>${escapeHtml(String(facts.listings_nl))}</span></a>
  <a class="strip" href="${href("provincie-drenthe")}"><span class="label">Provincie</span><h2>${escapeHtml(drenthe.name)}</h2><span>${escapeHtml(String(drenthe.count))} plekken</span></a>
  <a class="strip" href="${href("plek-kampen")}"><span class="label">Plek</span><h2>${escapeHtml(place.listing)}</h2><span>${escapeHtml(place.city)}</span></a>
</div>`,
      plaatsen: `
<main class="narrow" id="inhoud">
  <h1>Plekken</h1>
  <p>${escapeHtml(facts.listings_nl)} plekken in Nederland.</p>
  <p><a href="${href("plek-kampen")}">${escapeHtml(place.listing)}</a> — ${escapeHtml(place.city)}, ${escapeHtml(place.province)}</p>
</main>`,
      "provincie-drenthe": `
<main class="narrow" id="inhoud">
  <h1>${escapeHtml(drenthe.name)}</h1>
  <p>${escapeHtml(String(drenthe.count))} plekken in dit overzicht.</p>
</main>`,
      "plek-kampen": `
<main class="narrow" id="inhoud">
  <h1>${escapeHtml(place.listing)}</h1>
  <p>${escapeHtml(place.city)} · ${escapeHtml(place.province)}</p>
  <p>Voorzieningen en bron, daarna claim «${escapeHtml(place.claim_label)}» (${escapeHtml(place.claim_price)}).</p>
  <p><a href="${href("plaatsen")}">Meer plekken</a></p>
</main>`,
      over: `
<main class="narrow" id="inhoud">
  <h1>Over</h1>
  ${servicesList(facts)}
</main>`,
      contact: `
<main class="narrow" id="inhoud">
  <h1>Contact</h1>
  <p>Telefoon en bezoekadres staan niet op deze pagina.</p>
</main>`,
    },
  };
}

function wrap(facts, variant, page, inner) {
  if (variant === "redactie") return redactieChrome(facts, page, inner);
  if (variant === "gids") return gidsChrome(facts, page, inner);
  if (page === "index") {
    return compactChrome(facts, page, `<div id="inhoud">${inner}</div>`);
  }
  return compactChrome(facts, page, inner);
}

function chooserPage(facts) {
  const line = "Drie huiden. Dezelfde feiten. Niet live.";
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="${escapeHtml(facts.preview.robots)}">
  <title>Atelier — ${escapeHtml(facts.name)}</title>
  <link rel="stylesheet" href="_assets/chooser.css">
  <script src="_assets/typewriter.js" defer></script>
</head>
<body class="chooser" data-atelier-scene="0">
${banner(facts)}
<main class="chooser-main" id="inhoud">
  <p class="scene">Scène 0 · atelier</p>
  <h1>${escapeHtml(facts.name)}</h1>
  <p class="lead typewriter" data-typewriter="${escapeHtml(line)}"></p>
  <div class="variants">
    <a href="redactie/"><strong>Redactie</strong><span>Huid terras — magazine, typewriter, één CTA de gids in.</span></a>
    <a href="gids/"><strong>Gids</strong><span>Huid keuken — type/grid, geen kaarten.</span></a>
    <a href="compact/"><strong>Compact</strong><span>Huid allday — één CTA, geen WebGL, geen verzonnen belknop.</span></a>
  </div>
  <p class="note">Papier-tokens. Geen publicatie, geen mail. Bron: ${escapeHtml(facts.bron)} · ${escapeHtml(facts.peildatum)}. <code>npm run atelier:preview -- ${escapeHtml(facts.run_id || "")}</code></p>
</main>
</body>
</html>
`;
}

function writePreview(runId, facts) {
  const outRoot = path.join(ROOT, "runs", runId, "atelier", "preview");
  fs.rmSync(outRoot, { recursive: true, force: true });
  const assetDir = path.join(outRoot, "_assets");
  fs.mkdirSync(assetDir, { recursive: true });

  for (const variant of VARIANTS) {
    fs.writeFileSync(
      path.join(assetDir, `${variant}.css`),
      bundleCss([`assets/atelier/${variant}.css`]),
    );
  }
  fs.writeFileSync(
    path.join(assetDir, "chooser.css"),
    bundleCss(["assets/atelier/chooser.css"]),
  );
  fs.copyFileSync(
    path.join(ROOT, "assets", "atelier", "typewriter.js"),
    path.join(assetDir, "typewriter.js"),
  );

  const bodies = pageBodies(facts);
  for (const variant of VARIANTS) {
    const dir = path.join(outRoot, variant);
    fs.mkdirSync(dir, { recursive: true });
    for (const page of PAGES) {
      const inner = bodies[variant][page];
      if (!inner) fail(`geen body voor ${variant}/${page}`);
      const title = pageTitle(facts, page);
      const html = documentShell({
        facts,
        variant,
        title,
        current: page,
        body: wrap(facts, variant, page, inner),
        script: variant === "redactie" && page === "index" ? "../_assets/typewriter.js" : "",
      });
      fs.writeFileSync(path.join(dir, `${page}.html`), html);
    }
  }
  fs.writeFileSync(path.join(outRoot, "index.html"), chooserPage(facts));
  return outRoot;
}

function main() {
  const runId = process.argv[2];
  if (!runId) fail("gebruik: node scripts/atelier-build.js <run-id>");
  const facts = loadFacts(runId);
  facts.run_id = runId;
  const out = writePreview(runId, facts);
  console.log(`atelier-build: ${out}`);
}

module.exports = { VARIANTS, SKINS, PAGES, loadFacts, writePreview, pageTitle };

if (require.main === module) {
  main();
}

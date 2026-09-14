#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const { writePreview } = require("./atelier-build");

const ROOT = path.join(__dirname, "..");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function malIsClean() {
  const malDir = path.join(ROOT, "templates", "atelier");
  const cssDir = path.join(ROOT, "assets", "atelier");
  const files = [...walk(malDir), ...walk(cssDir), path.join(ROOT, "scripts", "atelier-build.js")];
  const joined = files
    .filter((f) => !f.endsWith("atelier-build.js"))
    .map((f) => fs.readFileSync(f, "utf8"))
    .join("\n");
  assert(!/Camperstaan/i.test(joined), "mal bevat Camperstaan-audit-inhoud");
  assert(!/\bP0\b/.test(joined), "mal bevat audit-P-labels");
}

function main() {
  malIsClean();

  const facts = {
    name: "Voorbeeldgids",
    domain: "example.test",
    kind: "directory",
    peildatum: "1 januari 2026",
    bron: "templates/atelier/facts.example.json",
    tagline: "Overzicht van plekken in Nederland",
    listings_nl: 10,
    province_hubs: 2,
    services: ["Overzicht van plekken", "Provincie-overzichten"],
    pages_known: ["/", "/over", "/contact"],
    hubs: [
      { slug: "drenthe", name: "Drenthe", count: 3 },
      { slug: "overijssel", name: "Overijssel", count: null },
    ],
    specimen_place: {
      name: "Kampen",
      city: "Kampen",
      listing: "Camperplaats Kampen",
      province: "Overijssel",
      claim_label: "Dit is van mij",
      claim_price: "€ 99",
    },
    adres: null,
    telefoon: null,
    uren: null,
    preview: {
      banner: "Sitewerk-preview · niet live · geen publicatie · geen mail",
      robots: "noindex, nofollow",
    },
  };

  const runId = "selftest-atelier";
  const runDir = path.join(ROOT, "runs", runId);
  fs.mkdirSync(path.join(runDir, "atelier"), { recursive: true });
  fs.writeFileSync(
    path.join(runDir, "atelier", "feiten.json"),
    JSON.stringify(facts, null, 2),
  );

  try {
    const out = writePreview(runId, { ...facts, run_id: runId });
    const htmlFiles = walk(out).filter((f) => f.endsWith(".html"));
    assert(htmlFiles.length === 19, `verwacht 19 html, kreeg ${htmlFiles.length}`);

    const redactie = fs.readFileSync(path.join(out, "redactie", "index.html"), "utf8");
    const gids = fs.readFileSync(path.join(out, "gids", "index.html"), "utf8");
    const compact = fs.readFileSync(path.join(out, "compact", "index.html"), "utf8");
    assert(redactie.includes('data-atelier-variant="redactie"'));
    assert(gids.includes('data-atelier-variant="gids"'));
    assert(compact.includes('data-atelier-variant="compact"'));
    assert(redactie.includes("class=\"masthead\""));
    assert(gids.includes("class=\"shell\""));
    assert(compact.includes("class=\"topbar\""));
    assert(redactie.includes('data-atelier-skin="terras"'));
    assert(gids.includes('data-atelier-skin="keuken"'));
    assert(compact.includes('data-atelier-skin="allday"'));
    assert(redactie.includes("data-typewriter"));
    assert(redactie.includes("Voorbeeldgids"));
    assert(gids.includes("Voorbeeldgids"));
    assert(compact.includes("Voorbeeldgids"));
    const chooser = fs.readFileSync(path.join(out, "index.html"), "utf8");
    assert(chooser.includes('data-atelier-scene="0"'));
    assert(chooser.includes("data-typewriter"));
    assert(!/webgl|three\.js|react-three/i.test(redactie + gids + compact));
    for (const file of htmlFiles) {
      const html = fs.readFileSync(file, "utf8");
      assert(html.includes("noindex"), `${file} mist noindex`);
      assert(html.includes("niet live"), `${file} mist preview-banner`);
      assert(!/tel:/i.test(html), `${file} bevat tel:`);
      assert(!/akkoord/.test(html), `${file} bevat toets-akkoord`);
    }
  } finally {
    fs.rmSync(runDir, { recursive: true, force: true });
  }

  console.log("test:atelier ok");
}

main();

#!/usr/bin/env node
/**
 * Bouwer finish hook: build print HTML + PDF for a run.
 * Call after rapport-klant.md and werklijst.md are written.
 *
 * Usage:
 *   npm run audit:finish -- <run-id>
 *   node scripts/finish-audit.js runs/<id>
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const input = process.argv[2];
if (!input) {
  console.error("Usage: npm run audit:finish -- <run-id>");
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, "..");
const runDir = path.isAbsolute(input)
  ? input
  : input.startsWith("runs/")
    ? path.join(repoRoot, input)
    : path.join(repoRoot, "runs", input);

const rapportMd = path.join(runDir, "rapport-klant.md");
const rapportHtml = path.join(runDir, "print", "rapport.html");
const rapportPdf = path.join(runDir, "print", "rapport.pdf");

if (!fs.existsSync(rapportMd)) {
  console.error(`Missing ${rapportMd} — write rapport-klant.md before finish.`);
  process.exit(1);
}

function runNode(script, args) {
  const result = spawnSync(process.execPath, [path.join(__dirname, script), ...args], {
    cwd: repoRoot,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

runNode("md-to-html.js", [rapportMd]);

if (!fs.existsSync(rapportHtml)) {
  console.error(`Missing ${rapportHtml} after md-to-html.`);
  process.exit(1);
}
if (!fs.existsSync(rapportPdf)) {
  console.error(`Missing ${rapportPdf} — PDF step failed or was skipped.`);
  process.exit(1);
}

runNode("check-pagination.js", [rapportHtml]);

console.log(`Audit print ready: ${rapportPdf}`);

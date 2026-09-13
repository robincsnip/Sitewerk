#!/usr/bin/env node
/**
 * Build print HTML + PDF for any Sitewerk run folder.
 *
 * Usage:
 *   node scripts/build-run.js <run-id-or-path>
 *   npm run pdf:run -- demo-2026-09-13
 *   npm run pdf:run -- runs/2026-09-13-camperstaan
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/build-run.js <run-id-or-path>");
  console.error("Example: npm run pdf:run -- demo-2026-09-13");
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

if (!fs.existsSync(rapportMd)) {
  console.error(`Missing source: ${rapportMd}`);
  console.error("Check the run id and that Bouwer wrote rapport-klant.md.");
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
runNode("html-to-pdf.js", [rapportHtml]);

console.log(`Built ${path.join(runDir, "print", "rapport.pdf")}`);

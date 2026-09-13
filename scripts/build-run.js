#!/usr/bin/env node
/**
 * Rebuild print HTML + PDF for any Sitewerk run (manual / after edits).
 * Bouwer uses audit:finish during a run; this is for rebuilds only.
 *
 * Usage:
 *   npm run pdf:run -- <run-id>
 */
const { spawnSync } = require("child_process");
const path = require("path");

const input = process.argv[2];
if (!input) {
  console.error("Usage: npm run pdf:run -- <run-id>");
  process.exit(1);
}

const result = spawnSync(
  process.execPath,
  [path.join(__dirname, "finish-audit.js"), input],
  { stdio: "inherit" },
);
process.exit(result.status ?? 1);

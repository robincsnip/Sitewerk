#!/usr/bin/env node
/**
 * Fail-closed self-test: orphan heading fixture must make the gate exit 1.
 */
const { spawnSync } = require("child_process");
const path = require("path");

const checker = path.join(__dirname, "check-pagination.js");
const fixture = path.join(__dirname, "fixtures/orphan-heading.html");
const result = spawnSync(process.execPath, [checker, fixture], { encoding: "utf8" });
const out = `${result.stdout || ""}\n${result.stderr || ""}`;

if (result.status === 0) {
  console.error("selftest FAILED: checker passed on orphan-heading fixture");
  process.exit(1);
}
if (!/orphan-heading/.test(out)) {
  console.error("selftest FAILED: expected orphan-heading in output:\n", out);
  process.exit(1);
}
console.log("selftest OK: checker fails closed on orphan heading");

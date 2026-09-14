#!/usr/bin/env node
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.join(__dirname, "..");

function fail(message) {
  console.error(`atelier-preview: ${message}`);
  process.exit(1);
}

const runId = process.argv[2];
if (!runId) fail("gebruik: node scripts/atelier-serve.js <run-id>");

const build = spawnSync(process.execPath, [path.join(__dirname, "atelier-build.js"), runId], {
  stdio: "inherit",
});
if (build.status !== 0) process.exit(build.status || 1);

const previewRoot = path.join(ROOT, "runs", runId, "atelier", "preview");
const port = Number(process.env.ATELIER_PORT || 4173);
const host = process.env.ATELIER_HOST || "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type || "text/plain; charset=utf-8" });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);
  let rel = decodeURIComponent(url.pathname);
  if (rel === "/") rel = "/index.html";
  const file = path.normalize(path.join(previewRoot, rel));
  if (!file.startsWith(previewRoot)) {
    send(res, 403, "forbidden");
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      send(res, 404, "niet gevonden");
      return;
    }
    const type = types[path.extname(file)] || "application/octet-stream";
    send(res, 200, data, type);
  });
});

server.listen(port, host, () => {
  console.log(`atelier-preview: http://${host}:${port}/`);
  console.log("niet publiceren — lokale preview");
});

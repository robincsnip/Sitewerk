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

function resolvePreviewPath(previewRoot, pathname) {
  let rel = decodeURIComponent(pathname || "/");
  if (!rel.startsWith("/")) rel = `/${rel}`;
  if (rel.endsWith("/")) rel += "index.html";
  const root = path.resolve(previewRoot);
  const file = path.resolve(path.join(root, rel));
  if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
    return { error: 403 };
  }
  try {
    const st = fs.statSync(file);
    if (st.isDirectory()) {
      const index = path.join(file, "index.html");
      if (fs.existsSync(index)) return { file: index };
      return { error: 404 };
    }
    return { file };
  } catch (_) {
    return { error: 404 };
  }
}

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

function startServer(previewRoot, host, port) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${host}:${port}`);
    const resolved = resolvePreviewPath(previewRoot, url.pathname);
    if (resolved.error) {
      send(res, resolved.error, resolved.error === 403 ? "forbidden" : "niet gevonden");
      return;
    }
    fs.readFile(resolved.file, (err, data) => {
      if (err) {
        send(res, 404, "niet gevonden");
        return;
      }
      const type = types[path.extname(resolved.file)] || "application/octet-stream";
      send(res, 200, data, type);
    });
  });
  return server;
}

module.exports = { resolvePreviewPath, startServer };

if (require.main === module) {
  const runId = process.argv[2];
  if (!runId) fail("gebruik: node scripts/atelier-serve.js <run-id>");

  const build = spawnSync(process.execPath, [path.join(__dirname, "atelier-build.js"), runId], {
    stdio: "inherit",
  });
  if (build.status !== 0) process.exit(build.status || 1);

  const previewRoot = path.join(ROOT, "runs", runId, "atelier", "preview");
  const port = Number(process.env.ATELIER_PORT || 4173);
  const host = process.env.ATELIER_HOST || "127.0.0.1";
  const server = startServer(previewRoot, host, port);
  server.listen(port, host, () => {
    console.log(`atelier-preview: http://${host}:${port}/`);
    console.log("niet publiceren — lokale preview");
  });
}

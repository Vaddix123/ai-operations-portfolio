import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the public portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Branden Opauski/);
  assert.match(html, /Financial judgment/);
  assert.match(html, /Vincent \/ Vinny/);
  assert.match(html, /Vongola Director/);
  assert.match(html, /Vaddix Vault/);
  assert.match(html, /239 passing tests/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
  assert.doesNotMatch(html, /api[_-]?key|password|secret value/i);
});

test("exports a GitHub Pages-safe static portfolio", async () => {
  const html = await readFile(new URL("../site-dist/index.html", import.meta.url), "utf8");
  assert.match(html, /Financial judgment/);
  assert.match(html, /\.\/_next\/static\/css\//);
  assert.match(html, /src="\.\/vincent-command-core\.png"/);
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "site-dist");
const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://portfolio.invalid/", {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed: ${response.status}`);

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<script\b[^>]*\/>/gi, "")
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('src="/_next/', 'src="./_next/')
  .replaceAll('src="/vincent-command-core.png"', 'src="./vincent-command-core.png"')
  .replaceAll('src="/vongola-director-openclaw.png"', 'src="./vongola-director-openclaw.png"')
  .replaceAll('src="/vaddix-vault.png"', 'src="./vaddix-vault.png"');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist", "client"), output, { recursive: true });
await writeFile(path.join(output, "index.html"), html, "utf8");
await writeFile(path.join(output, ".nojekyll"), "", "utf8");

const exported = await readFile(path.join(output, "index.html"), "utf8");
if (!exported.includes("Financial judgment.")) throw new Error("Portfolio headline missing from static export");
if (exported.includes("<script")) throw new Error("Static export still contains hydration scripts");
console.log(`Static portfolio exported to ${output}`);

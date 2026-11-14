#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packageDir = path.join(root, "packages", "ui");
const dist = path.join(packageDir, "dist");

function fail(message) {
  console.error(`Package check failed: ${message}`);
  process.exit(1);
}

const sourceDir = path.join(packageDir, "src", "components");
const sourceFiles = (await readdir(sourceDir)).filter(
  (file) => file.endsWith(".tsx") && !file.endsWith(".test.tsx"),
);

// Read the public names from the source, so a new component is checked the
// day it is added instead of when someone remembers to list it.
const requiredExports = ["cn"];
const clientComponents = [];
for (const file of sourceFiles) {
  const source = await readFile(path.join(sourceDir, file), "utf8");
  if (source.startsWith('"use client";')) clientComponents.push(file.replace(/\.tsx$/, ""));
  for (const block of source.matchAll(/^export\s*\{([^}]+)\}/gm)) {
    for (const entry of block[1].split(",")) {
      const name = entry.trim().split(/\s+as\s+/).pop()?.trim();
      if (name && !name.startsWith("type ")) requiredExports.push(name);
    }
  }
  for (const match of source.matchAll(/^export\s+(?:async\s+)?(?:function|const)\s+(\w+)/gm)) {
    requiredExports.push(match[1]);
  }
}
if (requiredExports.length < 100 || clientComponents.length < 20) {
  fail(`found ${requiredExports.length} exports and ${clientComponents.length} client modules in the source; the patterns no longer match it`);
}


if (!existsSync(path.join(dist, "index.js"))) fail("dist/index.js is missing. Run build:ui.");
if (!existsSync(path.join(dist, "index.d.ts"))) fail("dist/index.d.ts is missing.");
if (existsSync(path.join(dist, "test-utils"))) fail("test utilities were published in dist.");
if (existsSync(path.join(dist, "components", "button.test.js"))) fail("tests were published in dist.");

const module = await import(pathToFileURL(path.join(dist, "index.js")).href);
for (const name of requiredExports) {
  if (!(name in module)) fail(`missing export: ${name}`);
}

for (const component of clientComponents) {
  const source = await readFile(path.join(dist, "components", `${component}.js`), "utf8");
  if (!source.startsWith('"use client";')) {
    fail(`dist/components/${component}.js does not preserve the use client directive`);
  }
}

const files = await readdir(dist, { recursive: true });
for (const file of files) {
  if (!/\.(js|d\.ts)$/.test(file)) continue;
  const source = await readFile(path.join(dist, file), "utf8");
  if (/(?:from|import)\s*["']\.{1,2}\/[^"']*(?<!\.js)(?<!\.json)["']/.test(source)) {
    fail(`dist/${file} contains a relative import without a file extension`);
  }
}

const pkg = JSON.parse(await readFile(path.join(packageDir, "package.json"), "utf8"));
if (!pkg.exports?.["."]?.import || !pkg.exports?.["."]?.types) {
  fail("package.json exports are incomplete");
}

console.log(`UI package smoke test passed: ${requiredExports.length} public exports, ${clientComponents.length} client modules checked.`);

// FicusWatch — "The Worst App Idea Ever Pitched" (make.fun)
// Reads entry.txt next to this file, validates the bounty gate, and writes
// it byte-identical to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Plain TypeScript for Node 22+, no external imports.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const raw = readFileSync(entryPath);

let text: string;
try {
  text = new TextDecoder("utf-8", { fatal: true }).decode(raw);
} catch {
  console.error("entry.txt is not valid UTF-8");
  process.exit(1);
}

const INVISIBLE = /[\u200B\u200C\u200D\uFEFF]/;
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

const charCount = [...text].length;
if (charCount < 1 || charCount > 240) {
  console.error(`entry must be 1-240 characters, got ${charCount}`);
  process.exit(1);
}
if (text.trim().length === 0) {
  console.error("entry must not be whitespace-only");
  process.exit(1);
}
if (text.includes("\n") || text.includes("\r")) {
  console.error("entry must be exactly one line");
  process.exit(1);
}
if (INVISIBLE.test(text)) {
  console.error("entry contains invisible characters");
  process.exit(1);
}
if (CONTROL.test(text)) {
  console.error("entry contains control characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), raw);
console.log(`wrote ${raw.length} bytes to ${join(outDir, "entry.txt")}`);

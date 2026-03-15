import { readFileSync } from "node:fs";
import { gzipSync, brotliCompressSync } from "node:zlib";

const entries = [
  { label: "main (ESM)", path: "dist/index.js" },
  { label: "next (CJS)", path: "dist/next.cjs" },
  { label: "native (CJS)", path: "dist/native.cjs" },
];

let totalGzip = 0;

for (const { label, path } of entries) {
  const code = readFileSync(path);
  const raw = code.byteLength;
  const gzip = gzipSync(code).byteLength;
  const brotli = brotliCompressSync(code).byteLength;
  totalGzip += gzip;

  console.log(`\n[${label}] ${path}`);
  console.log(`  raw:    ${(raw / 1024).toFixed(2)} KB`);
  console.log(`  gzip:   ${(gzip / 1024).toFixed(2)} KB`);
  console.log(`  brotli: ${(brotli / 1024).toFixed(2)} KB`);
}

console.log(`\ntotal gzip: ${(totalGzip / 1024).toFixed(2)} KB`);

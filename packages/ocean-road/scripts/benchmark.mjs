/**
 * Import cost benchmark for @coldsurf/ocean-road
 *
 * UI 컴포넌트 라이브러리는 계산 로직이 아닌 "모듈 로드 비용"이 핵심 지표입니다.
 *
 * main (ESM)   — ESM은 require cache 제어 불가 → size only
 * next (CJS)   — cold/warm require 시간 측정 가능
 * native (CJS) — React Native 환경 전용, Node에서 직접 require 불가 → size only
 */
import os from "node:os";
import { performance } from "node:perf_hooks";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";

const ITERATIONS = Number(process.env.BENCH_ITERS ?? 50);

const require = createRequire(import.meta.url);

function summarize(times) {
  const sorted = [...times].sort((a, b) => a - b);
  const mean = times.reduce((acc, v) => acc + v, 0) / times.length;
  return {
    meanMs: +mean.toFixed(3),
    p50Ms: +sorted[Math.floor(sorted.length * 0.5)].toFixed(3),
    p95Ms: +sorted[Math.floor(sorted.length * 0.95)].toFixed(3),
    minMs: +sorted[0].toFixed(3),
    maxMs: +sorted[sorted.length - 1].toFixed(3),
  };
}

function bundleSize(path) {
  const code = readFileSync(path);
  return {
    rawKB: +(code.byteLength / 1024).toFixed(2),
    gzipKB: +(gzipSync(code).byteLength / 1024).toFixed(2),
  };
}

function benchCjs(resolvedPath) {
  delete require.cache[resolvedPath];
  const t0 = performance.now();
  require(resolvedPath);
  const cold = +(performance.now() - t0).toFixed(3);

  const times = [];
  for (let i = 0; i < ITERATIONS; i++) {
    const t = performance.now();
    require(resolvedPath);
    times.push(performance.now() - t);
  }

  return { cold, warm: summarize(times) };
}

const environment = {
  node: process.version,
  platform: process.platform,
  arch: process.arch,
  cpus: os.cpus()?.length ?? 0,
  cpuModel: os.cpus()?.[0]?.model ?? "unknown",
  iterations: ITERATIONS,
};

const results = {
  "main (ESM)": {
    note: "ESM — size only",
    size: bundleSize("dist/index.js"),
  },
  "next (CJS)": {
    size: bundleSize("dist/next.cjs"),
    ...benchCjs(require.resolve("../dist/next.cjs")),
  },
  "native (CJS)": {
    note: "React Native environment only — size only",
    size: bundleSize("dist/native.cjs"),
  },
};

console.log(JSON.stringify({ environment, results }, null, 2));

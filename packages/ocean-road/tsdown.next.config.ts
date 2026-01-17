import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['next/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'nextjs',
    dts: true,
  },
]);

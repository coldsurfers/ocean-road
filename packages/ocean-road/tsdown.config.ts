import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/next/next.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist',
    dts: true,
    outputOptions: {
      preserveModules: true,
    },
  },
]);

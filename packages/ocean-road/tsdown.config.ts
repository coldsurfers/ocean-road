import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
    },
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    external: ['next', 'next/*', 'react', 'react-dom'],
    treeshake: true,
    tsconfig: 'tsconfig.json',
  },
  {
    entry: {
      next: 'src/next/index.ts',
    },
    format: ['esm', 'cjs'],
    outDir: 'dist',
    dts: true,
    external: ['next', 'next/*', 'react', 'react-dom'],
    treeshake: true,
    tsconfig: 'tsconfig.json',
  },
]);

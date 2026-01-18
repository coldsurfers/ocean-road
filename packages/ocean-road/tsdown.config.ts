import { type UserConfig, defineConfig } from 'tsdown';

const commonConfigs: UserConfig = {
  outDir: 'dist',
  dts: true,
  external: ['next', 'next/*', 'react', 'react-dom'],
  treeshake: true,
  tsconfig: 'tsconfig.json',
};

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
    },
    format: ['esm'],
    ...commonConfigs,
  },
  {
    entry: {
      next: 'src/next/index.ts',
    },
    format: ['esm', 'cjs'],
    ...commonConfigs,
  },
  {
    entry: {
      native: 'src/native/index.ts',
    },
    format: ['esm', 'cjs'],
    ...commonConfigs,
  },
]);

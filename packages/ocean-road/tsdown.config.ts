import { type UserConfig, defineConfig } from 'tsdown';
import pkg from './package.json';

const { peerDependencies } = pkg;

const peerDepsArray = Object.keys(peerDependencies);

const commonConfigs: UserConfig = {
  minify: true,
  outDir: 'dist',
  dts: true,
  external: [...peerDepsArray, 'next', 'next/link', 'next/navigation', 'react-native'],
  noExternal: [/.*/], // 모든 패키지 번들에 포함
  sourcemap: true,
  treeshake: true,
  tsconfig: 'tsconfig.json',
  loader: {
    '.webp': 'dataurl',
  },
  copy: [{ from: 'src/css', to: 'dist/css' }],
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

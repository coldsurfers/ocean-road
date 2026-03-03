import { type UserConfig, defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

const { peerDependencies } = pkg;

const peerDepsArray = Object.keys(peerDependencies);

const commonConfigs: UserConfig = {
  minify: true,
  outDir: 'dist',
  target: 'esnext',
  platform: 'browser',
  dts: true,
  external: [
    ...peerDepsArray,
    'next',
    'next/link',
    'next/navigation',
    'react-native',
    'react/jsx-runtime',
    'react/jsx-dev-runtime',
  ],
  noExternal: [/.*/], // 모든 패키지 번들에 포함
  sourcemap: true,
  treeshake: true,
  tsconfig: 'tsconfig.json',
  inputOptions: (options) => ({
    ...options,
    resolve: {
      ...options.resolve,
      // CJS 대신 ESM 빌드를 선택하여 require('react') 호출 방지
      mainFields: ['module', 'browser', 'main'],
      conditionNames: ['browser', 'module', 'import', 'default'],
    },
  }),
  loader: {
    '.webp': 'dataurl',
  },
};

const nativeConfigs: UserConfig = {
  minify: true,
  outDir: 'dist',
  // metro uses cjs.
  target: 'CommonJS',
  sourcemap: true,
  // it consumed by metro. So metro doesn't support treeshaking.
  treeshake: false,
  dts: true,
  external: [...peerDepsArray, 'react', 'react-dom', 'react-native'],
  tsconfig: 'tsconfig.json',
  loader: {
    '.webp': 'dataurl',
  },
};

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
    },
    format: ['esm'],
    ...commonConfigs,
    copy: [{ from: 'src/css', to: 'dist/css' }],
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
    ...nativeConfigs,
  },
]);

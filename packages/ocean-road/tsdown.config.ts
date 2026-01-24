import { type UserConfig, defineConfig } from 'tsdown';

const commonConfigs: UserConfig = {
  outDir: 'dist',
  dts: true,
  external: [
    'next',
    'next/link',
    'next/navigation',
    'next/font/google',
    'react',
    'react-dom',
    'lucide-react',
    'framer-motion',
    '@emotion/css',
    '@emotion/native',
    '@emotion/react',
    '@emotion/styled',
    'react-native',
    'react-native-reanimated',
    'react-native-worklets',
    'react-native-svg',
    'lucide-react-native',
    '@coldsurfers/ocean-road-design-tokens',
  ],
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

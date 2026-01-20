/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';

// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { dirname, resolve } from 'path';

// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    '@storybook/addon-react-native-web',
  ],
  // framework: getAbsolutePath('@storybook/nextjs-vite'),
  framework: '@storybook/react-native-web-vite',
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (config, options) =>
    process.env.NODE_ENV === 'development'
      ? mergeConfig(config, {
          resolve: {
            alias: {
              // 핵심: 패키지를 src로 직접 매핑
              '@coldsurfers/ocean-road': resolve(
                __dirname,
                '../../../packages/ocean-road/src/index.ts'
              ),
            },
          },
        })
      : config,
};
export default config;

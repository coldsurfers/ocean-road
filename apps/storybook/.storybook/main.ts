/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StorybookConfig } from '@storybook/nextjs-vite';

// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { dirname } from 'path';

// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { fileURLToPath } from 'url';

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
};
export default config;

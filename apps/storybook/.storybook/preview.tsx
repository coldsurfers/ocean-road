import { ColorSchemeProvider, GlobalStyle } from '@coldsurfers/ocean-road';
import type { Preview } from '@storybook/nextjs-vite';
import '@/styles/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export const decorators = [
  (Story) => (
    <ColorSchemeProvider colorScheme="userPreference">
      <Story />
      <GlobalStyle />
    </ColorSchemeProvider>
  ),
];

export default preview;

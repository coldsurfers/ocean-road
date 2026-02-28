import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  title: 'Ocean Road',
  description: 'COLDSURF 디자인 시스템 컴포넌트 라이브러리',
  outDir: 'build',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/coldsurfers/ocean-road',
      },
    ],
    nav: [
      { text: '가이드', link: '/installation' },
      { text: '컴포넌트', link: '/components/button' },
    ],
    sidebar: {
      '/': [
        {
          text: '시작하기',
          items: [
            { text: '설치', link: '/installation' },
            { text: '테마', link: '/theming' },
          ],
        },
        {
          text: '컴포넌트 (Web)',
          items: [
            { text: 'Badge', link: '/components/badge' },
            { text: 'Button', link: '/components/button' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'IconButton', link: '/components/icon-button' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Spinner', link: '/components/spinner' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Text', link: '/components/text' },
            { text: 'TextArea', link: '/components/text-area' },
            { text: 'TextInput', link: '/components/text-input' },
            { text: 'Toast', link: '/components/toast' },
          ],
        },
      ],
    },
  },
});

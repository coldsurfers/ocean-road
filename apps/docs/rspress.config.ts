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
    ],
    sidebar: {
      '/': [
        {
          text: '시작하기',
          items: [
            { text: '설치', link: '/installation' },
          ],
        },
      ],
    },
  },
});

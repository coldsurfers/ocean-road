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
  },
});

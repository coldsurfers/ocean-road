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
            { text: '반응형', link: '/responsive' },
            { text: '디자인 토큰', link: '/design-tokens' },
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
        {
          text: '컴포넌트 (Next.js)',
          items: [
            { text: 'AppHeader', link: '/next/app-header' },
            { text: 'AppFooter', link: '/next/app-footer' },
            { text: 'GlobalLink', link: '/next/global-link' },
            { text: 'NewTabLink', link: '/next/new-tab-link' },
            { text: 'RouteLoading', link: '/next/route-loading' },
            { text: 'GridCardList', link: '/next/grid-card-list' },
          ],
        },
        {
          text: 'Extensions (Web)',
          items: [
            { text: 'Accordion', link: '/components/accordion' },
            { text: 'AppLogo', link: '/components/app-logo' },
            { text: 'AppStoreButton', link: '/components/app-store-button' },
            { text: 'BrandIcon', link: '/components/brand-icon' },
            { text: 'ColorSchemeToggle', link: '/components/color-scheme-toggle' },
            { text: 'Dropdown', link: '/components/dropdown' },
            { text: 'ErrorUI', link: '/components/error-ui' },
            { text: 'FullScreenModal', link: '/components/full-screen-modal' },
            { text: 'GridCardList', link: '/components/grid-card-list' },
            { text: 'MenuItem', link: '/components/menu-item' },
            { text: 'SNSIcon', link: '/components/sns-icon' },
          ],
        },
      ],
    },
  },
});

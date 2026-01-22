import { css } from '@emotion/react';
import media from './media';

type Edge = 'left' | 'right';

export const commonHorizontalLayoutCss = (edges: readonly Edge[]) => {
  return media['xx-large'](css`
          ${edges.includes('left') && 'padding-left: 0.75rem;'}
          ${edges.includes('right') && 'padding-right: 0.75rem;'}
      `);
};

export const commonWebkitScrollHideCss = () => {
  return css`
    scroll-behavior: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -webkit-scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;
};

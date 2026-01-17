'use client';

import { type MouseEventHandler, memo } from 'react';
import {
  GridCardItem as GridCardItemUI,
  type GridCardListItemProps,
} from '../../src/extensions/grid-card-item';
import { GlobalLink } from '../global-link';

export interface GridCardItemNextProps extends GridCardListItemProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const GridCardItem = memo(
  ({ href, onClick, ...gridCardListItemProps }: GridCardItemNextProps) => {
    return (
      <GlobalLink href={href} onClick={onClick}>
        <GridCardItemUI {...gridCardListItemProps} />
      </GlobalLink>
    );
  }
);

GridCardItem.displayName = 'GridCardList.Item';

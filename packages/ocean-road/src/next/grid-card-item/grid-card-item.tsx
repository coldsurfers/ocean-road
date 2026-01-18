'use client';

import {
  GridCardItem as GridCardItemUI,
  type GridCardListItemProps,
} from '@/extensions/grid-card-item';
import { memo } from 'react';
import { GlobalLink } from '../global-link';

export const GridCardItem = memo(
  ({ href, onClick, ...gridCardListItemProps }: GridCardListItemProps) => {
    if (!href) {
      return <GridCardItemUI onClick={onClick} {...gridCardListItemProps} />;
    }
    return (
      <GlobalLink href={href} onClick={onClick}>
        <GridCardItemUI {...gridCardListItemProps} />
      </GlobalLink>
    );
  }
);

GridCardItem.displayName = 'GridCardList.Item';

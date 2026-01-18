'use client';

import {
  type GridCardListItemProps,
  MasonryGridCardItem as MasonryGridCardItemUI,
} from '@/extensions/grid-card-item';
import { memo } from 'react';
import { GlobalLink } from '../global-link';

export const MasonryGridCardItem = memo(
  ({ href, onClick, ...gridCardListItemProps }: GridCardListItemProps) => {
    if (!href) {
      return <MasonryGridCardItemUI onClick={onClick} {...gridCardListItemProps} />;
    }
    return (
      <GlobalLink href={href} onClick={onClick}>
        <MasonryGridCardItemUI {...gridCardListItemProps} />
      </GlobalLink>
    );
  }
);

MasonryGridCardItem.displayName = 'GridCardList.MasonryItem';

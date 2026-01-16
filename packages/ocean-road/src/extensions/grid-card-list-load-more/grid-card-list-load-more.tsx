import { Spinner } from '@/base';
import { useEffect, useRef } from 'react';
import { StyledLoadMoreContainer } from './grid-card-list-load-more.styled';

type Props = {
  onLoadMore: () => void;
};

export const GridCardListLoadMore = ({ onLoadMore }: Props) => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            onLoadMore();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const refToObserve = loadMoreRef.current;
    if (refToObserve) {
      intersectionObserver.observe(refToObserve);
    }

    return () => {
      if (refToObserve) {
        intersectionObserver.unobserve(refToObserve);
      }
    };
  }, [onLoadMore]);

  return (
    <StyledLoadMoreContainer ref={loadMoreRef}>
      <Spinner />
    </StyledLoadMoreContainer>
  );
};

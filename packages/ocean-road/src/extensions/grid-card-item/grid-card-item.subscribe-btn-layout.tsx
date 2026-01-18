import { withStopPropagation } from '@/utils/with-stop-propagation';
import { type PropsWithChildren, memo } from 'react';
import { StyledFixedSubscribeEventButtonLayoutContainer } from './grid-card-item.styled';

export const FixedSubscribeEventButtonLayout = memo(
  ({
    children,
    customRight = 12,
    customBottom = 12,
  }: PropsWithChildren<{
    customRight?: number;
    customBottom?: number;
  }>) => {
    return (
      <StyledFixedSubscribeEventButtonLayoutContainer
        onClick={withStopPropagation()}
        whileHover={{
          scale: 1.1,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          bottom: customBottom,
          right: customRight,
        }}
      >
        {children}
      </StyledFixedSubscribeEventButtonLayoutContainer>
    );
  }
);

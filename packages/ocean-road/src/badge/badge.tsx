import styled from '@emotion/styled';
import type { icons as Icons } from 'lucide-react';
import { type PropsWithChildren, forwardRef } from 'react';
import { createStyledIcon } from '../button/button.styled';
import { Text } from '../text';
import { semantics } from '../tokens';

const StyledFeedNavigationItem = styled.div<{ $isHighlighted?: boolean }>`
    display: flex;
    border-radius: 999px;
    background-color: ${({ $isHighlighted }) => ($isHighlighted ? semantics.color.background[4] : semantics.color.background[3])};
    padding: 0.5rem 1rem;
    cursor: pointer;
    user-select: none;
`;

const StyledFeedNavigationItemText = styled(Text)`
    font-size: 1rem;
    font-weight: 600;
    color: ${semantics.color.foreground[1]};
`;

type Props = PropsWithChildren<{
  leftIcon?: keyof typeof Icons;
  onClick?: () => void;
  isHighlighted?: boolean;
}>;

export const Badge = forwardRef<HTMLDivElement, Props>(
  ({ children, leftIcon, isHighlighted, onClick, ...otherProps }, ref) => {
    return (
      <StyledFeedNavigationItem
        ref={ref}
        $isHighlighted={isHighlighted}
        onClick={onClick}
        {...otherProps}
      >
        {leftIcon && createStyledIcon(leftIcon, 'lg', 'left', 'transparent')}
        {typeof children === 'string' ? (
          <StyledFeedNavigationItemText>{children}</StyledFeedNavigationItemText>
        ) : (
          children
        )}
      </StyledFeedNavigationItem>
    );
  }
);

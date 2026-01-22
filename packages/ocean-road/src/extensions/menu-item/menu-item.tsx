import { Text } from '@/base';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type MotionProps, motion } from 'framer-motion';
import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react';

const StyledMenuText = styled(Text)`
  color: ${semantics.color.foreground[3]};
`;

const StyledMenuItem = styled.div<{ $isHighlighted?: boolean }>`
  padding: 11px 16px;
  border-radius: 8px;

  color: ${semantics.color.foreground[3]};

  flex-shrink: 0;

  cursor: pointer;

  align-self: flex-start;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${semantics.color.background[4]};
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }

  ${(props) =>
    props.$isHighlighted &&
    css`
      background-color: ${semantics.color.background[3]};
    `}
`;

const AppHeaderMenuTextSkeleton = styled.div`
  width: 80px;
  height: 36px;
  border-radius: 4px;
  background-color: ${semantics.color.background[4]};

  margin-right: 0.75rem;

  ${media.medium(css`
    width: 120px;
    height: 24px;
  `)}
`;

const MenuItemComponent = forwardRef<HTMLDivElement, { $isHighlighted?: boolean }>((props, ref) => {
  return <StyledMenuItem ref={ref} {...props} />;
});

const MenuItemMotion = motion.create(MenuItemComponent);

type Props = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    isLoading?: boolean;
    isCurrent?: boolean;
    icon?: React.ReactNode;
  };

export const MenuItem = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, isLoading, isCurrent = false, icon, ...otherProps }, ref) => {
    if (isLoading) {
      return <AppHeaderMenuTextSkeleton />;
    }
    return (
      <MenuItemMotion ref={ref} $isHighlighted={isCurrent} {...otherProps}>
        {icon}
        {typeof children === 'string' ? (
          <StyledMenuText as="span">{children}</StyledMenuText>
        ) : (
          children
        )}
      </MenuItemMotion>
    );
  }
);

MenuItem.displayName = 'MenuItem';

'use client';

import { FullScreenModal } from '@/extensions';
import { useIsMobileMenuOpen } from '@/extensions/app-header/app-header.hooks';
import { usePreventScrollEffect } from '@/utils/use-prevent-scroll-effect';
import { AnimatePresence, type Variants } from 'framer-motion';
import { type ReactNode, memo, useCallback } from 'react';
import {
  StyledFloatingHeaderCloseDrawerButton,
  StyledFloatingHeaderCloseDrawerIcon,
  StyledFullScreenMobileMenuBackground,
} from './app-header.styled';

type CommonProps = {
  onClickClose?: (params: { isOpen: boolean }) => void;
  renderMenuList: (params: { isOpen: boolean; close: () => void }) => ReactNode;
  ColorSchemeToggleComponent: ReactNode;
};

type FullScreenMobileMenuProps =
  | ({
      standalone: true;
      isOpen: boolean;
      zIndex?: number;
    } & CommonProps)
  | ({
      standalone: false;
    } & CommonProps);

// @TODO: too many anti patterns. need to refactor
const MobileMenuContent = (props: FullScreenMobileMenuProps) => {
  // Animation variants
  const menuVariants: Variants = {
    hidden: {
      x: '100%', // Start off-screen to the right
    },
    visible: {
      x: 0, // Slide into view
      transition: {
        type: 'tween',
        duration: 0.25,
        stiffness: 60,
        damping: 12,
      },
    },
    exit: {
      x: '100%', // Slide out to the right
      transition: {
        type: 'tween',
        duration: 0.25,
        stiffness: 60,
        damping: 12,
      },
    },
  };

  const mobileMenuStore = useIsMobileMenuOpen();

  const isOpen = props.standalone ? props.isOpen : mobileMenuStore.isMobileMenuOpen;

  const handleClickClose = useCallback(() => {
    props.onClickClose?.({
      isOpen,
    });
    if (!props.standalone) {
      if (isOpen) {
        mobileMenuStore.closeMobileMenu();
      } else {
        mobileMenuStore.openMobileMenu();
      }
    }
  }, [isOpen, mobileMenuStore, props]);

  usePreventScrollEffect({
    shouldPrevent: isOpen,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledFullScreenMobileMenuBackground
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          $standalone={props.standalone}
        >
          {props.standalone && (
            <StyledFloatingHeaderCloseDrawerButton $isOpen={isOpen} onClick={handleClickClose}>
              <StyledFloatingHeaderCloseDrawerIcon />
            </StyledFloatingHeaderCloseDrawerButton>
          )}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {props.renderMenuList({ isOpen, close: handleClickClose })}
          </ul>
          {props.ColorSchemeToggleComponent}
        </StyledFullScreenMobileMenuBackground>
      )}
    </AnimatePresence>
  );
};

export const FullScreenMobileMenu = memo((props: FullScreenMobileMenuProps) => {
  if (props.standalone) {
    return (
      <FullScreenModal
        visible={props.isOpen}
        onClose={() =>
          props.onClickClose?.({
            isOpen: props.isOpen,
          })
        }
        zIndex={props.zIndex}
      >
        <MobileMenuContent {...props} />
      </FullScreenModal>
    );
  }

  return <MobileMenuContent {...props} />;
});

FullScreenMobileMenu.displayName = 'AppHeader.FullScreenMobileMenu';

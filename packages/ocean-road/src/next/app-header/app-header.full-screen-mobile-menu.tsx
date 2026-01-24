'use client';

import { Accordion, type AccordionProps, FullScreenModal } from '@/extensions';
import { useIsMobileMenuOpen } from '@/extensions/app-header/app-header.hooks';
import { usePreventScrollEffect } from '@/utils/use-prevent-scroll-effect';
import { AnimatePresence, type Variants } from 'framer-motion';
import { type ReactNode, useCallback } from 'react';
import {
  StyledFloatingHeaderCloseDrawerButton,
  StyledFloatingHeaderCloseDrawerIcon,
  StyledFullScreenMobileMenuBackground,
} from './app-header.styled';

type CommonProps<ItemT> = {
  onClickClose?: (params: { isOpen: boolean }) => void;
  ColorSchemeToggleComponent: ReactNode;
} & AccordionProps<ItemT>;

type FullScreenMobileMenuProps<ItemT> =
  | ({
      standalone: true;
      isOpen: boolean;
      zIndex?: number;
    } & CommonProps<ItemT>)
  | ({
      standalone: false;
    } & CommonProps<ItemT>);

// @TODO: too many anti patterns. need to refactor
const MobileMenuContent = <ItemT extends { accordionKey: string }>(
  props: FullScreenMobileMenuProps<ItemT>
) => {
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
            <Accordion
              data={props.data}
              renderTrigger={props.renderTrigger}
              renderExpanded={props.renderExpanded}
              customized={props.customized}
            />
          </ul>
          {props.ColorSchemeToggleComponent}
        </StyledFullScreenMobileMenuBackground>
      )}
    </AnimatePresence>
  );
};

// @TODO: refactor this component's name as FullScreenMobileMenuAccordionDrawer
export const FullScreenMobileMenu = <ItemT extends { accordionKey: string }>(
  props: FullScreenMobileMenuProps<ItemT>
) => {
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
};

FullScreenMobileMenu.displayName = 'AppHeader.FullScreenMobileMenu';

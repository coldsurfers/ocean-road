import { Spinner } from '@/base';
import { usePreventScrollEffect } from '@/utils/use-prevent-scroll-effect';
import { AnimatePresence, type MotionStyle, motion } from 'framer-motion';
import {
  type CSSProperties,
  type PropsWithChildren,
  type RefObject,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  DropdownMotionDiv,
  StyledDropdownList,
  StyledDropdownSpinnerItem,
} from './dropdown.styled';
import type { DropdownMenuItemRef } from './dropdown.types';

const POSITION_PADDING = 8;

export type DropdownCoreProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  position?: {
    top: number;
    left: number;
  };
  className?: string;
  style?: CSSProperties;
  isLoading?: boolean;
  backdrop?: boolean;
  preventScroll?: boolean;
  animate?: boolean;
  triggerRef?: RefObject<HTMLElement>;
  zIndex?: number;
}>;

const DropdownComponent = forwardRef<DropdownMenuItemRef, DropdownCoreProps>(
  (
    {
      children,
      isOpen,
      onClose,
      position,
      className,
      style,
      isLoading,
      backdrop = true,
      preventScroll = true,
      animate = true,
      triggerRef,
      zIndex,
    },
    ref
  ) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    };

    const [maxHeight, setMaxHeight] = useState(0);
    const [innerPosition, setInnerPosition] = useState(position);

    const calculatePosition = useCallback(() => {
      if (!triggerRef?.current) return null;

      const rect = triggerRef.current.getBoundingClientRect();

      const left = rect.left + window.scrollX;
      const selfWidth = dropdownRef.current?.getBoundingClientRect().width ?? 0;

      return {
        top: rect.bottom + window.scrollY + POSITION_PADDING,
        left:
          left < 0
            ? 0
            : left > window.innerWidth - selfWidth
              ? window.innerWidth - selfWidth - 10
              : left,
      };
    }, [triggerRef]);

    const calculateMaxHeight = useCallback(() => {
      const vh = window.visualViewport?.height ?? window.innerHeight;
      const domTop = dropdownRef.current?.getBoundingClientRect().top ?? 0;

      const positionTop = domTop + POSITION_PADDING * 2;
      const nextMax = vh - positionTop;

      return nextMax;
    }, []);

    useEffect(() => {
      if (!triggerRef?.current) return;

      if (!isOpen) {
        setMaxHeight(0);
        return;
      }

      const updatePosition = () => {
        const nextPosition = calculatePosition();
        if (nextPosition) {
          setInnerPosition(nextPosition);
        }
        const nextMax = calculateMaxHeight();
        setMaxHeight(nextMax);
      };

      updatePosition(); // 최초 1회

      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, { passive: true });

      return () => {
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition);
      };
    }, [calculateMaxHeight, calculatePosition, isOpen, triggerRef]);

    usePreventScrollEffect({
      shouldPrevent: preventScroll && isOpen,
    });

    useImperativeHandle(ref, () => ({
      close: () => {
        // @TODO: close
      },
    }));

    const dropdownStyle = useMemo<MotionStyle>(() => {
      const value: MotionStyle = {
        top: triggerRef?.current ? innerPosition?.top : undefined,
        left: triggerRef?.current ? innerPosition?.left : undefined,
        maxHeight: triggerRef?.current ? `${maxHeight}px` : undefined,
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        ...style,
      };
      return value;
    }, [innerPosition?.left, innerPosition?.top, maxHeight, style, triggerRef]);

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            {backdrop && (
              <motion.div
                className="backdrop"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                initial={animate ? { opacity: 0 } : undefined}
                animate={animate ? { opacity: 0.5 } : undefined}
                exit={animate ? { opacity: 0 } : undefined}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: backdrop ? 'black' : 'transparent',
                  zIndex,
                  cursor: 'default',
                }}
              />
            )}

            {/* Dropdown */}
            <DropdownMotionDiv
              ref={dropdownRef}
              className={className}
              initial={animate ? 'hidden' : undefined}
              animate={animate ? 'visible' : undefined}
              exit={animate ? 'exit' : undefined}
              variants={animate ? dropdownVariants : undefined}
              style={dropdownStyle}
              $zIndex={typeof zIndex === 'number' ? zIndex + 1 : undefined}
            >
              {/* Contents */}
              {isLoading ? (
                <StyledDropdownSpinnerItem>
                  <Spinner />
                </StyledDropdownSpinnerItem>
              ) : (
                <StyledDropdownList>{children}</StyledDropdownList>
              )}
            </DropdownMotionDiv>
          </>
        )}
      </AnimatePresence>
    );
  }
);

export const Dropdown = memo(DropdownComponent);

Dropdown.displayName = 'Dropdown.Core';

import type { RefObject } from 'react';

const POSITION_PADDING = 8;

export function calculatePosition({
  dropdownRef,
  triggerRef,
  edge,
}: {
  dropdownRef: RefObject<HTMLElement>;
  triggerRef: RefObject<HTMLElement>;
  edge: 'left' | 'right';
}) {
  if (!triggerRef?.current) return null;

  const rect = triggerRef.current.getBoundingClientRect();

  const left = rect.left + window.scrollX;
  const selfWidth = dropdownRef.current?.getBoundingClientRect().width ?? 0;

  if (edge === 'left') {
    return {
      top: rect.bottom + window.scrollY + POSITION_PADDING,
      left:
        left < 0
          ? 0
          : left > window.innerWidth - selfWidth
            ? window.innerWidth - selfWidth - 10
            : left,
    };
  }

  const documentWidth = document.documentElement.getBoundingClientRect().width;
  const right = documentWidth - rect.right;

  return {
    top: rect.bottom + window.scrollY + POSITION_PADDING,
    right,
  };
}

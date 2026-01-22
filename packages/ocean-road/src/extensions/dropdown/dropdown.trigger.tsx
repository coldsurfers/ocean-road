import {
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Dropdown, type DropdownCoreProps } from './dropdown';
import type { DropdownMenuItemRef } from './dropdown.types';

export const DropdownTrigger = ({
  renderTriggerNode,
  triggerRef,
  children,
  backdrop,
  zIndex,
}: PropsWithChildren<{
  renderTriggerNode: ({ openDropdown }: { openDropdown: () => void }) => ReactNode;
  triggerRef: DropdownCoreProps['triggerRef'];
  backdrop: DropdownCoreProps['backdrop'];
  zIndex: DropdownCoreProps['zIndex'];
}>) => {
  const dropdownRef = useRef<DropdownMenuItemRef>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownPosition, setDropdownPosition] = useState<
    | {
        top: number;
        left: number;
      }
    | undefined
  >(undefined);

  const calculatePosition = useCallback(() => {
    if (!triggerRef?.current) return null;

    const rect = triggerRef.current.getBoundingClientRect();

    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    };
  }, [triggerRef]);

  // Handle dropdown open
  const openDropdown = useCallback(() => {
    if (triggerRef?.current) {
      const nextPosition = calculatePosition();
      if (!nextPosition) return;
      setDropdownPosition(nextPosition);
      setIsDropdownOpen(true);
    }
  }, [calculatePosition, triggerRef]);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
    setDropdownPosition({
      top: 0,
      left: 0,
    });
  }, []);

  useEffect(() => {
    if (backdrop) return;
    if (!isDropdownOpen) return;
    if (!dropdownRef.current) return;
    const handleOutsideClick = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;

      if (!target || !target.isConnected) {
        return;
      }
      closeDropdown();
    };

    window.addEventListener('mousedown', handleOutsideClick, {});

    return () => window.removeEventListener('mousedown', handleOutsideClick, {});
  }, [backdrop, closeDropdown, isDropdownOpen]);

  return (
    <>
      {renderTriggerNode({ openDropdown })}
      <Dropdown
        ref={dropdownRef}
        isOpen={isDropdownOpen}
        onClose={closeDropdown}
        position={dropdownPosition}
        triggerRef={triggerRef}
        backdrop={backdrop}
        zIndex={zIndex}
      >
        {children}
      </Dropdown>
    </>
  );
};

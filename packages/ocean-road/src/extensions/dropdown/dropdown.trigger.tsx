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
  edge,
}: PropsWithChildren<{
  renderTriggerNode: ({ openDropdown }: { openDropdown: () => void }) => ReactNode;
  triggerRef: DropdownCoreProps['triggerRef'];
  backdrop: DropdownCoreProps['backdrop'];
  zIndex: DropdownCoreProps['zIndex'];
  edge: DropdownCoreProps['edge'];
}>) => {
  const dropdownRef = useRef<DropdownMenuItemRef>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Handle dropdown open
  const openDropdown = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
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
        triggerRef={triggerRef}
        backdrop={backdrop}
        zIndex={zIndex}
        edge={edge}
      >
        {children}
      </Dropdown>
    </>
  );
};

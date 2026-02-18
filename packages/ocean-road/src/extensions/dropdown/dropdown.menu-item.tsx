import { overlay } from 'overlay-kit';
import {
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { MenuItem } from '../menu-item';
import { Dropdown } from './dropdown';
import type { DropdownMenuItemRef } from './dropdown.types';

const SPACER_HEIGHT = 8;

type Props<DataItemT> = {
  isCurrent: boolean;
  icon?: ReactNode;
  title: ReactNode;
  dropdownData: Array<DataItemT>;
  renderDropdownItem: (item: DataItemT) => ReactNode;
  backdrop?: boolean;
  absolute?: boolean;
  isLoading?: boolean;
  onClose?: () => void;
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>, params: { openDropdown: () => void }) => void;
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>, params: { closeDropdown: () => void }) => void;
  onClick?: (e: MouseEvent<HTMLDivElement>, params: { openDropdown: () => void }) => void;
};

export const DropdownMenuItem = forwardRef(function DropdownMenuItemComponent<DataItemT>(
  {
    isCurrent,
    icon,
    title,
    dropdownData,
    renderDropdownItem,
    backdrop = false,
    absolute = false,
    isLoading,
    onClose,
    onMouseEnter,
    onMouseLeave,
    onClick,
  }: Props<DataItemT>,
  ref: Ref<DropdownMenuItemRef>
) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const menuItemRef = useRef<HTMLDivElement>(null);

  const canShowDropdown = dropdownData.length > 0 || isLoading;

  const openDropdown = useCallback(() => {
    if (absolute) {
      const rect = menuItemRef.current?.getBoundingClientRect();
      if (!rect) return;
      const renderItem = (item: (typeof dropdownData)[number], index: number) => (
        <div
          key={index.toString()}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          {renderDropdownItem(item)}
        </div>
      );
      overlay.open(
        ({ close, isOpen }) =>
          isOpen && (
            <Dropdown
              edge="left"
              backdrop={backdrop}
              preventScroll={false}
              isOpen={isOpen}
              animate={backdrop}
              onClose={close}
              position={{
                top: rect.bottom + window.scrollY, // Bottom of button
                left: rect.left + window.scrollX, // Left of button
              }}
            >
              {dropdownData.map(renderItem)}
            </Dropdown>
          )
      );
    } else {
      requestAnimationFrame(() => {
        if (canShowDropdown) {
          const rect = menuItemRef.current?.getBoundingClientRect();
          if (!rect) return;
          setIsOpenDropdown(true);
        }
      });
    }
  }, [absolute, dropdownData, renderDropdownItem, backdrop, canShowDropdown]);

  const closeDropdownHoverLeave = useCallback((_: MouseEvent<HTMLDivElement>) => {
    // const container = e.currentTarget;
    // const nextTarget = e.relatedTarget as Node | null;

    // nextTarget 이 Container 내부라면: close 방지
    // if (container.contains(nextTarget)) {
    //   return;
    // }

    setIsOpenDropdown(false);
  }, []);

  const close = useCallback(() => {
    onClose?.();
    setIsOpenDropdown(false);
    overlay.closeAll();
  }, [onClose]);

  useImperativeHandle(
    ref,
    () => ({
      close: () => {
        setIsOpenDropdown(false);
        overlay.closeAll();
      },
    }),
    []
  );

  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      e.stopPropagation();
      onClick?.(e, { openDropdown });
    },
    [onClick, openDropdown]
  );

  const handleMouseEnter = useCallback<MouseEventHandler<HTMLDivElement>>(
    (evt) => {
      onMouseEnter?.(evt, {
        openDropdown,
      });
    },
    [onMouseEnter, openDropdown]
  );

  const handleMouseLeave = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      onMouseLeave?.(e, {
        closeDropdown: () => closeDropdownHoverLeave(e),
      });
    },
    [closeDropdownHoverLeave, onMouseLeave]
  );

  useEffect(() => {
    if (!menuItemRef.current) return;
    const handleOutsideClick = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;

      if (!target || !target.isConnected) {
        return;
      }

      const isOutside = menuItemRef.current && !menuItemRef.current.contains(target);

      if (isOutside) {
        setIsOpenDropdown(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick, {});

    return () => window.removeEventListener('mousedown', handleOutsideClick, {});
  }, []);

  return (
    <>
      <MenuItem
        ref={menuItemRef}
        isCurrent={isCurrent}
        icon={icon}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
        }}
      >
        {title}
        {!absolute && isOpenDropdown && canShowDropdown && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              minWidth: '100%', // 버튼 너비만큼 확보
              width: 'auto', // renderItem이 더 넓으면 확장 허용
              left: 0,
            }}
          >
            {/* Spacer */}
            <div
              style={{
                height: `${SPACER_HEIGHT}px`,
                background: 'transparent',
                cursor: 'default',
              }}
            />
            <Dropdown
              // currently leave edge value to left
              edge="left"
              backdrop={backdrop}
              preventScroll={false}
              isOpen
              animate={backdrop}
              isLoading={isLoading}
              onClose={close}
            >
              {dropdownData.map((item, index) => (
                <div
                  key={index.toString()}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  {renderDropdownItem(item)}
                </div>
              ))}
            </Dropdown>
          </div>
        )}
      </MenuItem>
    </>
  );
}) as <DataItemT>(props: Props<DataItemT> & { ref?: Ref<DropdownMenuItemRef> }) => JSX.Element;

// @ts-expect-error
DropdownMenuItem.displayName = 'Dropdown.MenuItem';

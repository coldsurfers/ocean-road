'use client';

import { Accordion, type AccordionProps } from '@/extensions';
import { semantics } from '@/tokens';
import { usePreventScrollEffect } from '@/utils/use-prevent-scroll-effect';
import styled from '@emotion/styled';
import { AlignRight } from 'lucide-react';
import type { PropsWithChildren, ReactNode } from 'react';

export const MobileMenuIcon = styled(AlignRight)`
  color: ${semantics.color.foreground[3]};
`;

export const ModalContainer = styled.div<{ $isOpen: boolean; $zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5px);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: ${(props) => props.$zIndex ?? 100};
`;

export const ModalContent = styled.div`
  margin: 10px 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalPaper = styled.div`
  background: ${semantics.color.background[2]};
  border-radius: 8px;
  margin: 12px auto;
  width: calc(100vw - 24px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

type ModalMobileDrawerProps<ItemT> = PropsWithChildren<
  {
    isOpen: boolean;
    onClose: () => void;
    bottomAccessory?: ReactNode;
  } & AccordionProps<ItemT>
>;

export const ModalMobileDrawer = <ItemT extends { accordionKey: string }>({
  children,
  isOpen,
  onClose,
  bottomAccessory,
  ...accordionProps
}: ModalMobileDrawerProps<ItemT>) => {
  usePreventScrollEffect({
    shouldPrevent: isOpen,
  });

  return (
    <ModalContainer onClick={onClose} $isOpen={isOpen} style={{ overflowY: 'auto' }}>
      {isOpen && (
        <ModalPaper onClick={(e) => e.stopPropagation()}>
          <ModalContent>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '10px 20px' }}>
              <Accordion {...accordionProps} />
              {children}
            </ul>
            {bottomAccessory}
          </ModalContent>
        </ModalPaper>
      )}
    </ModalContainer>
  );
};

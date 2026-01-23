import { Modal } from '@/base';
import { semantics } from '@/tokens';
import { usePreventScrollEffect } from '@/utils/use-prevent-scroll-effect';
import styled from '@emotion/styled';
import { XIcon } from 'lucide-react';
import { type PropsWithChildren, memo } from 'react';

const StyledFullScreenModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${semantics.color.background[2]};
  padding: 1rem;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

const CloseIcon = styled(XIcon)`
  color: ${semantics.color.foreground[1]};
  margin-left: auto;
  flex-shrink: 0;

  cursor: pointer;
`;

type Props = PropsWithChildren<{
  visible: boolean;
  onClose: () => void;
  zIndex?: number;
}>;

export const FullScreenModal = memo(({ visible, onClose, children, zIndex }: Props) => {
  usePreventScrollEffect({
    shouldPrevent: visible,
  });

  return (
    <Modal visible={visible} onClose={onClose} zIndex={zIndex}>
      <StyledFullScreenModalContent>
        <CloseIcon onClick={onClose} />
        {children}
      </StyledFullScreenModalContent>
    </Modal>
  );
});

FullScreenModal.displayName = 'FullScreenModal';

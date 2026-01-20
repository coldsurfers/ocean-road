import { Button } from '@/base';
import { memo } from 'react';
import { StyledErrorContainer, StyledErrorText } from './network-error.styled';

export const NetworkError = memo(({ onClickRetry }: { onClickRetry: () => void }) => {
  return (
    <StyledErrorContainer>
      <StyledErrorText as="h1">네트워크 에러가 발생했어요 🗯</StyledErrorText>
      <Button onClick={onClickRetry}>다시 시도하기</Button>
    </StyledErrorContainer>
  );
});

NetworkError.displayName = 'ErrorUI.NetworkError';

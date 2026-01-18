import { Text } from '@/base';
import { WEB_APP_HEADER_HEIGHT } from '@/constants';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';

const StyledEmptyContainer = styled.div`
    width: 100%;
    height: calc(80vh - ${WEB_APP_HEADER_HEIGHT});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.medium(css`
        height: calc(60vh - ${WEB_APP_HEADER_HEIGHT});
    `)}
`;

const StyledEmptyText = styled(Text)`
    font-size: 2.125rem;
    font-weight: 500;
    color: ${semantics.color.foreground[1]};
    text-align: center;
    ${media.medium(css`
      font-size: 24px;
    `)}
`;

export const GridCardListEmpty = memo(({ text }: { text: string }) => {
  return (
    <StyledEmptyContainer>
      <StyledEmptyText as="p">{text}</StyledEmptyText>
    </StyledEmptyContainer>
  );
});

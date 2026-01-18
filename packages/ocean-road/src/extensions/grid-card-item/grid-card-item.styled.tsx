import { Text } from '@/base';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGridTop = styled.div`
  position: relative;
`;

export const StyledGridImageEmptyContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50%;
  border-radius: 12px;
  background-color: ${semantics.color.background[1]};

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const StyledGridImageEmptyText = styled(Text)`
  text-align: center;
  font-weight: 600;
  font-size: 16px;

  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledGridTextContainer = styled.div`
  margin-top: 0.5rem;
`;

export const StyledGridTitle = styled(Text)`
  margin: unset;
  font-size: 16px;
  color: ${semantics.color.foreground[1]};
  font-weight: 600;

  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;

  ${media.medium(css`
    font-size: 14px;
  `)}
`;

export const StyledGridDate = styled(Text)`
  margin: unset;
  margin-top: 0.25rem;
  font-size: 14px;
  color: ${semantics.color.foreground[3]};

  ${media.medium(css`
    font-size: 12px;
  `)}
`;

export const StyledVenueText = styled(Text)`
  margin: unset;
  margin-top: 0.25rem;
  font-size: 14px;
  color: ${semantics.color.foreground[3]};

  ${media.medium(css`
    font-size: 12px;
  `)}
`;

export const StyledFixedSubscribeEventButtonLayoutContainer = styled(motion.div)`
    position: absolute;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${semantics.color.background[4]};
    border-radius: 50%;

    box-shadow: 0 1px 3px ${semantics.color.border[1]}, 0 1px 2px ${semantics.color.border[2]};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

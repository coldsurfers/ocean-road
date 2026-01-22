import { semantics } from '@/tokens';
import { commonWebkitScrollHideCss } from '@/utils/common-styles';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const DropdownMotionDiv = styled(motion.div)<{ $zIndex?: number }>`
  background-color: transparent;

  position: absolute;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: ${(props) => props.$zIndex};
  border-radius: 8px;

  ${commonWebkitScrollHideCss()}
`;

export const StyledDropdownSpinnerItem = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  background-color: ${semantics.color.background[4]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  ${commonWebkitScrollHideCss()}
`;
export const StyledDropdownListItem = styled.li`
  background-color: transparent;

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

import { semantics } from '@/tokens';
import styled from '@emotion/styled';

export const DropdownResultItem = styled.div<{ $isActive?: boolean }>`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  color: ${semantics.color.foreground[1]};

  background-color: ${({ $isActive }) => ($isActive ? semantics.color.background[5] : semantics.color.background[3])};
  white-space: nowrap;
  display: block;

  &:hover {
    background-color: ${semantics.color.background[4]};
  }
`;

DropdownResultItem.displayName = 'Dropdown.ResultItem';

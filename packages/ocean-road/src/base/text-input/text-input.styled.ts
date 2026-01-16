import styled from '@emotion/styled';
import { colors, semantics } from '../../tokens';

export const StyledTextInputContainer = styled.div<{ $isError: boolean }>`
  padding: 1rem;
  background-color: ${semantics.color.background[2]};
  border: 2px solid ${({ $isError }) => ($isError ? colors.oc.red[7].value : semantics.color.border[2])};
  border-radius: 2rem;
  color: ${semantics.color.foreground[1]};

  display: flex;
  align-items: center;

  &:focus, &:active {
    border: 2px solid ${({ $isError }) => ($isError ? colors.oc.red[7].value : colors.oc.blue[6].value)};
    outline: none;
    box-shadow: none;
  }

  &:has(input:focus), &:has(input:active) {
    border: 2px solid ${({ $isError }) => ($isError ? colors.oc.red[7].value : colors.oc.blue[6].value)};
    outline: none;
    box-shadow: none;
  }
`;

export const StyledTextInputInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  flex: 1;
  font-family: 'Pretendard';
  padding-top: 0;
  padding-bottom: 0;
  font-size: inherit;
  line-height: 1.25;

  color: ${semantics.color.foreground[1]};
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../tokens';

const width = 40;
const height = width * 0.55;
const thumbSize = width * 0.45;

export const StyledSwitchContainer = styled.button<{ $checked: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.15s ease, opacity 0.15s ease;
  ${({ $checked }) =>
    $checked
      ? css`
    background-color: ${colors.oc.green[5].value};
  `
      : css`
    background-color: ${colors.oc.gray[2].value};
  `}

  width: ${width}px;
  min-width: ${width}px;
  height: ${height}px;
`;

export const StyledSwitchThumb = styled.span<{ $checked: boolean }>`
  position: absolute;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 999px;
  background-color: ${colors.oc.white.value};
  transition: transform 0.15s ease;

  width: ${thumbSize}px;
  height: ${thumbSize}px;

  ${({ $checked }) =>
    $checked &&
    css`
      transform: translate(${thumbSize}px, -50%);
  `}
`;

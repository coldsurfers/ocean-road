import styled from '@emotion/native';
import { colors } from '../../tokens';
import { Text } from '../text';
import type { ToastType } from './toast.types';

export const StyledToastContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  bottom: 24px;
  left: 0px;
  right: 0px;
`;

export const StyledToastPressable = styled.Pressable<{ type: ToastType }>`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 24px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'info':
        return colors.oc.black.value;
      case 'warning':
        return colors.oc.yellow[9].value;
      case 'error':
        return colors.oc.pink[9].value;
      default:
        return colors.oc.black.value;
    }
  }};
`;

export const StyledToastText = styled(Text)`
  font-weight: 700;
  color: ${colors.oc.white.value};
  font-size: 14px;
`;

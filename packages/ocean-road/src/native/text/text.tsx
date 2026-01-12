import { Text as RNText, StyleSheet } from 'react-native';
import { colors } from '../../tokens';
import type { TextProps } from './text.types';

export const Text = ({ children, weight = 'regular', style, ...others }: TextProps) => {
  const fontFamilySet = {
    thin: styles.thin,
    light: styles.light,
    regular: styles.regular,
    medium: styles.medium,
    bold: styles.bold,
    extraBold: styles.extraBold,
  };
  const flattenedStyle = StyleSheet.flatten(style);
  const lineHeight = (flattenedStyle?.fontSize ?? 0) * 1.205;
  return (
    <RNText
      {...others}
      style={[
        fontFamilySet[weight],
        styles.defaultColor,
        { lineHeight: lineHeight, letterSpacing: 0.24, includeFontPadding: false },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  thin: {
    fontFamily: 'Pretendard-Thin',
  },
  light: {
    fontFamily: 'Pretendard-Light',
  },
  regular: {
    fontFamily: 'Pretendard-Regular',
  },
  medium: {
    fontFamily: 'Pretendard-Medium',
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
  },
  extraBold: {
    fontFamily: 'Pretendard-ExtraBold',
  },
  defaultColor: { color: colors.oc.black.value },
});

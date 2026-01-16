import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelStyle?: CSSProperties;
  isError?: boolean;
  required?: boolean;
  left?: ReactNode;
  right?: ReactNode;
};

export interface TextInputRef {
  focus: () => void;
  blur: () => void;
}

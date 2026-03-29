import {
  type MouseEventHandler,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Label } from '../label';
import { StyledTextInputContainer, StyledTextInputInput } from './text-input.styled';
import type { TextInputProps, TextInputRef } from './text-input.types';

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    { label, labelStyle, isError, required, left, right, className, style, ...inputProps },
    forwardedRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // biome-ignore lint/style/noNonNullAssertion: inputRef is always set by the time this runs
    useImperativeHandle(forwardedRef, () => inputRef.current!, []);

    const onClick = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
      e.preventDefault();
      inputRef.current?.focus();
    }, []);

    return (
      <>
        {label && (
          <Label htmlFor={inputProps.id} style={labelStyle} required={required}>
            {label}
          </Label>
        )}
        <StyledTextInputContainer
          className={className}
          $isError={!!isError}
          onClick={onClick}
          style={style}
        >
          {left && left}
          <StyledTextInputInput ref={inputRef} {...inputProps} />
          {right && right}
        </StyledTextInputContainer>
      </>
    );
  }
);

TextInput.displayName = 'TextInput';

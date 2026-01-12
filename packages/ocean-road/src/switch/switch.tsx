import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { StyledSwitchContainer, StyledSwitchThumb } from './switch.styled';

interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, disabled, onChange, ...buttonProps }, forwardedRef) => {
    return (
      <StyledSwitchContainer
        ref={forwardedRef}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        $checked={checked}
        onClick={() => onChange(!checked)}
        {...buttonProps}
      >
        <StyledSwitchThumb $checked={checked} />
      </StyledSwitchContainer>
    );
  }
);

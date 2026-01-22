import { type Ref, type SVGProps, memo } from 'react';
import { match } from 'ts-pattern';
import AndroidLogo from './brand-icon.android';
import AppleLogo from './brand-icon.apple';
import GoogleLogo from './brand-icon.google';

interface Props extends SVGProps<SVGSVGElement> {
  brand: 'apple' | 'google' | 'android';
  ref?: Ref<SVGSVGElement>;
}

export const BrandIcon = memo(({ brand, ...svgProps }: Props) => {
  const Component = match(brand)
    .with('apple', () => <AppleLogo {...svgProps} />)
    .with('google', () => <GoogleLogo {...svgProps} />)
    .with('android', () => <AndroidLogo {...svgProps} />)
    .exhaustive();

  return Component;
});

BrandIcon.displayName = 'BrandIcon';

import { type Ref, memo } from 'react';
import { match } from 'ts-pattern';
import FacebookLogo from './sns-icon.facebook';
import InstaLogo from './sns-icon.instagram';
import XLogo from './sns-icon.x';
import YoutubeLogo from './sns-icon.youtube';

interface Props extends React.SVGProps<SVGSVGElement> {
  social: 'instagram' | 'x' | 'facebook' | 'youtube';
  ref?: Ref<SVGSVGElement>;
}

export const SNSIcon = memo(({ social, ...svgProps }: Props) => {
  const Component = match(social)
    .with('instagram', () => <InstaLogo {...svgProps} />)
    .with('x', () => <XLogo {...svgProps} />)
    .with('facebook', () => <FacebookLogo {...svgProps} />)
    .with('youtube', () => <YoutubeLogo {...svgProps} />)
    .exhaustive();

  return Component;
});

SNSIcon.displayName = 'SNSIcon';

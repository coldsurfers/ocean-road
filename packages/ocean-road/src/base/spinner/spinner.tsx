import { StyledPageLoadingWrapper, StyledSpinner } from './spinner.styled';
import type { SpinnerVariant } from './spinner.types';

const RotateSpinner = ({ className }: { className?: string }) => {
  return (
    <StyledSpinner
      animate={{
        rotate: 360, // Rotates the element 360 degrees
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY, // Loops the animation infinitely
        duration: 0.5, // Each full rotation takes 2 seconds
        ease: 'linear', // Smooth, constant speed
      }}
      className={className}
    />
  );
};

type Props = {
  variant?: SpinnerVariant;
  className?: string;
};

export const Spinner = ({ variant, className }: Props) => {
  switch (variant) {
    case 'page-overlay':
      return (
        <StyledPageLoadingWrapper>
          <RotateSpinner className={className} />
        </StyledPageLoadingWrapper>
      );
    default:
      return <RotateSpinner className={className} />;
  }
};

import { ElementType } from 'react';
import StyledButton from './StyledButton';
import { ButtonProps, scales, variants } from './types';

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { isLoading, disabled, className, children, ...rest } = props;
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push('button--loading');
  }

  if (isDisabled && !isLoading) {
    classNames.push('button--disabled');
  }

  return (
    <StyledButton
      isLoading={isLoading}
      className={classNames.join(' ')}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  variant: variants.PRIMARY,
  scale: scales.SM,
  disable: false,
};

export default Button;

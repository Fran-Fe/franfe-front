import { ElementType } from 'react';
import StyledButton from './StyledButton';
import { ButtonProps, scales, variants } from './types';

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { isloading, disabled, className, children, ...rest } = props;
  const isDisabled = isloading || disabled;
  const classNames = className ? [className] : [];

  if (isloading) {
    classNames.push('button--loading');
  }

  if (isDisabled && !isloading) {
    classNames.push('button--disabled');
  }

  return (
    <StyledButton
      isloading={isloading}
      className={classNames.join(' ')}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  isloading: false,
  variant: variants.PRIMARY,
  scale: scales.SM,
  disable: false,
};

export default Button;

import { Button } from 'components/Common';
import { ArrowButtonProps, ArrowContainer, ArrowIcon } from './ArrowButtonUtils';

const ArrowButton = (props: ArrowButtonProps) => {
  const { onClick, icon } = props;
  return (
    <ArrowContainer>
      <ArrowIcon onClick={onClick}>{icon}</ArrowIcon>
    </ArrowContainer>
  );
};

export default ArrowButton;

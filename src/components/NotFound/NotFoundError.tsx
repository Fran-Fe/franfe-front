import { Button } from 'components/Common';
import { ErrorContainer, ErrorImg, ErrorText } from './NotFoundComponents';

const NotFoundError = () => {
  return (
    <ErrorContainer>
      <ErrorImg src={`${process.env.PUBLIC_URL}/assets/images/404_Error.svg`} alt="asd" />
      <ErrorText>
        Sorry, <br />
      </ErrorText>
      <ErrorText>We could not find that page.</ErrorText>
      <Button variant="secondaryBasic" scale="sm">
        GO TO HOME
      </Button>
    </ErrorContainer>
  );
};

export default NotFoundError;

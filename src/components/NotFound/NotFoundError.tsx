import {
  ErrorContainer,
  ErrorImg,
  ErrorText,
  ErrorButton,
  ErrorButtonText,
} from './NotFoundComponents';

const NotFoundError = () => {
  return (
    <ErrorContainer>
      <ErrorImg src={`${process.env.PUBLIC_URL}/assets/images/404_Error.svg`} alt="asd" />
      <ErrorText>
        Sorry, <br />
      </ErrorText>
      <ErrorText>We could not find that page.</ErrorText>
      <ErrorButton>
        <ErrorButtonText>GO TO HOME</ErrorButtonText>
      </ErrorButton>
    </ErrorContainer>
  );
};

export default NotFoundError;

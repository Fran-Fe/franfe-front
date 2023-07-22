import styled from 'styled-components';

const OnBoardingContainer = styled.aside`
  height: 100vh;
  width: 50%;
  max-width: 420px;
`;

const OnBoardingImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #191919;
`;

const OnBoarding = () => {
  return (
    <OnBoardingContainer>
      <OnBoardingImg />
    </OnBoardingContainer>
  );
};

export default OnBoarding;

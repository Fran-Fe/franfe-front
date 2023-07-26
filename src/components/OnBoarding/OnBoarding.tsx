import styled from 'styled-components';
import { OnBoardingBriefContent, OnBoardingLogo, OnBoardingFeatures } from 'components/OnBoarding';

const OnBoardingContainer = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  max-width: 420px;
  padding: 3rem;
`;

const OnBoarding = () => {
  return (
    <OnBoardingContainer>
      <OnBoardingLogo />
      <OnBoardingBriefContent />
      <OnBoardingFeatures />
    </OnBoardingContainer>
  );
};

export default OnBoarding;

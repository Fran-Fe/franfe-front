import styled from 'styled-components';
import { OnBoardingBriefContent, OnBoardingLogo, OnBoardingFeatures } from 'components/OnBoarding';

const OnBoardingContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content:
  height: 100vh;
  width: 50%;
  max-width: 420px;
  padding: 3rem;
  background-color: ${(props) => props.theme.backgroundPrimary};
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

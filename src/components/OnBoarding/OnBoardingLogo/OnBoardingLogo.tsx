import { OnBoardingLogoContainer, OnBoardingLogoImg } from './OnBoardingLogoUtils';

const OnBoardingLogo = () => {
  return (
    <OnBoardingLogoContainer>
      <OnBoardingLogoImg
        src={`${process.env.PUBLIC_URL}/assets/images/franfe-logo.svg`}
        alt="Logo Img"
      />
    </OnBoardingLogoContainer>
  );
};

export default OnBoardingLogo;

import styled from 'styled-components';

const OnBoardingLogoContainer = styled.div`
  width: 100%;
  height: 30%;
`;

const OnBoardingLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

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

import styled from 'styled-components';

const OnBoardingLogoContainer = styled.div`
  width: 100%;
  height: 30%;
`;

const OnBoardingLogo = () => {
  return (
    <OnBoardingLogoContainer>
      <p style={{ fontSize: '5rem' }}>
        Fran
        <br />
        Fe.
      </p>
    </OnBoardingLogoContainer>
  );
};

export default OnBoardingLogo;

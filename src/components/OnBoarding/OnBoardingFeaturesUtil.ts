import styled from 'styled-components';

export const OnBoardingFeatureContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  padding: 1rem 0;
  font-weight: 100;
`;

export const OnBoardingFeature = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1.25rem;
  text-weight: 100;
  line-height: 1.3;
  letter-spacing: 1px;
`;

export const OnBoardingFeatureImage = styled.img`
  width: 20%;
  padding: 0.8rem;
  border-radius: 1.25rem;
  box-shadow: 4px 4px 4px ${(props) => props.theme.backgroundSecondary};
`;

export const OnBoardingFeatureTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 0 0 0.5rem;
`;

export const OnBoardingFeatureTextTitle = styled.p`
  width: 100%;
  margin: 0 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 400;
`;

export const OnBoardingFeatureTextDetail = styled.p`
  width: 100%;
  margin: 0 0 0 0.5rem;
`;

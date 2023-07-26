import styled from 'styled-components';

const OnBoardingOneLineContainer = styled.div`
  display: flex;
  align-items: end;
  text-align: left;
  width: 100%;
  height: 20%;
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 400;
`;

const EmphasisText = styled.div`
  text-emphasis: filled #ff0000;
  padding: 0;
`;

const OnBoardingBriefContent = () => {
  return (
    <OnBoardingOneLineContainer>
      Find your&nbsp;<EmphasisText>Secret</EmphasisText>&nbsp;cafe
    </OnBoardingOneLineContainer>
  );
};

export default OnBoardingBriefContent;

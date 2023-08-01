import styled from 'styled-components';

export const DetailDrawer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

export const BackButtonContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 3%;
`;

export const DetailTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

export const DetailRateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 5%;
  font-size: 1.5rem;
`;

export const DetailImageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 23%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DetailGPTContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 40%;
  margin-top: 0.5rem;
  font-size: 5rem;
  background-color: #e2e2e2;
`;

export const DetailBackButton = styled.img`
  width: 10%;
  transform: rotate(-90deg);
`;

// DetailTopContainer Area
export const DetailTitle = styled.div`
  font-size: 2.5rem;
`;

export const DetailButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

export const DetailPickButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0.5rem 0.1rem;
  font-size: 1.2rem;
  background-color: #f2f2f2;
`;

export const DetailPickButton = styled.img`
  width: 30%;
  margin-right: 0.5rem;
`;

export const DetailInformationTooltip = styled.img`
  width: 20%;
  margin-left: 0.5rem;
`;

// DetailRateContainerArea
export const DetailRateStar = styled.div`
  width: 40%;
  height: 100%;
  background-color: #f2f2f2;
`;
export const DetailRateNumsReview = styled.div`
  font-size: 0.8rem;
`;

// DetailImageContainerArea
export const DetailImg = styled.img`
  flex-shrink: 0;
  width: 90%;
  height: 100%;
  margin: 0 0.5rem;
  border-radius: 20px;
  background-color: #f2f2f2;
`;

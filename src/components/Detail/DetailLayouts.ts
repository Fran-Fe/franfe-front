import styled from 'styled-components';

export const DetailDrawer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  overflow: auto;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  height: 7%;
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

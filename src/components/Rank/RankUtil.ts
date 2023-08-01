import styled from 'styled-components';

export const RankingLayouts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
`;

export const RankingHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  padding: 0 0 0.5rem 1rem;
`;

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 43%;
`;

export const RankingText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  height: 13%;
  padding: 0 3.5rem;
  font-size: 1.4rem;
`;

export const RankBackButton = styled.img`
  width: 8%;
`;

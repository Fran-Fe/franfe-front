import styled from 'styled-components';

interface CardRanking {
  ranking: number;
}

export interface RankingCardProps {
  ranking: number;
  src: string;
  alt: string;
  title: string;
  content: string;
  cafeId: string;
}

export const Card = styled.div<CardRanking>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ ranking }) => (ranking === 1 ? '90%' : '80%')};
  height: ${({ ranking }) => (ranking === 1 ? '29%' : '24%')};
  margin: 0.3rem 0;
  padding: 0 1rem;
  border-radius: 20px;
  background-color: ${({ ranking }) => (ranking === 1 ? '#e6e6e6' : '#f5f7f9')};
`;

export const CardIcon = styled.img`
  width: 10%;
`;

export const CardImg = styled.img`
  width: 23%;
  height: 95%;
  padding: 0.3rem;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 53%;
  height: 100%;
  padding: 0.3rem;
`;

export const CardTextTitle = styled.div`
  font-size: 1.5rem;
  margin: 0.3rem 0;
`;

export const CardTextContent = styled.div`
  font-size: 0.8rem;
  padding: 0.3rem;
`;

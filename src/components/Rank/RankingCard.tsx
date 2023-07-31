import styled from 'styled-components';

interface CardRanking {
  ranking: number;
}

const Card = styled.div<CardRanking>`
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

const CardIcon = styled.img`
  width: 10%;
`;

const CardImg = styled.img`
  width: 23%;
  height: 95%;
  padding: 0.3rem;
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 53%;
  height: 100%;
  padding: 0.3rem;
`;

const CardTextTitle = styled.div`
  font-size: 1.5rem;
  margin: 0.3rem 0;
`;

const CardTextContent = styled.div`
  font-size: 0.8rem;
  padding: 0.3rem;
`;

interface RankingCardProps {
  ranking: number;
  src: string;
  alt: string;
  title: string;
  content: string;
}

const RankingCard = (props: RankingCardProps) => {
  const { ranking, src, alt, title, content } = props;
  return (
    <Card ranking={ranking}>
      <CardIcon src={`${process.env.PUBLIC_URL}/assets/images/rank_${ranking}_icon.svg`} />
      <CardImg src={src} alt={alt} />
      <CardTextContainer>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextContent>{content}</CardTextContent>
      </CardTextContainer>
      <CardIcon src={`${process.env.PUBLIC_URL}/assets/images/ranking_search_icon.svg`} />
    </Card>
  );
};

export default RankingCard;

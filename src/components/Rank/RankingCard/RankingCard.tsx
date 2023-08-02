import {
  Card,
  CardIcon,
  CardImg,
  CardTextContainer,
  CardTextTitle,
  CardTextContent,
  RankingCardProps,
} from './RankingCardUtils';

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

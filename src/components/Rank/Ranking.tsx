import {
  RankingLayouts,
  RankingHeader,
  RankingContainer,
  RankBackButton,
  RankingText,
  RankingCard,
} from 'components/Rank';

const Ranking = () => {
  return (
    <RankingLayouts>
      <RankingHeader>
        <RankBackButton src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`} />
      </RankingHeader>
      <RankingContainer>
        <RankingText>GPT Ranking</RankingText>
        <RankingCard
          ranking={1}
          src="#"
          alt="Ranking Image"
          title="Cafe Name"
          content="Additional Info...."
        />
        <RankingCard
          ranking={2}
          src="#"
          alt="Ranking Image"
          title="Cafe Name"
          content="Additional Info...."
        />
        <RankingCard
          ranking={3}
          src="#"
          alt="Ranking Image"
          title="Cafe Name"
          content="Additional Info...."
        />
      </RankingContainer>
      <RankingContainer>
        <RankingText>Picked Ranking</RankingText>
        <RankingCard
          ranking={1}
          src="#"
          alt="Ranking Image"
          title="Cafe Name"
          content="Additional Info...."
        />
        <RankingCard
          ranking={2}
          src="#"
          alt="Ranking Image"
          title="Cafe Name"
          content="Additional Info...."
        />
        <RankingCard
          ranking={3}
          src="#"
          alt="Ranking Image"
          title="Cafe Name"
          content="Additional Info...."
        />
      </RankingContainer>
    </RankingLayouts>
  );
};

export default Ranking;

import {
  RankingLayouts,
  RankingHeader,
  RankingContainer,
  RankBackButton,
  RankingText,
  RankingCard,
} from 'components/Rank';
import { useEffect, useState } from 'react';
import { fetchRankings } from 'hooks';

const Ranking = () => {
  const [cafeInfo, setCafeInfo] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRankings();
        setCafeInfo(data);
      } catch (error) {
        console.error('Error fetching cafe details:', error);
      }
    };
    fetchData();
  }, []);

  console.log('Ranking: ', cafeInfo);

  return (
    <RankingLayouts>
      {/* <RankingHeader>
        <RankBackButton src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`} />
      </RankingHeader> */}
      <RankingContainer>
        <RankingText>GPT Ranking</RankingText>
        {cafeInfo?.userCompareWinRank?.list?.map((item: any, index: number) => (
          <RankingCard
            key={item.cafeUuid}
            ranking={item.rank}
            src="#" // URL 정보에 따라 채우기
            alt="Ranking Image"
            title="Cafe Name" // cafe 이름에 따라 채우기
            content="Additional Info...." // 추가 정보에 따라 채우기
            cafeId={item.cafeUuid}
          />
        ))}
      </RankingContainer>
      <RankingContainer>
        <RankingText>Picked Ranking</RankingText>
        {cafeInfo?.userComparisonRank?.list?.map((item: any, index: number) => (
          <RankingCard
            key={item.cafeUuid}
            ranking={item.rank}
            src="#" // URL 정보에 따라 채우기
            alt="Ranking Image"
            title="Cafe Name" // cafe 이름에 따라 채우기
            content="Additional Info...." // 추가 정보에 따라 채우기
            cafeId={item.cafeUuid}
          />
        ))}
      </RankingContainer>
    </RankingLayouts>
  );
};

export default Ranking;

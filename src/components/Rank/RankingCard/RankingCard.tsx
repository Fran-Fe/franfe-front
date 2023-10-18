import { useState } from 'react';
import { Drawer } from 'components/Common';
import { Detail } from 'components/Detail';
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
  const [openDetail, setOpenDetail] = useState(false);
  const { ranking, src, alt, title, content, cafeId } = props;
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);
  const detailSize = '100%';

  const showDetail = (uuid: string) => {
    setSelectedUuid(uuid);
    setOpenDetail(true);
  };

  const closeDetail = () => {
    setOpenDetail(false);
  };

  return (
    <>
      <Card ranking={ranking}>
        <CardIcon src={`${process.env.PUBLIC_URL}/assets/images/rank_${ranking}_icon.svg`} />
        <CardImg src={src} alt={alt} />
        <CardTextContainer>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextContent>{content}</CardTextContent>
        </CardTextContainer>
        <CardIcon
          src={`${process.env.PUBLIC_URL}/assets/images/ranking_search_icon.svg`}
          onClick={() => showDetail(cafeId)}
          style={{ cursor: 'pointer' }}
        />
      </Card>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={closeDetail}
        open={openDetail}
        getContainer={false}
        height={detailSize}
      >
        <Detail isOpen={openDetail} onClose={closeDetail} uuid={selectedUuid!} />
      </Drawer>
    </>
  );
};

export default RankingCard;

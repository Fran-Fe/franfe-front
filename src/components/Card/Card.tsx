import { HashtagIcon } from 'components/HashtagIcon';
import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardInfoContainer,
  CardTextContainer,
  CardTitle,
  CardBottomContainer,
  CustomButton,
} from './CardUtils';

interface ICardOnClick {
  address: string;
  distance: number;
  hashTags: string[];
  placeName: string;
  reviewCount: number;
  thumbnails: any;
  rating: number;
  uuid: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const filterThumbnailsByCategory = (thumbnails: any[]) => {
  const filteredThumbnails: any[] = [];
  const categories: { [key: number]: number } = {}; // 카테고리 별 썸네일 카운트를 저장하기 위한 객체

  thumbnails.forEach((thumb: any) => {
    const { category } = thumb; // 구조 분해 할당 사용

    // 해당 카테고리에 대한 카운트가 없거나 3 미만인 경우
    if (!categories[category] || categories[category] < 3) {
      filteredThumbnails.push(thumb);

      // 카테고리에 대한 썸네일 카운트를 증가시킴
      if (categories[category]) {
        categories[category] += 1;
      } else {
        categories[category] = 1;
      }
    }
  });

  return filteredThumbnails;
};

const Card = (props: ICardOnClick) => {
  const { onClick, address, distance, hashTags, placeName, reviewCount, thumbnails, rating, uuid } =
    props;

  const filteredThumbnails = filterThumbnailsByCategory(thumbnails);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardImageContainer>
        {filteredThumbnails.map((thumb) => (
          <CardImage
            key={thumb.url}
            src={thumb.url}
            alt="Image By AI"
            referrerPolicy="no-referrer"
          />
        ))}
      </CardImageContainer>
      <CardInfoContainer>
        <CardTextContainer>
          <CardTitle>{placeName}</CardTitle>
          <p>
            {rating} {reviewCount}{' '}
          </p>
        </CardTextContainer>
        <HashtagIcon Hashtags={hashTags} />
        <CardBottomContainer>
          <p>{address}</p>
          <p>{distance}</p>
          <CustomButton variant="primary" scale="xs">
            Pick
          </CustomButton>
        </CardBottomContainer>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default Card;

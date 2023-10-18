import {
  DetailDrawer,
  BackButtonContainer,
  DetailBackButton,
  DetailTopContainer,
  DetailTitle,
  DetailButton,
  DetailRate,
  DetailImage,
  DetailGPTContainer,
} from 'components/Detail';
import { HashtagIcon } from 'components/HashtagIcon';
import { fetchCafeDetail } from 'hooks';
import { useEffect, useState } from 'react';

interface IDetailVisble {
  isOpen: boolean;
  onClose: () => void;
  uuid: string | null;
}

const Detail = (props: IDetailVisble) => {
  const { isOpen, onClose, uuid } = props;
  const [cafeDetail, setCafeDetail] = useState<any>();
  const handleBackButtonClick = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (uuid) {
        try {
          const data = await fetchCafeDetail(uuid);
          const categorizedThumbnails: any = { 0: [], 1: [], 2: [], 3: [] };

          data.cafeThumbnails.forEach((thumbnail: any) => {
            const { category } = thumbnail; // 구조 분해 할당 사용
            if (categorizedThumbnails[category].length < 7) {
              categorizedThumbnails[category].push(thumbnail);
            }
          });

          data.categorizedThumbnails = categorizedThumbnails;
          setCafeDetail(data);
        } catch (error) {
          console.error('Error fetching cafe details:', error);
        }
      }
    };
    fetchData();
  }, [uuid]);

  console.log('Detail : ', cafeDetail);
  const cafeName = cafeDetail?.placeName;
  const cafeThumbnails = cafeDetail?.categorizedThumbnails;
  const cafeRating = cafeDetail?.rating;
  const numsOfReviews = cafeDetail?.reviews.length;
  const hashtags = cafeDetail?.hashtags;

  return (
    <DetailDrawer open={isOpen} onClose={onClose}>
      <BackButtonContainer>
        <DetailBackButton
          src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`}
          alt="Back Button Icon"
          onClick={handleBackButtonClick}
        />
      </BackButtonContainer>
      <DetailTopContainer>
        <DetailTitle>{cafeName}</DetailTitle>
        <DetailButton />
      </DetailTopContainer>
      <DetailRate rating={cafeRating} numsOfReviews={numsOfReviews} />
      <DetailImage thumbnails={cafeThumbnails} />
      <HashtagIcon Hashtags={hashtags} />
      <DetailGPTContainer>GPT AREA Fill In</DetailGPTContainer>
    </DetailDrawer>
  );
};

export default Detail;

import { DetailRateContainer, DetailRateStar, DetailRateNumsReview } from './DetailRateUtils';

interface DetailRateProps {
  rating: number;
  numsOfReviews: number;
}

const DetailRate = (props: DetailRateProps) => {
  const { rating, numsOfReviews } = props;
  return (
    <DetailRateContainer>
      {rating}
      <DetailRateStar />
      <DetailRateNumsReview>{numsOfReviews}</DetailRateNumsReview>
    </DetailRateContainer>
  );
};

export default DetailRate;

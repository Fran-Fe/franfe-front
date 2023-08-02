import {
  OnBoardingFeature,
  OnBoardingFeatureContainter,
  OnBoardingFeatureImage,
  OnBoardingFeatureTextContainer,
  OnBoardingFeatureTextDetail,
  OnBoardingFeatureTextTitle,
} from 'components/OnBoarding/OnBoardingFeatures/OnBoardingFeaturesUtil';

const OnBoardingFeatures = () => {
  return (
    <OnBoardingFeatureContainter>
      <OnBoardingFeature>
        <OnBoardingFeatureImage
          src={`${process.env.PUBLIC_URL}/assets/images/hashtag_square_icon.svg`}
          alt="Hashtag Img"
        />
        <OnBoardingFeatureTextContainer>
          <OnBoardingFeatureTextTitle>Hashtag</OnBoardingFeatureTextTitle>
          <OnBoardingFeatureTextDetail>
            Search your cafe based on people&apos;s hashtag
          </OnBoardingFeatureTextDetail>
        </OnBoardingFeatureTextContainer>
      </OnBoardingFeature>
      <OnBoardingFeature>
        <OnBoardingFeatureImage
          src={`${process.env.PUBLIC_URL}/assets/images/gallery_icon.svg`}
          alt="Gallery Img"
        />
        <OnBoardingFeatureTextContainer>
          <OnBoardingFeatureTextTitle>Gallery</OnBoardingFeatureTextTitle>
          <OnBoardingFeatureTextDetail>
            Find your cafe based on your first impressions
          </OnBoardingFeatureTextDetail>
        </OnBoardingFeatureTextContainer>
      </OnBoardingFeature>
      <OnBoardingFeature>
        <OnBoardingFeatureImage
          src={`${process.env.PUBLIC_URL}/assets/images/compare_icon.svg`}
          alt="Compare Img"
        />
        <OnBoardingFeatureTextContainer>
          <OnBoardingFeatureTextTitle>Compare</OnBoardingFeatureTextTitle>
          <OnBoardingFeatureTextDetail>
            Can&apos;t decide where to go?
            <br /> Don&apos;t worry, we will help you!
          </OnBoardingFeatureTextDetail>
        </OnBoardingFeatureTextContainer>
      </OnBoardingFeature>
    </OnBoardingFeatureContainter>
  );
};

export default OnBoardingFeatures;

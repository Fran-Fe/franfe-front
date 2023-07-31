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

const Detail = () => {
  const DummyData = ['coffee', 'cafe', 'rank1', 'detail', 'what', 'intern', 'front', 'back'];
  return (
    <DetailDrawer>
      <BackButtonContainer>
        <DetailBackButton
          src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`}
          alt="Back Button Icon"
        />
      </BackButtonContainer>
      <DetailTopContainer>
        <DetailTitle>Cafe Name</DetailTitle>
        <DetailButton />
      </DetailTopContainer>
      <DetailRate />
      <DetailImage />
      <HashtagIcon Hashtags={DummyData} />
      <DetailGPTContainer>GPT AREA Fill In</DetailGPTContainer>
    </DetailDrawer>
  );
};

export default Detail;

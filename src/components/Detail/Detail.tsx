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

interface IDetailVisble {
  isOpen: boolean;
  onClose: () => void;
}

const Detail = (props: IDetailVisble) => {
  const { isOpen, onClose } = props;
  const DummyData = ['coffee', 'cafe', 'rank1', 'detail', 'what', 'intern', 'front', 'back'];

  const handleBackButtonClick = () => {
    if (onClose) {
      onClose();
    }
  };

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

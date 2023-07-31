import {
  DetailButtonContainer,
  DetailPickButtonContainer,
  DetailPickButton,
  DetailInformationButton,
} from 'components/Detail';

const DetailButton = () => {
  return (
    <DetailButtonContainer>
      <DetailPickButtonContainer>
        <DetailPickButton
          src={`${process.env.PUBLIC_URL}/assets/images/pick_icon.svg`}
          alt="Pick Image"
        />
        Pick
      </DetailPickButtonContainer>
      <DetailInformationButton
        src={`${process.env.PUBLIC_URL}/assets/images/information_icon.svg`}
        alt="Information Image"
      />
    </DetailButtonContainer>
  );
};

export default DetailButton;

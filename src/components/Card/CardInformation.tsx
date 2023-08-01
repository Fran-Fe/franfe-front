import styled from 'styled-components';
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

const CardInformation = () => {
  const HashtagData = ['cafe', 'cozy', 'coffee', 'bread', 'latte', 'choco', 'bar', 'beer'];

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
      </CardImageContainer>
      <CardInfoContainer>
        <CardTextContainer>
          <CardTitle>CafeName</CardTitle>
          <p>Star ( nums of review ) </p>
        </CardTextContainer>
        <HashtagIcon Hashtags={HashtagData} />
        <CardBottomContainer>
          <p>Address</p>
          <CustomButton variant="primary" scale="xs">
            Pick
          </CustomButton>
        </CardBottomContainer>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default CardInformation;

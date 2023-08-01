import styled from 'styled-components';
import { HashtagIcon } from 'components/HashtagIcon';
import {
  CardCon,
  CardImage,
  CardImageContainer,
  CardTextContainer,
  CardTopContainer,
  CardTitle,
  CardBottomContainer,
  CustomButton,
} from './CardUtils';

const CardInformation = () => {
  const HashtagData = ['cafe', 'cozy', 'coffee', 'bread', 'latte', 'choco', 'bar', 'beer'];
  return (
    <CardCon>
      <CardImageContainer>
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
        <CardImage src="#" alt="Image By AI" />
      </CardImageContainer>
      <CardTextContainer>
        <CardTopContainer>
          <CardTitle>CafeName</CardTitle>
          <p>Star ( nums of review ) </p>
        </CardTopContainer>
        <HashtagIcon Hashtags={HashtagData} />
        <CardBottomContainer>
          <p>Address</p>
          <CustomButton variant="primary" scale="xs">
            Pick
          </CustomButton>
        </CardBottomContainer>
      </CardTextContainer>
    </CardCon>
  );
};

export default CardInformation;

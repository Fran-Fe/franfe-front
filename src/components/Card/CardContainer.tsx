import styled from 'styled-components';
import { Button } from 'components/Common';
import { HashtagIcon } from 'components/HashtagIcon';
import { CardCon, CardImage, CardImageContainer, CardTextContainer } from './CardUtils';

const CardTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 0 0.5rem;
`;

const CardBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0.3rem 0.4rem 0.3rem 1rem;
  font-size: 90%;
`;

const CardTitle = styled.p`
  font-size: 1.2rem;
`;

const CustomButton = styled(Button)`
  width: 3.7rem;
  height: 1.7rem;
  box-shadow: 0 4px 4px ${(props) => props.theme.backgroundSecondary};
`;

const CardContainer = () => {
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

export default CardContainer;

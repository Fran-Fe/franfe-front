import styled from 'styled-components';
import { Button } from 'components/Common';
import { HashtagIcon } from 'components/HashtagIcon';
import { CardCon, CardImage, CardImageContainer, CardTextContainer } from './CardUtils';

const CardText = styled.p`
  font-size: 1.2rem;
`;
const CardButton = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0.4rem 0.4rem 0;
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
        <CardText>CafeName</CardText>
        <HashtagIcon Hashtags={HashtagData} />
        <p>1st Info</p>
        <CardButton>
          <Button variant="primary" scale="xs">
            Pick
          </Button>
        </CardButton>
      </CardTextContainer>
    </CardCon>
  );
};

export default CardContainer;

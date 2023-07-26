import styled from 'styled-components';
import { Button } from 'components/Common';
import { CardCon, CardImage, CardImageContainer, CardTextContainer } from './CardUtils';

const CardText = styled.p`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
`;
const CardButton = styled.div`
  display: flex;
  alignitems: flex-end;
  padding: '0 0.4rem 0.4rem 0';
`;

const CardContainer = () => {
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
        <div>
          <CardText>CafeName</CardText>
          <p>1st Info</p>
        </div>
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

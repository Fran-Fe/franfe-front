import styled from 'styled-components';
import { Button } from 'components/Common';
import { CardCon, CardImage, CardImageContainer, CardTextContainer } from './CardUtils';

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
          <p style={{ fontSize: '1.2rem', margin: '0 0 1rem 0' }}>CafeName</p>
          <p>1st Info</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', padding: '0 0.4rem 0.4rem 0' }}>
          <Button variant="primary" scale="xs">
            Pick
          </Button>
        </div>
      </CardTextContainer>
    </CardCon>
  );
};

export default CardContainer;

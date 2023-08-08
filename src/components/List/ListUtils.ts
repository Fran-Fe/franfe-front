import styled from 'styled-components';
import { Header } from 'components/Header';

export const ListContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0.5rem;
  z-index: 2;
`;

export const BackButton = styled.img`
  width: 7%;
  padding: 0.1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
`;

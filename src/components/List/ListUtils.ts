import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
  z-index: 2;
`;

export const IconsContainer = styled.div`
  position: sticky;
  top: 6rem;
  display: flex;
  width: 100%;
  padding: 0 0.5rem;
  background-color: #fff;
  z-index: 2;
`;

export const BackButton = styled.img`
  width: 7%;
  padding: 0.1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

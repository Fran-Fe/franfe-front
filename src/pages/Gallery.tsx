import styled from 'styled-components';
import { List } from 'components/List';

const ListCon = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const Gallery = () => {
  return (
    <ListCon>
      <List />
    </ListCon>
  );
};

export default Gallery;

import { Map } from 'components/Map';
import { Header } from 'components/Header';
import styled from 'styled-components';

const MainCon = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Home: React.FC = () => {
  return (
    <MainCon>
      <Header />
      <Map />
    </MainCon>
  );
};
export default Home;

import { Map } from 'components/Map';
import { Header } from 'components/Header';
import { Card } from 'components/Card';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Card />
      {/* <Map /> */}
    </MainContainer>
  );
};
export default Home;

import { Map } from 'components/Map';
import { Header } from 'components/Header';
import { Card } from 'components/Card';
import { RedoButton } from 'components/RedoButton';
import { HashtagIcon } from 'components/HashtagIcon';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  const HashtagData = ['cafe', 'cozy', 'coffee', 'bread', 'latte', 'choco', 'bar', 'beer'];
  return (
    <MainContainer>
      <Header />
      <HashtagIcon Hashtags={HashtagData} />
      <RedoButton />
      <Map />
      <Card />
    </MainContainer>
  );
};
export default Home;

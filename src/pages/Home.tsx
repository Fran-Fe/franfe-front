import { useState } from 'react';
import { Map } from 'components/Map';
import { Header } from 'components/Header';
import { Card } from 'components/Card';
import { RedoButton } from 'components/RedoButton';
import { HashtagIcon } from 'components/HashtagIcon';
import { Detail } from 'components/Detail';
import { Drawer } from 'components/Common';
import { Slick } from 'components/Slick';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  const HashtagData = ['cafe', 'cozy', 'coffee', 'bread', 'latte', 'choco', 'bar', 'beer'];
  const size = '100%';
  const [open, setOpen] = useState(false);

  const showDetail = () => {
    setOpen(true);
  };

  const closeDetail = () => {
    setOpen(false);
  };

  return (
    <MainContainer>
      <Header />
      <HashtagIcon Hashtags={HashtagData} />
      <RedoButton />
      <Map />
      <Slick>
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
      </Slick>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={closeDetail}
        open={open}
        getContainer={false}
        height={size}
      >
        <Detail isOpen={open} onClose={closeDetail} />
      </Drawer>
    </MainContainer>
  );
};
export default Home;

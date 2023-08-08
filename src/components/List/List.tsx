import { useState } from 'react';
import { Header } from 'components/Header';
import { Card } from 'components/Card';
import { HashtagIcon } from 'components/HashtagIcon';
import { Drawer } from 'components/Common';
import { Detail } from 'components/Detail';
import {
  ListContainer,
  IconsContainer,
  BackButton,
  CardsContainer,
} from 'components/List/ListUtils';

const List = () => {
  const DummyDatas = ['Reviews', 'Rates', 'WiFi'];
  const size = '100%';

  const [open, setOpen] = useState(false);

  const showDetail = () => {
    setOpen(true);
  };

  const closeDetail = () => {
    setOpen(false);
  };

  return (
    <ListContainer>
      <Header />
      <IconsContainer>
        <BackButton
          src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`}
          alt="Bact Button Img"
        />
        <HashtagIcon Hashtags={DummyDatas} />
      </IconsContainer>
      <CardsContainer>
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
        <Card onClick={showDetail} />
      </CardsContainer>
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
    </ListContainer>
  );
};

export default List;

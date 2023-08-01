import styled from 'styled-components';
import { Header } from 'components/Header';
import { CardInformation } from 'components/Card';
import { HashtagIcon } from 'components/HashtagIcon';
import {
  ListContainer,
  SearchContainer,
  IconsContainer,
  BackButton,
  CardsContainer,
} from './ListUtils';

const List = () => {
  const DummyDatas = ['Reviews', 'Rates', 'WiFi'];
  return (
    <ListContainer>
      <SearchContainer>
        <Header />
      </SearchContainer>
      <IconsContainer>
        <BackButton
          src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`}
          alt="Bact Button Img"
        />
        <HashtagIcon Hashtags={DummyDatas} />
      </IconsContainer>
      <CardsContainer>
        <CardInformation />
        <CardInformation />
        <CardInformation />
        <CardInformation />
        <CardInformation />
        <CardInformation />
      </CardsContainer>
    </ListContainer>
  );
};

export default List;

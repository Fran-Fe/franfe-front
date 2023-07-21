import { Map } from 'components/Map';
import { SearchBar } from 'components/Header';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Map />
    </>
  );
};
export default Home;

import { Map } from 'components/Map';
import { SearchBar } from 'components/Header';

const Home: React.FC = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <SearchBar />
      <Map />
    </div>
  );
};
export default Home;

import { useState, useContext, useEffect } from 'react';
import { LocationContext } from 'contexts';
import { Map } from 'components/Map';
import { Header } from 'components/Header';
import { Card } from 'components/Card';
import { RedoButton } from 'components/RedoButton';
import { HashtagIcon } from 'components/HashtagIcon';
import { Detail } from 'components/Detail';
import { Drawer } from 'components/Common';
import { Slick } from 'components/Slick';
import styled from 'styled-components';
import { fetchCafeLists } from 'hooks';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  const [open, setOpen] = useState(false);
  const [cardData, setCardData] = useState<any[]>([]);
  const [hashtagData, setHashtagData] = useState([]);
  const [cafes, setCafes] = useState([]);
  const { currentPosition, distanceInMeters } = useContext(LocationContext);
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const dataCache: any = {};

  const showDetail = (uuid: string) => {
    setSelectedUuid(uuid);
    setOpen(true);
  };

  useEffect(() => {
    if (!currentPosition || !distanceInMeters) return;

    const fetchData = async () => {
      const cacheKey = `${currentPosition.lat},${currentPosition.lng},${distanceInMeters}`;

      if (dataCache[cacheKey]) {
        // 캐시에서 데이터 가져오기
        const cachedData = dataCache[cacheKey];
        setCardData(cachedData.cafeInfoList);
        setHashtagData(cachedData.topCountHashtags);
        setCafes(cachedData.cafes);
      } else {
        // 서버에서 데이터 가져오기
        const fetchedData = await fetchCafeLists(
          currentPosition.lat,
          currentPosition.lng,
          distanceInMeters,
        );

        const cafesData = fetchedData.cafeInfoList.map((cafe: any) => ({
          lat: parseFloat(cafe.lat),
          lng: parseFloat(cafe.lng),
          text: cafe.placeName,
        }));
        setCardData(fetchedData.cafeInfoList);
        setHashtagData(fetchedData.topCountHashtags);
        setCafes(cafesData);

        // 캐시 업데이트
        dataCache[cacheKey] = {
          cafeInfoList: fetchedData.cafeInfoList,
          topCountHashtags: fetchedData.topCountHashtags,
          cafes: cafesData,
        };
      }
    };

    fetchData();
  }, [currentPosition, distanceInMeters]);

  console.log('Home : ', cardData);

  return (
    <MainContainer>
      <Header Hashtags={hashtagData} />
      <HashtagIcon Hashtags={hashtagData} />
      {/* <RedoButton /> */}
      <Map cafes={cafes} />
      <Slick>
        {cardData.map((data) => (
          <Card key={data.uuid} onClick={() => showDetail(data.uuid)} {...data} />
        ))}
      </Slick>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        height="100%"
      >
        <Detail isOpen={open} onClose={() => setOpen(false)} uuid={selectedUuid!} />
      </Drawer>
    </MainContainer>
  );
};

export default Home;

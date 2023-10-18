import { useState, useContext, useEffect } from 'react';
import { LocationContext } from 'contexts';
import { fetchCafeLists } from 'hooks';
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
  const [open, setOpen] = useState(false);
  const [cardData, setCardData] = useState<any[]>([]);
  const [hashtagData, setHashtagData] = useState([]);
  const [cafes, setCafes] = useState([]);
  const { currentPosition, distanceInMeters } = useContext(LocationContext);
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const DummyDatas = ['Reviews', 'Rates', 'WiFi'];
  const size = '100%';

  const showDetail = (uuid: string) => {
    setSelectedUuid(uuid);
    setOpen(true);
  };

  const closeDetail = () => {
    setOpen(false);
  };

  const dataCache: any = {};

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
          undefined,
          1,
          50,
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

  console.log('List : ', cardData);

  return (
    <ListContainer>
      <Header Hashtags={hashtagData} />
      <IconsContainer>
        {/* <BackButton
          src={`${process.env.PUBLIC_URL}/assets/images/back_icon.svg`}
          alt="Bact Button Img"
        /> */}
        <HashtagIcon Hashtags={DummyDatas} />
      </IconsContainer>
      <CardsContainer>
        {cardData.map((data) => (
          <Card key={data.uuid} onClick={() => showDetail(data.uuid)} {...data} />
        ))}
      </CardsContainer>
      <Drawer
        placement="bottom"
        closable={false}
        onClose={closeDetail}
        open={open}
        getContainer={false}
        height={size}
      >
        <Detail isOpen={open} onClose={closeDetail} uuid={selectedUuid!} />
      </Drawer>
    </ListContainer>
  );
};

export default List;

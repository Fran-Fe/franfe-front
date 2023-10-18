import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchGalleryImages } from 'hooks';
import { HashtagIcon } from 'components/HashtagIcon';
import { Drawer } from 'components/Common';
import { Detail } from 'components/Detail';

interface GalleryImageData {
  cafeUuid: string;
  url: string;
}

const GalleryContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 1em;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryHeader = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 7%;
  font-size: 2rem;
  padding: 0 0 0.5rem 0;
`;

const GalleryImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
`;

const GalleryImage = styled.img<{ flex: number }>`
  flex: ${(props) => props.flex};
  height: auto;
`;

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImageData[]>([]);
  const hashtags = ['coffee', 'dessert', 'exterior', 'interior'];
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);
  const [selectedHashtagIndex, setSelectedHashtagIndex] = useState<number | null>(null);
  const size = '100%';

  const showDetail = (uuid: string) => {
    setSelectedUuid(uuid);
    setOpen(true);
  };

  const closeDetail = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 여기서 선택된 해시태그 인덱스에 따라 데이터를 불러옵니다.
        const { thumbnails } = await fetchGalleryImages(selectedHashtagIndex || 0, 20, 1);
        setGalleryImages(thumbnails);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };
    fetchData();
  }, [selectedHashtagIndex]);

  const predefinedFlex = [0.2, 0.3, 0.4, 0.5, 0.6]; // 예시, 실제 값을 조정할 수 있습니다.

  // 미리 정의된 너비 중 랜덤하게 선택
  const randomFlex = galleryImages.map(
    () => predefinedFlex[Math.floor(Math.random() * predefinedFlex.length)],
  );

  // 총합을 구함
  const totalFlex = randomFlex.reduce((acc, val) => acc + val, 0);

  // 너비를 정규화
  const normalizedFlex = randomFlex.map((val) => val / totalFlex);

  return (
    <GalleryContainer>
      <GalleryHeader>Gallery</GalleryHeader>
      <HashtagIcon Hashtags={hashtags} setSelectedHashtagIndex={setSelectedHashtagIndex} />
      <GalleryImageContainer>
        {galleryImages.map(({ cafeUuid, url }, index) => (
          <GalleryImage
            key={cafeUuid + index.toString()}
            src={url}
            flex={normalizedFlex[index]}
            onClick={() => showDetail(cafeUuid)}
          />
        ))}
      </GalleryImageContainer>
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
    </GalleryContainer>
  );
};
export default Gallery;

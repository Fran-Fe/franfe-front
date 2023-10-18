import { DetailImageContainer, DetailImg } from './DetailImageUtils';

interface DetailImageProps {
  thumbnails: { [key: number]: any[] };
}

const DetailImage = ({ thumbnails }: DetailImageProps) => {
  console.log(thumbnails);
  const renderThumbnailsByCategory = (category: number) => {
    if (!thumbnails || !thumbnails[category]) {
      return null;
    }
    return thumbnails[category]?.map((thumbnail: any, index: number) => (
      <DetailImg
        key={thumbnail.url}
        src={thumbnail.url}
        alt={`thumbnail-${index}`}
        referrerPolicy="no-referrer"
      />
    ));
  };

  return (
    <DetailImageContainer>
      {renderThumbnailsByCategory(0)}
      {renderThumbnailsByCategory(1)}
      {renderThumbnailsByCategory(2)}
      {renderThumbnailsByCategory(3)}
    </DetailImageContainer>
  );
};

export default DetailImage;

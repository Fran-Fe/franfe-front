import GoogleMapReact from 'google-map-react';

interface ILocation {
  lat: number;
  lng: number;
}
interface IMarker extends ILocation {
  text: string;
  title: string;
}
interface HomeProps {
  bootstrapURLKeys: { key: any };
  defaultCenter: ILocation;
  defaultZoom: number;
}
const defaultMarkerStyle = {
  path: 'M0,0 L20,0 L20,20 L0,20 Z',
  fillColor: 'red', // 기본 마커 색상 (파란색)
  fillOpacity: 1, // 마커 색상의 불투명도
  strokeColor: 'red', // 마커 테두리 색상
  strokeWeight: 1, // 마커 테두리 두께
  scale: 1, // 마커 크기 (기본 크기는 1)
};

const hoverMarkerStyle = {
  ...defaultMarkerStyle,
  fillColor: 'green', // hover 상태의 마커 색상 (초록색)
  strokeColor: 'green',
};

const addMarker = (map: any, maps: any, markers: IMarker[]) => {
  markers.forEach((marker) => {
    // 새로운 마커 생성
    const markerObj = new maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map,
      title: marker.text,
      icon: defaultMarkerStyle, // 기본 마커 스타일 설정
    });

    // 마커 클릭 이벤트 리스너 등록
    markerObj.addListener('click', () => {
      console.log(`마커를 클릭했습니다! 텍스트: ${marker.text}`);
    });

    // 마커의 mouseover 이벤트 리스너 등록
    markerObj.addListener('mouseover', () => {
      markerObj.setIcon(hoverMarkerStyle);
    });

    // 마커의 mouseout 이벤트 리스너 등록
    markerObj.addListener('mouseout', () => {
      markerObj.setIcon(defaultMarkerStyle);
    });
  });
};

const handleApiLoaded = (map: any, maps: any) => {
  // use map and maps objects
  const markers: IMarker[] = [
    { lat: 37.801505, lng: -122.402885, text: 'Marker 1', title: 'afjkl' },
    { lat: 37.8016, lng: -122.4017, text: 'Marker 2', title: 'jkdjlj' },
    // Add more markers as needed
  ];

  addMarker(map, maps, markers);
};
const Map: React.FC = () => {
  const GoogleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const defaultMarkerPosition = {
    lat: 37.801401,
    lng: -122.401569,
  };
  const defaultProps: HomeProps = {
    bootstrapURLKeys: { key: GoogleMapKey },
    defaultCenter: defaultMarkerPosition,
    defaultZoom: 18,
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={defaultProps.bootstrapURLKeys}
      defaultCenter={defaultProps.defaultCenter}
      defaultZoom={defaultProps.defaultZoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
  );
};
export default Map;

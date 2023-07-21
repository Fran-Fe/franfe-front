import { IMarker } from './MapInterface';

interface IMarkerUtils {
  defaultMarkerStyle: any;
  hoverMarkerStyle: any;
  addMarker(map: any, maps: any, markers: IMarker[]): void;
}

const defaultMarkerStyle = {
  path: 'M0,0 L20,0 L20,20 L0,20 Z',
  fillColor: 'red',
  fillOpacity: 1,
  strokeColor: 'red',
  strokeWeight: 1,
  scale: 1,
};

const hoverMarkerStyle = {
  ...defaultMarkerStyle,
  fillColor: 'green',
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

const MarkerUtils: IMarkerUtils = {
  defaultMarkerStyle,
  hoverMarkerStyle,
  addMarker,
};

export default MarkerUtils;

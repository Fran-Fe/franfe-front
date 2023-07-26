import { IMarker, IMarkerUtils } from 'components/Map/types';

const defaultMarkerStyle = {
  url: `${process.env.PUBLIC_URL}/assets/images/marker_icon_default.svg`,
};

const hoverMarkerStyle = {
  url: `${process.env.PUBLIC_URL}/assets/images/marker_icon_hover_click.svg`,
};

const addMarker = (map: any, maps: any, markers: IMarker[]) => {
  markers.forEach((marker) => {
    // 새로운 마커 생성
    const markerObj = new maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map,
      title: marker.text,
      icon: {
        url: `${process.env.PUBLIC_URL}/assets/images/marker_icon_default.svg`,
      },
    });

    // 마커 클릭 이벤트 리스너 등록
    markerObj.addListener('click', () => {
      console.log(`You've clicked a marker! Text: ${marker.text}`);
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

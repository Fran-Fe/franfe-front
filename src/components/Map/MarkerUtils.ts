import { IMarker, IMarkerUtils } from 'components/Map/types';

const defaultMarkerStyle = {
  url: `${process.env.PUBLIC_URL}/assets/images/marker_icon_default.svg`,
};

const hoverMarkerStyle = {
  url: `${process.env.PUBLIC_URL}/assets/images/marker_icon_hover_click.svg`,
};

let existingMarkers: any[] = [];

const addMarker = (map: any, maps: any, markers: IMarker[]) => {
  // 기존에 있는 마커를 지움
  existingMarkers.forEach((marker) => marker.setMap(null));
  // 배열을 비움
  existingMarkers = [];

  markers.forEach((marker) => {
    const markerObj = new maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map,
      title: marker.text,
      icon: {
        url: `${process.env.PUBLIC_URL}/assets/images/marker_icon_default.svg`,
      },
    });

    markerObj.addListener('click', () => {
      console.log(`You've clicked a marker! Text: ${marker.text}`);
    });

    markerObj.addListener('mouseover', () => {
      markerObj.setIcon(hoverMarkerStyle);
    });

    markerObj.addListener('mouseout', () => {
      markerObj.setIcon(defaultMarkerStyle);
    });

    // 새로 생성된 마커를 배열에 추가
    existingMarkers.push(markerObj);
  });
};

const MarkerUtils: IMarkerUtils = {
  defaultMarkerStyle,
  hoverMarkerStyle,
  addMarker,
};

export default MarkerUtils;

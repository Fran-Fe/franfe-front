import GoogleMapReact from 'google-map-react';
import { MarkerUtils, IMarker, IDefaultMap } from 'components/Map';

const handleApiLoaded = (map: any, maps: any) => {
  // use map and maps objects
  const markers: IMarker[] = [
    { lat: 37.801505, lng: -122.402885, text: 'Marker 1' },
    { lat: 37.8016, lng: -122.4017, text: 'Marker 2' },
    // Add more markers as needed
  ];

  MarkerUtils.addMarker(map, maps, markers);
};
const Map = () => {
  const GoogleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const defaultMarkerPosition = {
    lat: 37.801401,
    lng: -122.401569,
  };
  const mapOptions = {
    fullscreenControl: false, // removed fullscreen button
    zoomControl: false, // removed zoom-in, zoom-out button
  };

  const defaultLocation: IDefaultMap = {
    bootstrapURLKeys: { key: GoogleMapKey },
    defaultCenter: defaultMarkerPosition,
    defaultZoom: 18,
  };

  return (
    <GoogleMapReact
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '0' }}
      bootstrapURLKeys={defaultLocation.bootstrapURLKeys}
      defaultCenter={defaultLocation.defaultCenter}
      defaultZoom={defaultLocation.defaultZoom}
      options={mapOptions}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
  );
};
export default Map;

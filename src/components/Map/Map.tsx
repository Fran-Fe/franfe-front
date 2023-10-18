import { useState, useEffect, useContext, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import { MarkerUtils, IMarker } from 'components/Map';
import { LocationContext } from 'contexts';
import { getCurrentRadius } from 'hooks';
import { debounce } from 'lodash';

const defaultMarkerPosition = { lat: 37.795589, lng: -122.410212 };

interface MapProps {
  cafes: IMarker[];
}

const Map = ({ cafes }: MapProps) => {
  const [mapInstance, setMapInstance] = useState(null as any);
  const [mapsInstance, setMapsInstance] = useState(null as any);
  const [currentPosition, setCurrentPosition] = useState(defaultMarkerPosition);

  const { setCurrentPosition: setGlobalCurrentPosition, setDistanceInMeters } =
    useContext(LocationContext);

  const handleApiLoaded = useCallback((map: any, maps: any) => {
    setMapInstance(map);
    setMapsInstance(maps);
  }, []);

  const debouncedSetCurrentPosition = debounce((newPosition: { lat: number; lng: number }) => {
    setCurrentPosition(newPosition);
    setGlobalCurrentPosition(newPosition);
  }, 300);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const newPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCurrentPosition(newPosition);
        setGlobalCurrentPosition(newPosition);
      },
      (error) => console.error('Geolocation Error:', error),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [setGlobalCurrentPosition]);

  useEffect(() => {
    if (mapInstance && mapsInstance) {
      const zoomChangedListener = mapsInstance.event.addListener(
        mapInstance,
        'zoom_changed',
        () => {
          const bounds = mapInstance.getBounds();
          if (bounds) {
            const center = bounds.getCenter();
            const ne = bounds.getNorthEast();
            const distance = getCurrentRadius(center.lat(), center.lng(), ne.lat(), ne.lng());
            setDistanceInMeters(distance);
          }
        },
      );

      const centerChangedListener = mapsInstance.event.addListener(
        mapInstance,
        'center_changed',
        () => {
          const center = mapInstance.getCenter();
          const newPosition = { lat: center.lat(), lng: center.lng() };
          debouncedSetCurrentPosition(newPosition);
        },
      );

      return () => {
        mapsInstance.event.removeListener(zoomChangedListener);
        mapsInstance.event.removeListener(centerChangedListener);
      };
    }
    return undefined;
  }, [mapInstance, mapsInstance, debouncedSetCurrentPosition, setDistanceInMeters]);

  useEffect(() => {
    if (mapInstance && mapsInstance) {
      const markers: IMarker[] = cafes.map((cafe: any) => ({
        lat: parseFloat(cafe.lat),
        lng: parseFloat(cafe.lng),
        text: cafe.placeName,
      }));
      MarkerUtils.addMarker(mapInstance, mapsInstance, markers);
    }
  }, [cafes, mapInstance, mapsInstance]);

  return (
    <GoogleMapReact
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '0' }}
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY!, language: 'en' }}
      center={currentPosition}
      defaultCenter={defaultMarkerPosition}
      defaultZoom={16}
      options={{ fullscreenControl: false, zoomControl: false }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
  );
};

export default Map;

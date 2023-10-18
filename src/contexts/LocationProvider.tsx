// LocationProvider.tsx
import { useMemo, useState } from 'react';
import LocationContext from './LocationContext';

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 37.795589, lng: -122.410212 });
  const [distanceInMeters, setDistanceInMeters] = useState(990);

  const contextValue = useMemo(
    () => ({
      currentPosition,
      setCurrentPosition,
      distanceInMeters,
      setDistanceInMeters,
    }),
    [currentPosition, distanceInMeters],
  );

  return <LocationContext.Provider value={contextValue}>{children}</LocationContext.Provider>;
};

export default LocationProvider;

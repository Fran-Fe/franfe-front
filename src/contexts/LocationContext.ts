// LocationContext.tsx
import { createContext } from 'react';

interface LocationContextType {
  currentPosition: { lat: number; lng: number };
  distanceInMeters: number;
  setCurrentPosition: (position: { lat: number; lng: number }) => void;
  setDistanceInMeters: (distance: number) => void;
}

const LocationContext = createContext<LocationContextType>({
  currentPosition: { lat: 0, lng: 0 },
  distanceInMeters: 0,
  setCurrentPosition: () =>
    console.warn('setCurrentPosition was called without a LocationProvider.'),
  setDistanceInMeters: () =>
    console.warn('setDistanceInMeters was called without a LocationProvider.'),
});

export default LocationContext;

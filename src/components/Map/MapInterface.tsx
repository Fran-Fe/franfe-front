import GoogleMapReact from 'google-map-react';

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IMarker extends ILocation {
  text: string;
}

export interface DefaultMap {
  bootstrapURLKeys: { key: any };
  defaultCenter: ILocation;
  defaultZoom: number;
}

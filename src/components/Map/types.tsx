import GoogleMapReact from 'google-map-react';

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IMarker extends ILocation {
  text: string;
}

type BootstrapURLKeys = { key: any };

export interface IDefaultMap {
  bootstrapURLKeys: BootstrapURLKeys;
  defaultCenter: ILocation;
  defaultZoom: number;
}

export interface IMarkerUtils {
  defaultMarkerStyle: any;
  hoverMarkerStyle: any;
  addMarker(map: any, maps: any, markers: IMarker[]): void;
}

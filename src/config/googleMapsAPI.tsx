import React from 'react';
import { Map, GoogleApiWrapper, IMapProps } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

type MapsProps = IMapProps;

export const MapContainer: React.FC<MapsProps> = ({ google }) => (
  <Map
    google={google}
    zoom={14}
    style={mapStyles}
    initialCenter={{
      lat: -1.2884,
      lng: 36.8233,
    }}
  />
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
})(MapContainer);

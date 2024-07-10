// src/components/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location, isochrone }) => {
  return (
    <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.lat, location.lng]} />
      {isochrone && <GeoJSON data={isochrone} style={{ color: 'blue' }} />}
    </MapContainer>
  );
};

export default Map;

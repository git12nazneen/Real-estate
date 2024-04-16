import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Leaflet.css';

const position = [23.789712258935243, 90.39468674368977];

const Leaflet = () => (
  <div className="leaflet-container mx-auto my-10 "> 
    <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="leaflet-map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Leaflet;

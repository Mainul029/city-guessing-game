'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import { MAP_CENTER } from '@/constants/map';

interface MapProps {
  city: { name: string; position: { lat: number; lng: number } };
  onPinDrop: (latlng: LatLng) => void;
}

const LocationMarker = ({
  onPinDrop,
}: {
  onPinDrop: (latlng: LatLng) => void;
}) => {
  const [marker, setMarker] = useState<LatLng | null>(null);

  useMapEvents({
    click(e) {
      setMarker(e.latlng);
      onPinDrop(e.latlng);
    },
  });

  return marker ? <Marker position={marker} /> : null;
};

const Map = ({ city, onPinDrop }: MapProps) => {
  return (
    <MapContainer className="h-96 w-full" center={MAP_CENTER} zoom={4}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <LocationMarker onPinDrop={onPinDrop} />
    </MapContainer>
  );
};

export default Map;

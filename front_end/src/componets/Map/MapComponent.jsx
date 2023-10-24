import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

const MapComponent = () => {
  const [position, setPosition] = useState([21.0404518, 105.8206392]);
  const [selectedPosition, setSelectedPosition] = useState([0, 0]);

  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        console.log(e.latlng);
      },
    });

    return selectedPosition ? (
      <Marker
        key={selectedPosition}
        position={selectedPosition}
        interactive={false}
      />
    ) : null;
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={16}
        style={{ width: "100%", height: "calc(100vh - 1rem)" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers />
      </MapContainer>
    </div>
  );
};
export default MapComponent;

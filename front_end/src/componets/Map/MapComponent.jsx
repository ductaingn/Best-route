import React, { useState, useEffect, useContext  } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useMapEvent } from "react-leaflet/hooks";
import { useStore } from "../../store";
import { dataContext } from "../Features/SearchButton";

const MapComponent = () => {

  const data = useContext(dataContext);
  console.log(data);

  const [state, dispatch] = useStore();
  const addPosition = (latlng) => {
    dispatch({
      type: "ADD_POS",
      name: `[${latlng.lat}, ${latlng.lng}]`,
      position: [latlng.lat, latlng.lng],
    });
  };

  const MapClick = () => {
    const map = useMapEvent("click", (e) => {
      addPosition(e.latlng);
    });

    return (
      <>
        {state.map((address, index) => (
          <Marker key={index} position={address.position}>
            <Popup>
              position {index + 1}
            </Popup>
          </Marker>
        ))}
      </>
    );
  };

  return (
    <div>
      <MapContainer
        center={[21.04045, 105.82063]}
        zoom={16}
        style={{ width: "100%", height: "calc(100vh - 1rem)" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClick />
      </MapContainer>
    </div>
  );
};

export default MapComponent;

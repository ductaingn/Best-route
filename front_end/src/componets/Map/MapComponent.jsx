import React, { Fragment } from "react";
import { MapContainer, Marker, TileLayer, Popup, Polyline } from "react-leaflet";
import L from 'leaflet';
import { useMapEvent } from "react-leaflet/hooks";
import { useStore } from "../../store"; 

const markerIcons = [];
for (let i = 1; i <= 5; i++) {
  const icon = new L.Icon({
    iconUrl: require(`../../resource/location-pin${i}.png`),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  markerIcons.push(icon);
}

const MapComponent = () => {
  const [state, dispatch] = useStore();
  const line = state.map(address => address.position)
  const addPosition = (latlng) => {
    dispatch({
      type: "ADD_POS_BY_CLICK",
      name: `[${latlng.lat}, ${latlng.lng}]`,
      position: [latlng.lat, latlng.lng],
    });
  };
  console.log(state);
  const MapClick = () => {
    const map = useMapEvent("click", (e) => {
      addPosition(e.latlng);
    });

    return (
      <>
        {state.map((address, index) => (
          <Marker key={index} position={address.position} icon={markerIcons[index%5]}>
            <Popup>
              position {index+1}
            </Popup>
          </Marker>
          ))}
          {(state) ? <Polyline positions={line} color="#F45990" weight={3} opacity={0.9} /> : <Fragment />}
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

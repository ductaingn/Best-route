import React, { Fragment, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  Polyline,
} from "react-leaflet";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import L from "leaflet";
import pointInPolygon from "./pointInPolygon";
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

const border = require("./border.json");

const MapComponent = () => {
  const [openArlet, setOpenArlet] = useState(false);
  const [state, dispatch] = useStore();
  const line = state.map((address) => address.position);

  const addPosition = (latlng) => {
    dispatch({
      type: "ADD_POS_BY_CLICK",
      name: `[${latlng.lat}, ${latlng.lng}]`,
      position: [latlng.lat, latlng.lng],
    });
  };

  const MapClick = () => {
    const map = useMapEvent("click", (e) => {
      var inSide = pointInPolygon(e.latlng, border);
      if (inSide) {
        addPosition(e.latlng);
      } else {
        setOpenArlet(true);
      }
    });

    return (
      <>
        {state.map((address, index) => (
          <Marker
            key={index}
            position={address.position}
            icon={markerIcons[index % 5]}
          >
            <Popup>position {index + 1}</Popup>
          </Marker>
        ))}
        {state ? (
          <Polyline
            positions={line}
            color="#3f51b5"
            weight={3}
            opacity={0.9}
            dashArray="10, 5"
          />
        ) : (
          <Fragment />
        )}
        <Polyline
          positions={border}
          color="#F45990"
          weight={2}
          opacity={0.9}
          dashArray="20, 10, 4, 10"
        />
        <Snackbar
          open={openArlet}
          autoHideDuration={1500}
          onClose={() => setOpenArlet(false)}
        >
          <Alert onClose={() => setOpenArlet(false)} severity="error">
            Điểm vừa chọn nằm ngoài phường Liều Giai
          </Alert>
        </Snackbar>
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

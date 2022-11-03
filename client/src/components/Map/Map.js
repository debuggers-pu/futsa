import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import L from "leaflet";
import Futsals from "../../dummuydata/futsals.json";

const markerIcon = L.icon({
  iconUrl: "images/avatar.png",
  iconSize: [25, 25],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
const futsalIcon = L.icon({
  iconUrl: "images/ball.png",
  iconSize: [25, 25],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={markerIcon}>
        <Popup>
          Your Location <br /> latitude:{lat}
          <br /> lngitude:{lng}
        </Popup>
      </Marker>
      {Futsals.map((futsal) =>
        futsal.futsals.map((f) => {
          return (
            <Marker
              position={[f.location.lat, f.location.lng]}
              icon={futsalIcon}
            >
              <Popup>
                <img
                  src={`images/${f.images[0]}`}
                  alt="profilepic"
                  loading="lazy"
                  className="h-8 my-2"
                />
                {f.location.address}
                <br />
                {f.name}
                <br />
                latitude:{f.location.lat}
                <br />
                longitude:{f.location.lng}
              </Popup>
            </Marker>
          );
        })
      )}
    </MapContainer>
  );
};

export default Map;

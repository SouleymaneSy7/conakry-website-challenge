import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "leaflet/dist/leaflet.css";

import { communeMapMarkers } from "@/constants/homepage-constants";

const lat = 9.509167;
const long = -13.712222;

const LeafletMapContainer = () => {
  return (
    <MapContainer
      center={[lat, long]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {communeMapMarkers.map((markerItem) => {
        return (
          <Marker
            key={markerItem.name}
            position={[markerItem.position[0], markerItem.position[1]]}
          >
            <Popup>{markerItem.description}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default LeafletMapContainer;

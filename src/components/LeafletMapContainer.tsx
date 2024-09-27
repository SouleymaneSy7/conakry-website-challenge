import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "leaflet/dist/leaflet.css";

const lat = 9.509167;
const long = -13.712222;

// Données pour les 5 communes de Conakry
const communeMarkers = [
  {
    name: "Kaloum",
    position: [9.5149641, -13.7084413],
    description: "Kaloum est trop cool.",
  },
  {
    name: "Matam",
    position: [9.5450927, -13.6646999],
    description: "Matam est trop cool.",
  },
  {
    name: "Dixinn",
    position: [9.5471058, -13.6729364],
    description: "Dixinn est trop cool.",
  },
  {
    name: "Matoto",
    position: [9.618061, -13.5889068],
    description: "Matoto est trop cool.",
  },
  {
    name: "Ratoma",
    position: [9.6306334, -13.6078389],
    description: "Ratoma est trop cool.",
  },
];

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

      {communeMarkers.map((markerItem) => {
        return (
          <Marker
            key={markerItem.name}
            position={[markerItem.position[0], markerItem.position[1]]}
          >
            <Popup>
              Hello From Conakry. <br /> {markerItem.description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default LeafletMapContainer;

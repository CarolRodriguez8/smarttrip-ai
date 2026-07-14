import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

type MapProps = {
  position: [number, number];
  destination: string;
};

function ChangeMapView({ position }: { position: [number, number] }) {
  const map = useMap();

  map.setView(position, 12);

  return null;
}

function MapComponent({ position, destination }: MapProps) {
  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: "300px", width: "100%" }}
    >
      <ChangeMapView position={position} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>{destination}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
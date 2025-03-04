import { MapContainer, TileLayer } from "react-leaflet";

const WorldMap = () => {
  const UsaPosition = { lat: 50, lng: 10 };

  return (
    <div>
      <MapContainer
        style={{ height: 389 }}
        easeLinearity={0.35}
        attributionControl={true}
        center={UsaPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="z-0 jvector-map-height"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default WorldMap;

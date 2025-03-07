import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L, { Map as LeafletMap } from "leaflet";
import "leaflet-control-geocoder";

type locationsProps = {
  position: [number, number];
  name: string;
  icon: any;
};

const customIcon = new L.Icon({
  iconUrl: "/assets/images/icon/leaflet/default-icon.png",
  iconSize: [25, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const targetIcon = new L.Icon({
  iconUrl: "/assets/images/icon/marker-icon.png",
  iconSize: [50, 50],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ChangeCursor = ({ cursor }: { cursor: string }) => {
  const map = useMap();
  useEffect(() => {
    map.getContainer().style.cursor = cursor;
  }, [cursor, map]);

  return null;
};

const getPlaceName = async (lat: number, lng: number) => {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch location name");
    const data = await response.json();
    return data.display_name || "Unknown Location";
  } catch (error) {
    return "Unknown Location";
  }
};

const WorldMap = ({
  checkPlace,
  locationSet,
}: {
  checkPlace: boolean;
  locationSet?: any;
}) => {
  const [usaPosition, setUsaPosition] = useState<[number, number]>(
    locationSet && locationSet.position ? locationSet.position : [50, 10]
  );

  const [locations, setLocations] = useState<locationsProps[]>([]);

  const processLocations = async () => {
    if (
      !locationSet ||
      !locationSet.locations ||
      !Array.isArray(locationSet.locations)
    ) {
      console.error("Invalid locationSet structure:", locationSet);
      return;
    }
    const locationSets = await Promise.all(
      locationSet.locations.map(async (loc: any) => ({
        position: [loc[0], loc[1]],
        name: await getPlaceName(loc[0], loc[1]),
        icon: customIcon,
      }))
    );
    setLocations(locationSets);
  };

  useEffect(() => {
    if (locationSet) {
      processLocations();
    }
  }, [locationSet]);

  useEffect(() => {
    console.log(usaPosition);
  }, [usaPosition]);

  const mapRef = useRef<LeafletMap | null>(null);
  const [searchResults, setSearchResults] = useState<string>("");

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        if (!checkPlace) return;
        const { lat, lng } = e.latlng;
        const placeName = await getPlaceName(lat, lng);
        setLocations((prev) => [
          ...prev,
          { position: [lat, lng], name: placeName, icon: customIcon },
        ]);
      },
    });
    return null;
  };

  return (
    <div>
      <h3>World Map with Search</h3>
      <p>Search Result: {searchResults || "No location searched yet"}</p>

      <MapContainer
        style={{ height: 389 }}
        center={usaPosition}
        zoom={13}
        whenReady={(mapInstance) => {
          mapRef.current = mapInstance.target;
          const geocoder = (L.Control as any)
            .geocoder({
              defaultMarkGeocode: false,
            })
            .on("markgeocode", function (e: any) {
              const { center, name } = e.geocode;
              setSearchResults(name);
              setUsaPosition([center.lat, center.lng]);
              L.marker(center, { icon: targetIcon })
                .addTo(mapRef.current!)
                .bindPopup(name)
                .openPopup();
              mapRef.current!.setView(center, 12);
            })
            .addTo(mapRef.current!);
        }}
        scrollWheelZoom={true}
        className="z-0 jvector-map-height"
      >
        <MapClickHandler />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeCursor cursor={checkPlace ? "crosshair" : "pointer"} />
        {locations.map((loc: locationsProps, index: number) => (
          <Marker key={index} position={loc.position} icon={loc.icon}>
            <Popup>
              <strong>Point {index + 1}</strong>
              <br />
              {loc.name}
              <br />
              <p
                className="btn btn-secondary p-1"
                onClick={() => {
                  const points = locations.filter((_, i) => i !== index);
                  setLocations(points);
                }}
              >
                Remove
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {locations.map((loc: locationsProps, index: number) => (
        <p key={index}>
          {loc.position[0].toFixed(3) + ", " + loc.position[1].toFixed(3)}
        </p>
      ))}
    </div>
  );
};

export default WorldMap;

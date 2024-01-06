import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ResetCenterView } from "./ResetCenterView";
import { LocationMarker } from "./LocationMarker";
import { useLocationStore } from "../../../store/useLocationsStore";
import { SearchResultMarkers } from "./SearchResultMarkers";
import { FitBounds } from "./FitBounds";
import { useOurLocationsStore } from "../../../store/useOurLocationsStore";
import { blackPin } from "../../../components/icons/Pinpoint";
import { useEffect } from "react";
import { getOurLocations } from "../../../services/MapServices";
import { OurLocationMarkers } from "./OurLocationMarkers";

export const LeafletMap = () => {
  const { selectLocation, listLocations } = useLocationStore();
  const { ourLocations, setOurLocations, showLocation } =
    useOurLocationsStore();
  const locationSelection: L.LatLngExpression = [
    selectLocation?.lat ? parseFloat(selectLocation.lat) : 0,
    selectLocation?.lon ? parseFloat(selectLocation.lon) : 0,
  ];

  useEffect(() => {
    const fetchOurLocations = async () => {
      if (ourLocations.length === 0) {
        const locations = await getOurLocations();
        setOurLocations(locations);
      }
    };
    fetchOurLocations();
  });

  const locationLatLngs: [number, number][] = listLocations.map((location) => [
    parseFloat(location.lat),
    parseFloat(location.lon),
  ]);

  console.log(selectLocation);

  return (
    <>
      <MapContainer
        center={[59.3497428, 17.855575321915243]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%", zIndex: "2" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=WqQh8nBQFrHSaQDrbx5E"
        />
        <LocationMarker />
        <SearchResultMarkers locations={listLocations} />

        {showLocation && <OurLocationMarkers locations={ourLocations} />}

        {selectLocation && (
          <>
            <Marker position={locationSelection} icon={blackPin}>
              <Popup>{selectLocation.display_name}</Popup>
            </Marker>
            <ResetCenterView selectLocation={selectLocation} />
          </>
        )}
        <FitBounds locations={locationLatLngs} />
      </MapContainer>
    </>
  );
};

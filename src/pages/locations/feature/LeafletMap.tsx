import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./../style/location.css";
import { ResetCenterView } from "./ResetCenterView";
import { LocationMarker } from "./LocationMarker";
import { useLocationStore } from "../../../store/useLocationsStore";
import { SearchResultMarkers } from "./SearchResultMarkers";
import { FitBounds } from "./FitBounds";
import { useOurLocationsStore } from "../../../store/useOurLocationsStore";
import { LocationResultMarkers } from "./LocationResultMarkers";
import { icon } from "../../../components/icons/Pinpoint";

export const LeafletMap = () => {
  const { selectLocation, listLocations } = useLocationStore();
  const { ourLocations } = useOurLocationsStore();
  const locationSelection: L.LatLngExpression = [
    selectLocation?.lat ? parseFloat(selectLocation.lat) : 0,
    selectLocation?.lon ? parseFloat(selectLocation.lon) : 0,
  ];

  const locationLatLngs: [number, number][] = listLocations.map((location) => [
    parseFloat(location.lat),
    parseFloat(location.lon),
  ]);

  return (
    <>
      <MapContainer
        center={[59.3497428, 17.855575321915243]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=WqQh8nBQFrHSaQDrbx5E"
        />
        <LocationMarker />
        <SearchResultMarkers locations={listLocations} />
        <LocationResultMarkers locations={ourLocations} />
        {selectLocation && (
          <Marker position={locationSelection} icon={icon}>
            <Popup className="popup-content-wrapper">
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        <FitBounds locations={locationLatLngs} />
        <ResetCenterView selectLocation={selectLocation} />
      </MapContainer>
    </>
  );
};

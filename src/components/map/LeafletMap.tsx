import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ResetCenterView } from "../reset-center-view/ResetCenterView";
import { LocationMarker } from "../location-marker/LocationMarker";
import { useLocationStore } from "../../store/useLocationsStore";
import { SearchResultMarkers } from "../search-result-markers/SearchResultMarkers";

// const icon = L.icon({
//   iconUrl: "/pinpointSVG.png",
//   iconSize: [35, 35],
// });

export const LeafletMap = () => {
  const { selectLocation, listLocations } = useLocationStore();
  const locationSelection: L.LatLngExpression = [
    selectLocation?.lat ? parseFloat(selectLocation.lat) : 0,
    selectLocation?.lon ? parseFloat(selectLocation.lon) : 0,
  ];

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
        {selectLocation && (
          <Marker position={locationSelection}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        <ResetCenterView selectLocation={selectLocation} />
      </MapContainer>
    </>
  );
};

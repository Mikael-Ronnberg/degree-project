import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ResetCenterView } from "./ResetCenterView";
import { LocationMarker } from "./LocationMarker";
import { useLocationStore } from "../../../store/useLocationsStore";
import { SearchResultMarkers } from "./SearchResultMarkers";
import { FitBounds } from "./FitBounds";
import { HStack, Checkbox } from "@chakra-ui/react";
import { mapCheckboxStyles } from "../style/locationStyle";
import { useOurLocationsStore } from "../../../store/useOurLocationsStore";
import { useEffect, useState } from "react";
import { getOurLocations } from "../../../services/MapServices";
import { LocationResultMarkers } from "./LocationResultMarkers";

// const icon = L.icon({
//   iconUrl: "/pinpointSVG.png",
//   iconSize: [35, 35],
// });

export const LeafletMap = () => {
  const { selectLocation, listLocations } = useLocationStore();
  const { ourLocations, setOurLocations } = useOurLocationsStore();
  const [isOurLocationsChecked, setIsOurLocationChecked] = useState(false);
  const locationSelection: L.LatLngExpression = [
    selectLocation?.lat ? parseFloat(selectLocation.lat) : 0,
    selectLocation?.lon ? parseFloat(selectLocation.lon) : 0,
  ];

  useEffect(() => {
    if (isOurLocationsChecked) {
      const fetchOurLocations = async () => {
        if (ourLocations.length === 0) {
          const locations = await getOurLocations();
          setOurLocations(locations);
        }
      };
      fetchOurLocations();
    }
  }, [isOurLocationsChecked]);

  const locationLatLngs: [number, number][] = listLocations.map((location) => [
    parseFloat(location.lat),
    parseFloat(location.lon),
  ]);

  return (
    <>
      <HStack spacing="3rem">
        <Checkbox
          {...mapCheckboxStyles}
          onChange={(e) => setIsOurLocationChecked(e.target.checked)}
        >
          Besökta Platser
        </Checkbox>
        <Checkbox {...mapCheckboxStyles}>Senaste Besökta Platser</Checkbox>
      </HStack>
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
          <Marker position={locationSelection}>
            <Popup>
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

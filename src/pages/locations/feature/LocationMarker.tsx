import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useLocationStore } from "../../../store/useLocationsStore";

export const LocationMarker = () => {
  const { pinLocation, setPinLocation } = useLocationStore();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinLocation({ lat, lng });
    },
  });

  return pinLocation ? (
    <Marker position={[pinLocation.lat, pinLocation.lng]}>
      <Popup>You clicked here</Popup>
    </Marker>
  ) : null;
};

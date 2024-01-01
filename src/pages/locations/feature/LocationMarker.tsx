import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useLocationStore } from "../../../store/useLocationsStore";
import "./../style/location.css";
import { greenPin } from "../../../components/icons/Pinpoint";

export const LocationMarker = () => {
  const { pinLocation, setPinLocation } = useLocationStore();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinLocation({ lat, lng });
    },
  });

  return pinLocation ? (
    <Marker position={[pinLocation.lat, pinLocation.lng]} icon={greenPin}>
      <Popup className="popup-content-wrapper">Du Klickade Här!</Popup>
    </Marker>
  ) : null;
};

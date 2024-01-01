import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useLocationStore } from "../../../store/useLocationsStore";
import { icon } from "../../../components/icons/Pinpoint";
import "./../style/location.css";

export const LocationMarker = () => {
  const { pinLocation, setPinLocation } = useLocationStore();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinLocation({ lat, lng });
    },
  });

  return pinLocation ? (
    <Marker position={[pinLocation.lat, pinLocation.lng]} icon={icon}>
      <Popup className="popup-content-wrapper">You clicked here</Popup>
    </Marker>
  ) : null;
};

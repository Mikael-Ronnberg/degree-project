import { useMapEvents, Marker, Popup } from "react-leaflet";
import { ILocation } from "../../model/Interfaces";
import { useState } from "react";

interface ILocationMarkerProps {
  setPinLocation: (location: ILocation) => void;
}

export const LocationMarker = ({ setPinLocation }: ILocationMarkerProps) => {
  const [tempMarker, setTempMarker] = useState<ILocation | null>(null);
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinLocation({ lat, lng });
      setTempMarker({ lat, lng });
    },
  });

  return tempMarker ? (
    <Marker position={[tempMarker.lat, tempMarker.lng]}>
      <Popup>You clicked here</Popup>
    </Marker>
  ) : null;
};

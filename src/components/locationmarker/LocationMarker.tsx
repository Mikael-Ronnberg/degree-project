import { useMapEvents } from "react-leaflet";
import { ILocation } from "../../model/Interfaces";

interface ILocationMarkerProps {
  setPinLocation: (location: ILocation) => void;
}

export const LocationMarker = ({ setPinLocation }: ILocationMarkerProps) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinLocation({ lat, lng });
    },
  });

  return null;
};

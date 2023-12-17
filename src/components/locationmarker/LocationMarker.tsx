import { useMapEvents } from "react-leaflet";

interface ILocation {
  lat: number;
  lng: number;
}

interface LocationMarkerProps {
  setLocation: (location: ILocation) => void;
}

interface MapProps {
  markersData: ILocation[];
  setLocation: (location: ILocation) => void;
}

export const LocationMarker = ({ setLocation }: ILocation) => {
  const map = useMapEvents({
    click(e) {
      const { lat, long } = e.latlng;
      setLocation({ lat, lng });
    },
  });

  return null;
};

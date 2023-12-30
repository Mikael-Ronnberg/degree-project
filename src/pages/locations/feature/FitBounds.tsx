import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface FitBoundsProp {
  locations: [number, number][];
}

export const FitBounds = ({ locations }: FitBoundsProp) => {
  const map = useMap();

  useEffect(() => {
    if (locations && locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map((location) => [location[0], location[1]])
      );
      map.fitBounds(bounds);
    }
  }, [locations, map]);

  return null;
};

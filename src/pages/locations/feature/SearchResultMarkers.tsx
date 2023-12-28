import { Marker, Popup } from "react-leaflet";
import { SubLocation } from "../../../model/LocationsInterfaces";

interface SearchResultMarkersProps {
  locations: SubLocation[];
}

export const SearchResultMarkers = ({
  locations,
}: SearchResultMarkersProps) => {
  return (
    <>
      {locations.map((location: SubLocation) => (
        <Marker
          key={location.place_id}
          position={[parseFloat(location.lat), parseFloat(location.lon)]}
        >
          <Popup>{location.display_name}</Popup>
        </Marker>
      ))}
    </>
  );
};

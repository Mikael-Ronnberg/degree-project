import { Marker, Popup } from "react-leaflet";
import { LocationObj } from "../../../model/LocationsInterfaces";

interface SearchResultMarkersProps {
  locations: LocationObj[];
}

export const SearchResultMarkers = ({
  locations,
}: SearchResultMarkersProps) => {
  return (
    <>
      {locations.map((location: LocationObj) => (
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

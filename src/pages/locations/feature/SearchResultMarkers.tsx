import { Marker, Popup } from "react-leaflet";
import { ILocationObj } from "../model/Interfaces";

interface SearchResultMarkersProps {
  locations: ILocationObj[];
}

export const SearchResultMarkers = ({
  locations,
}: SearchResultMarkersProps) => {
  return (
    <>
      {locations.map((location: ILocationObj) => (
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

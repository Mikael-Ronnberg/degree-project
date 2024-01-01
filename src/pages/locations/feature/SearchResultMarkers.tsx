import { Marker, Popup } from "react-leaflet";
import "./../style/location.css";
import { SubLocation } from "../../../model/LocationsInterfaces";
import { icon } from "../../../components/icons/Pinpoint";

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
          icon={icon}
          position={[parseFloat(location.lat), parseFloat(location.lon)]}
        >
          <Popup className="popup-content-wrapper">
            {location.display_name}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

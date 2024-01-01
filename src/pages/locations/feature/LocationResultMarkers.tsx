import { Marker, Popup } from "react-leaflet";
import "./../style/location.css";
import { TransformedOurLocationResponse } from "../../../model/LocationsInterfaces";
import { icon } from "../../../components/icons/Pinpoint";

interface LocationResultMarkersProps {
  locations: TransformedOurLocationResponse[];
}

export const LocationResultMarkers = ({
  locations,
}: LocationResultMarkersProps) => {
  return (
    <>
      {locations.map((location: TransformedOurLocationResponse) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={icon}
        >
          <Popup className="popup-content-wrapper">
            {location.locationName}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

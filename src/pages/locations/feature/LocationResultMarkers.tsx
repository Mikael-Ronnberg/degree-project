import { Marker, Popup } from "react-leaflet";
import { TransformedOurLocationResponse } from "../../../model/LocationsInterfaces";

interface LocationResultMarkersProps {
  locations: TransformedOurLocationResponse[];
}

export const LocationResultMarkers = ({
  locations,
}: LocationResultMarkersProps) => {
  return (
    <>
      {locations.map((location: TransformedOurLocationResponse) => (
        <Marker key={location.id} position={[location.lat, location.lng]}>
          <Popup>{location.locationName}</Popup>
        </Marker>
      ))}
    </>
  );
};

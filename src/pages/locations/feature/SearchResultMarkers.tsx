import { Marker, Popup } from "react-leaflet";
import { SubLocation } from "../../../model/LocationsInterfaces";
import { yellowPin } from "../../../components/icons/Pinpoint";
import { Text } from "@chakra-ui/react";

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
          icon={yellowPin}
          position={[parseFloat(location.lat), parseFloat(location.lon)]}
        >
          <Popup>
            <Text maxW={{ base: "35vw" }} fontWeight="bolder">
              {location.display_name}
            </Text>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

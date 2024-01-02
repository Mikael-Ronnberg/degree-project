import { Marker, Popup } from "react-leaflet";
import "./../style/location.css";
import { TransformedOurLocationResponse } from "../../../model/LocationsInterfaces";
import { bluePin } from "../../../components/icons/Pinpoint";
import { HStack, Text, VStack } from "@chakra-ui/react";

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
          icon={bluePin}
        >
          <Popup className="popup-content-wrapper">
            <VStack spacing="0rem">
              <HStack spacing="1rem">
                <HStack>
                  <Text fontWeight="bold">Platsens namn:</Text>
                  <Text>{location.locationName}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="bold">datum:</Text>
                  <Text>{location.date}</Text>
                </HStack>
              </HStack>
              <HStack spacing="1rem">
                {location.plastic > 0 && (
                  <HStack>
                    <Text fontWeight="bold">Plast (kg):</Text>
                    <Text>{location.plastic}</Text>
                  </HStack>
                )}
                {location.metal > 0 && (
                  <HStack>
                    <Text fontWeight="bold">Metall (kg):</Text>
                    <Text>{location.metal}</Text>
                  </HStack>
                )}
              </HStack>
              <HStack spacing="1rem">
                {location.glass > 0 && (
                  <HStack>
                    <Text fontWeight="bold">Glas (kg):</Text>
                    <Text>{location.glass}</Text>
                  </HStack>
                )}
                {location.other > 0 && (
                  <HStack>
                    <Text fontWeight="bold">Övrigt (kg):</Text>
                    <Text>{location.other}</Text>
                  </HStack>
                )}
              </HStack>
              {location.animals > 0 && (
                <HStack>
                  <Text fontWeight="bold">Djur (st):</Text>
                  <Text>{location.animals}</Text>
                </HStack>
              )}
            </VStack>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

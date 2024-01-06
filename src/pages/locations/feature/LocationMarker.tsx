import { useMapEvents, Marker, Popup } from "react-leaflet";
import { useLocationStore } from "../../../store/useLocationsStore";
import { redPin } from "../../../components/icons/Pinpoint";
import { useEffect } from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

export const LocationMarker = () => {
  const { pinLocation, setPinLocation, setListLocations } = useLocationStore();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPinLocation({ lat, lng });
    },
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (map && !map.getContainer().contains(event.target as Node)) {
        setListLocations([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [map, setListLocations]);

  return pinLocation ? (
    <Marker position={[pinLocation.lat, pinLocation.lng]} icon={redPin}>
      <Popup>
        <VStack w="fit-content" h="fit-content" spacing={{ base: "0.1rem" }}>
          <Heading
            maxW={{ base: "20vw", md: "25vw" }}
            fontSize={{ base: "0.8rem", md: "1rem" }}
            textAlign="center"
          >
            Klick!
          </Heading>
          <Text maxW={{ base: "35vw" }} fontWeight="bolder">
            Du klickade här. Fyll i formuläret nedanför om du vill skicka ett
            tips till oss
          </Text>
        </VStack>
      </Popup>
    </Marker>
  ) : null;
};

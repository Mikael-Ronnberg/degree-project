import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  formContainerStyles,
  locationPageStyles,
  mapHeadingStyles,
} from "./style/locationStyle";
import { LocationsForm } from "./feature/LocationsForm";
import { MapContainer } from "./feature/MapContainer";
import { useLocationStore } from "../../store/useLocationsStore";

export const Locations = () => {
  const { formSubmitted } = useLocationStore();
  return (
    <>
      <Flex {...locationPageStyles}>
        <Heading {...mapHeadingStyles}>
          Tipsa om en plats! Eller se vart vi snorklat
        </Heading>
        <MapContainer />

        <Flex {...formContainerStyles}>
          <VStack>
            {formSubmitted ? (
              <Heading>
                Tack för ditt bidrag! Vi kollar på det så fort vi kan :D
              </Heading>
            ) : (
              <LocationsForm />
            )}
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

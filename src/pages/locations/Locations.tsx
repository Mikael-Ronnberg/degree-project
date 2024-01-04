import { Flex, Text, Box, Heading, VStack } from "@chakra-ui/react";
import {
  formContainerStyles,
  locationPageStyles,
  mapHeadingBoxStyles,
  mapHeadingStyles,
  mapHeadingTextStyles,
} from "./style/locationStyle";
import { LocationsForm } from "./feature/LocationsForm";
import { MapContainer } from "./feature/MapContainer";
import { useLocationStore } from "../../store/useLocationsStore";

export const Locations = () => {
  const { formSubmitted } = useLocationStore();
  return (
    <>
      <Flex {...locationPageStyles}>
        <Box {...mapHeadingBoxStyles}>
          <Heading {...mapHeadingStyles}>
            Tipsa om en plats eller se vart vi snorklat
          </Heading>
          <Text {...mapHeadingTextStyles}>
            Vi går igenom alla tips vi får, och har du tur kanske vi skriver om
            platsen ni tipsar om
          </Text>
        </Box>
        <MapContainer />

        <VStack
          spacing="0"
          w={{ base: "95vw", md: "100vw", xl: "1281px" }}
          overflow="hidden"
        >
          <Box
            background="url(/svg/waves/greenWaves.svg)"
            h="55px"
            w={{ base: "95vw", md: "100vw", xl: "1280px" }}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="bottom"
            position="relative"
            top="2"
          />
          <Flex {...formContainerStyles}>
            {formSubmitted ? (
              <Heading>
                Tack för ditt bidrag! Vi kollar på det så fort vi kan
              </Heading>
            ) : (
              <LocationsForm />
            )}
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

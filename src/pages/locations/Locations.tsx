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
import { SmallWave } from "../../components/waves/SmallWave";

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
          w={{ base: "95vw", md: "100vw", xl: "1280px" }}
          overflow="hidden"
          border="2px solid black"
          borderTop="none"
        >
          <Box
            h="auto"
            w={{ base: "100vw", xl: "1282px" }}
            position="relative"
            top="3px"
          >
            <SmallWave color="#01D589" />
          </Box>
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

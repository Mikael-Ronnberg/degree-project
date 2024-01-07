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

        <Box
          h={{ base: "30px", md: "50px" }}
          w={{ base: "95vw", md: "100vw", xl: "1280px" }}
          position="relative"
          top={{ base: "2px", md: "3px" }}
          backgroundImage="url(/svg/curves/greenWaveCurve.svg
          )"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPosition="bottom"
        />
        <VStack
          spacing="0"
          w={{ base: "95vw", md: "100vw", xl: "1280px" }}
          overflow="hidden"
          border={{ base: "1px solid black", lg: "2px solid black" }}
        >
          <Flex {...formContainerStyles}>
            {formSubmitted ? (
              <>
                <Flex
                  w={{ base: "95vw", md: "100vw", xl: "1280px" }}
                  minH="40vh"
                  align="center"
                  justify="center"
                  background="brand.green"
                >
                  <Heading textAlign="center" px="2rem">
                    Tack för ditt bidrag! Vi kollar på det så fort vi kan
                  </Heading>
                </Flex>
              </>
            ) : (
              <LocationsForm />
            )}
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

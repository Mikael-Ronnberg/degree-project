import { Box, Flex, Heading } from "@chakra-ui/react";
import { LeafletMap } from "./feature/LeafletMap";
import { SearchInput } from "./feature/SearchInput";
import {
  formContainerStyles,
  mapBoxStyles,
  mapContainerStyles,
  pageContainerStyles,
} from "./style/styleLocations";
import { LocationsForm } from "./feature/LocationsForm";
import { useLocationStore } from "../../store/useLocationsStore";

export const Locations = () => {
  const { formSubmitted } = useLocationStore();

  return (
    <>
      <Flex {...pageContainerStyles}>
        <Flex {...mapContainerStyles}>
          <Heading>Tipsa om en plats! Eller se vart vi snorklat</Heading>
          <Box {...mapBoxStyles}>
            <LeafletMap />
          </Box>
          <Box>
            <SearchInput />
          </Box>
        </Flex>

        <Flex {...formContainerStyles}>
          {formSubmitted ? (
            <Box>
              <Heading>
                Tack för ditt bidrag! Vi kollar på det så fort vi kan :D
              </Heading>
            </Box>
          ) : (
            <LocationsForm />
          )}
        </Flex>
      </Flex>
    </>
  );
};

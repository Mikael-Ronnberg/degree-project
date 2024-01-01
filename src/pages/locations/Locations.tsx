import { Box, Flex, Heading } from "@chakra-ui/react";
import { LeafletMap } from "./feature/LeafletMap";
import { SearchInput } from "./feature/SearchInput";
import {
  formContainerStyles,
  locationPageStyles,
  mapBoxStyles,
  mapContainerStyles,
  mapHeadingStyles,
} from "./style/locationStyle";
import { LocationsForm } from "./feature/LocationsForm";
import { useLocationStore } from "../../store/useLocationsStore";

export const Locations = () => {
  const { formSubmitted } = useLocationStore();

  return (
    <>
      <Flex {...locationPageStyles}>
        <Flex {...mapContainerStyles}>
          <Heading {...mapHeadingStyles}>
            Tipsa om en plats! Eller se vart vi snorklat
          </Heading>

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

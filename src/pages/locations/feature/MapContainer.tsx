import { Flex, Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import {
  mapContainerStyles,
  mapBoxStyles,
  mapContainerGridStyles,
  mapSearchGridItemSyles,
} from "../style/locationStyle";
import { LeafletMap } from "./LeafletMap";
import { LocationCheckbox } from "./LocationCheckbox";
import { SearchInput } from "./SearchInput";

export const MapContainer = () => {
  return (
    <>
      <Flex {...mapContainerStyles}>
        <Grid {...mapContainerGridStyles}>
          <GridItem>
            <Box {...mapBoxStyles}>
              <LeafletMap />
            </Box>
          </GridItem>
          <GridItem {...mapSearchGridItemSyles}>
            <LocationCheckbox />
            <Heading textAlign="center" fontSize="1rem">
              Skriv in en address för att lättare hitta en plats
            </Heading>
            <SearchInput />
          </GridItem>
        </Grid>
        <Box
          background="url(/svg/waves/pinkWaves.svg)"
          h="56px"
          w={{ base: "95vw", md: "100vw", xl: "1280px" }}
          mx="20ren"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="top"
          position="relative"
          bottom="2"
        ></Box>
      </Flex>
    </>
  );
};

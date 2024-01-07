import { Flex, Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import {
  mapContainerStyles,
  mapContainerGridStyles,
  mapSearchGridItemSyles,
  mapItemStyles,
} from "../style/locationStyle";
import { LeafletMap } from "./LeafletMap";
import { LocationCheckbox } from "./LocationCheckbox";
import { SearchInput } from "./SearchInput";

export const MapContainer = () => {
  return (
    <>
      <Flex {...mapContainerStyles}>
        <Grid {...mapContainerGridStyles}>
          <GridItem {...mapItemStyles}>
            <LeafletMap />
          </GridItem>
          <GridItem {...mapSearchGridItemSyles}>
            <LocationCheckbox />
            <Heading textAlign="center" fontSize="1rem">
              Skriv in en address för att lättare hitta en plats
            </Heading>
            <SearchInput />
          </GridItem>
        </Grid>
      </Flex>
      <Box
        h={{ base: "30px", md: "50px" }}
        w={{ base: "95vw", md: "100vw", xl: "1280px" }}
        position="relative"
        bottom={{ base: "3px", md: "4px" }}
        backgroundImage="url(/svg/curves/pinkWaveCurve.svg
          )"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="top"
      ></Box>
    </>
  );
};

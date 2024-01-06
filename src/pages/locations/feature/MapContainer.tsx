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
import { SmallWave } from "../../../components/waves/SmallWave";

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
        <Box
          h="auto"
          w={{ base: "100vw", xl: "1280px" }}
          position="relative"
          top="-3px"
          transform="rotate(180deg)"
        >
          <SmallWave color="#F8DBDF" />
        </Box>
      </Flex>
    </>
  );
};

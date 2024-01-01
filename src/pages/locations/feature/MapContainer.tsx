import { Flex, VStack, Box } from "@chakra-ui/react";
import {
  mapContainerStyles,
  mapContainerStackStyles,
  mapBoxStyles,
} from "../style/locationStyle";
import { LeafletMap } from "./LeafletMap";
import { LocationCheckbox } from "./LocationCheckbox";
import { SearchInput } from "./SearchInput";
import { Waves } from "../../../components/waves/Waves";

export const MapContainer = () => {
  return (
    <>
      <Flex {...mapContainerStyles}>
        <VStack {...mapContainerStackStyles}>
          <LocationCheckbox />
          <Box {...mapBoxStyles}>
            <LeafletMap />
          </Box>
          <SearchInput />
        </VStack>
        <Box transform="rotate(180deg)">
          <Waves color="#F8DBDF" />
        </Box>
      </Flex>
    </>
  );
};

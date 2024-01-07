import { Flex, Heading, Box } from "@chakra-ui/react";
import {
  ourMapBoxStyles,
  ourMapContainerStyles,
} from "../../admin/style/styleAdmin";
import { LeafletMap } from "../../locations/feature/LeafletMap";
import { SearchInput } from "../../locations/feature/SearchInput";

export const OurMap = () => {
  return (
    <>
      <Flex {...ourMapContainerStyles}>
        <Heading m="3rem">Lägg in vår senaste snorkling</Heading>

        <Box {...ourMapBoxStyles}>
          <LeafletMap />
        </Box>
        <Box>
          <SearchInput />
        </Box>
      </Flex>
    </>
  );
};

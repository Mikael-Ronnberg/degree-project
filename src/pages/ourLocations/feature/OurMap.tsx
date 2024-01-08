import { Flex, Heading, Box } from "@chakra-ui/react";
import {
  adminHeadingStyles,
  formFlexStyles,
  ourMapBoxStyles,
} from "../../admin/style/styleAdmin";
import { LeafletMap } from "../../locations/feature/LeafletMap";
import { SearchInput } from "../../locations/feature/SearchInput";

export const OurMap = () => {
  return (
    <>
      <Flex {...formFlexStyles}>
        <Heading {...adminHeadingStyles}>Lägg in vår senaste snorkling</Heading>

        <Box {...ourMapBoxStyles}>
          <LeafletMap />
        </Box>
        <Box>
          <SearchInput dropColor="#FFFFF" />
        </Box>
      </Flex>
    </>
  );
};

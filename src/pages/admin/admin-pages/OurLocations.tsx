import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  adminPageStyles,
  ourFormContainerStyles,
  ourMapBoxStyles,
  ourMapContainerStyles,
} from "../style/styleAdmin";
import { LeafletMap } from "../../locations/feature/LeafletMap";
import { SearchInput } from "../../locations/feature/SearchInput";
import { OurLocationForm } from "../feature/OurLocationForm";
import { Navbar } from "../../../components/navbar/NavBar";
import { adminNavItems } from "../../../helpers/helpers";

export const OurLocations = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <Flex {...ourMapContainerStyles}>
          <Heading>Lägg in vår senaste snorkling</Heading>
          <Box {...ourMapBoxStyles}>
            <LeafletMap />
          </Box>
          <Box>
            <SearchInput />
          </Box>
        </Flex>
        <Flex {...ourFormContainerStyles}>
          <OurLocationForm />
        </Flex>
      </Flex>
    </>
  );
};

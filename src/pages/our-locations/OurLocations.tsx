import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";
import { CreateModal } from "../admin/feature/CreateModal";

export const OurLocations = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <VStack spacing="10rem">
            <Heading>Lägg in vår senaste snorkling</Heading>

            <CreateModal
              modalHeader="Mata In Data Och Plats"
              buttonLabel="Lägg Till Plats"
              mode="location"
            />
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

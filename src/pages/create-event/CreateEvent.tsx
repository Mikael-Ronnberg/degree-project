import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";
import { CreateModal } from "../admin/feature/CreateModal";

export const CreateEvent = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <VStack spacing="10rem">
            <Heading>Skapa en ny händelse</Heading>

            <CreateModal
              modalHeader="Skapa en ny händelse"
              buttonLabel="Skapa Händelse"
              mode="event"
            />
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

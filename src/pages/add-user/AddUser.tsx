import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";
import { CreateModal } from "../admin/feature/CreateModal";

export const AddUser = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <VStack spacing="10rem">
            <Heading>Skapa en ny användare</Heading>

            <CreateModal
              modalHeader="Lägg till Ny Användare"
              buttonLabel="Skapa Ny Användare"
              mode="user"
            />
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

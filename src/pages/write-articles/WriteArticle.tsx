import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";
import { CreateModal } from "../admin/feature/CreateModal";

export const WriteArticle = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} navType={"admin"} />
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <VStack spacing="10rem">
            <Heading>Skriv en Artikel</Heading>

            <CreateModal
              modalHeader="Skriv en Artikel"
              buttonLabel="Börja Skriva"
              mode="article"
            />
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

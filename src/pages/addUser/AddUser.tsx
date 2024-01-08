import { Flex, Heading } from "@chakra-ui/react";
import {
  adminHeadingStyles,
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";

export const AddUser = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading {...adminHeadingStyles}>Skapa en ny användare</Heading>

          <CreateModal
            modalHeader="Lägg till Ny Användare"
            buttonLabel="Skapa Ny Användare"
            mode="user"
          />
        </Flex>
      </Flex>
    </>
  );
};

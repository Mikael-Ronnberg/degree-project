import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";

export const WriteArticle = () => {
  return (
    <>
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

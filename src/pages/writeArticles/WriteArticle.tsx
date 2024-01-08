import { Flex, Heading, VStack, Button } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";
import { Link } from "react-router-dom";
import { greyButtonStyles } from "../../components/buttons/style/buttonStyles";

export const WriteArticle = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading>Artiklar</Heading>
          <VStack spacing="2.5rem">
            <CreateModal
              modalHeader="Skriv en Artikel"
              buttonLabel="Börja Skriva"
              mode="article"
            />
            <Button {...greyButtonStyles}>
              <Link to="/ourArticles">Våra Artiklar</Link>
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

import { Flex, Heading, HStack, Button } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";
import { Link } from "react-router-dom";

export const WriteArticle = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading>Artiklar</Heading>
          <HStack spacing="10rem">
            <CreateModal
              modalHeader="Skriv en Artikel"
              buttonLabel="Börja Skriva"
              mode="article"
            />
            <Button>
              <Link to="/ourArticles">Våra Händelser</Link>
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

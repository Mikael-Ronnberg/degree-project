import { Flex, Heading, HStack, Button } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";
import { Link } from "react-router-dom";

export const CreateEvent = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading>Händelser</Heading>

          <HStack spacing="10rem">
            <CreateModal
              modalHeader="Skapa en ny händelse"
              buttonLabel="Skapa Händelse"
              mode="event"
            />
            <Button>
              <Link to="/ourEvents">Våra Händelser</Link>
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

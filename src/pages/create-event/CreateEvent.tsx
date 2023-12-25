import { Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";

export const CreateEvent = () => {
  return (
    <>
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

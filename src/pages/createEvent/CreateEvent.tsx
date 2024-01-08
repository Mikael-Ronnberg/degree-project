import { Flex, Heading, VStack, Button } from "@chakra-ui/react";
import {
  adminHeadingStyles,
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";
import { Link } from "react-router-dom";
import { greyButtonStyles } from "../../components/buttons/style/buttonStyles";

export const CreateEvent = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading {...adminHeadingStyles}>Händelser</Heading>

          <VStack spacing="2.5rem">
            <CreateModal
              modalHeader="Skapa en ny händelse"
              buttonLabel="Skapa Händelse"
              mode="event"
            />
            <Button {...greyButtonStyles}>
              <Link to="/ourEvents">Våra Händelser</Link>
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

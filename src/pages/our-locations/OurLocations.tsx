import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminPageStyles,
  createContainerStyles,
  createHeadingStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";
import { Link } from "react-router-dom";

export const OurLocations = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading {...createHeadingStyles}>Platser</Heading>
          <VStack spacing="2rem">
            <CreateModal
              modalHeader="Mata In Data Och Plats"
              buttonLabel="Lägg Till Besökt Plats"
              mode="location"
            />
            <Button>
              <Link to="/handleOurLocations">Hantera Besökta Platser</Link>
            </Button>
            <Button>
              <Link to="/subLocations">Hantera Tipsade Platser</Link>
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

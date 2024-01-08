import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import {
  adminHeadingStyles,
  adminPageStyles,
  createContainerStyles,
} from "../admin/style/styleAdmin";
import { CreateModal } from "../admin/feature/CreateModal";
import { Link } from "react-router-dom";
import { greyButtonStyles } from "../../components/buttons/style/buttonStyles";

export const OurLocations = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Flex {...createContainerStyles}>
          <Heading {...adminHeadingStyles}>Platser</Heading>
          <VStack spacing="2.5rem">
            <CreateModal
              modalHeader="Mata In Data Och Plats"
              buttonLabel="Lägg Till Besökt Plats"
              mode="location"
            />
            <Button {...greyButtonStyles}>
              <Link to="/handleOurLocations">Hantera Besökta Platser</Link>
            </Button>
            <Button {...greyButtonStyles}>
              <Link to="/subLocations">Hantera Tipsade Platser</Link>
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

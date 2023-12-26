import { Flex, Heading } from "@chakra-ui/react";
import { Litter } from "./Litter";
import { litterContainerStyles } from "../style/styleHome";

export const LitterContainer = () => {
  return (
    <>
      <Flex {...litterContainerStyles}>
        <Heading color="white" textAlign="center">
          Vanligaste Skräpet Vi Hittar
        </Heading>
        <Litter />
      </Flex>
    </>
  );
};

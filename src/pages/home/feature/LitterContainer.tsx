import { Flex, Heading, Box } from "@chakra-ui/react";
import { Litter } from "./Litter";
import { litterContainerStyles, litterHeadingStyles } from "../style/styleHome";
import { SmallWave } from "../../../components/waves/SmallWave";

export const LitterContainer = () => {
  return (
    <>
      <Flex {...litterContainerStyles}>
        <Heading {...litterHeadingStyles}>
          Vanligaste Saker Vi Hittar och Plockar Upp
        </Heading>
        <Litter />
        <Box position="relative" bottom="-2px">
          <SmallWave color="#e3b059" />
        </Box>
      </Flex>
    </>
  );
};

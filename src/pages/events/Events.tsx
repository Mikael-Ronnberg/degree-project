import { Flex, Box, Heading } from "@chakra-ui/react";
import {
  eventHeadingBox,
  eventHeadingStyles,
  eventPageStyles,
} from "./style/eventStyle";

export const Events = () => {
  return (
    <>
      <Flex {...eventPageStyles}>
        <Box {...eventHeadingBox}>
          <Heading {...eventHeadingStyles}>Kommande Händelser</Heading>
        </Box>
      </Flex>
    </>
  );
};

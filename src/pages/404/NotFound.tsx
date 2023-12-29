import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import {
  notFoundContainerStyles,
  notFoundHeadingStyles,
  notFoundPageStyles,
  notFoundTextStyles,
} from "./notfoundStyle";

export const NotFound = () => {
  return (
    <>
      <Flex {...notFoundPageStyles}>
        <Flex {...notFoundContainerStyles}>
          <Heading {...notFoundHeadingStyles}>Åh nej..</Heading>
          <VStack spacing="4rem">
            <Text {...notFoundTextStyles}>Sidan du söker finns i sjön!</Text>
            <Text {...notFoundTextStyles}>
              Du kan prova att komma tillbaka vid ett senare tillfälle!
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

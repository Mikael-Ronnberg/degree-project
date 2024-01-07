import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import {
  notFoundContainerStyles,
  notFoundHeadingStyles,
  notFoundPageStyles,
  notFoundTextStyles,
} from "./notfoundStyle";
import { SmallWave } from "../../components/waves/SmallWave";

export const NotFound = () => {
  return (
    <>
      <Flex {...notFoundPageStyles}>
        <Flex {...notFoundContainerStyles}>
          <Heading {...notFoundHeadingStyles}>Åh nej...</Heading>
          <VStack
            spacing="0"
            w={{ base: "100vw", md: "95vw", xl: "1280px" }}
            overflow="hidden"
            borderRight="2px solid black"
            borderLeft="2px solid black"
            h="stretch"
          >
            <Box position="relative" top="2px">
              <SmallWave color="#1E42D4" />
            </Box>
            <VStack
              spacing="4rem"
              pt="2rem"
              background="brand.blue"
              w="inherit"
              minH="40vh"
            >
              <Text {...notFoundTextStyles}>Sidan du söker finns i sjön!</Text>
              <Text {...notFoundTextStyles}>
                Du kan prova att komma tillbaka vid ett senare tillfälle
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

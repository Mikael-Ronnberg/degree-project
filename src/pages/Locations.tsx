import { Box, Flex, Heading } from "@chakra-ui/react";

export const Locations = () => {
  return (
    <>
      <h2>Location</h2>
      <Flex w="100vw" h="100vh" justify="center" align="center">
        <Flex
          justify="center"
          align="center"
          w="90vw"
          h="80vh"
          border="black 2px solid"
        >
          <Box></Box>
          <Heading>Set a Location</Heading>
        </Flex>
      </Flex>
    </>
  );
};

import { VStack, Heading, HStack, Box, Text } from "@chakra-ui/react";
import { Facebook } from "../../../components/icons/Facebook";
import { Instagram } from "../../../components/icons/Instagram";
import { Youtube } from "../../../components/icons/Youtube";
import { SmallWave } from "../../../components/waves/SmallWave";

export const Footer = () => {
  return (
    <>
      <VStack spacing="0" pt="2rem">
        <SmallWave color="#EAA83A" />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          bg="brand.yellow"
          gap="2rem"
          py="2rem"
          h="auto"
          w={{ base: "100vw", xl: "1280px" }}
          border="2px solid black"
          borderTop="none"
          position="relative"
          top="-3px"
        >
          <Heading px="1rem">Håll dig uppdaterad</Heading>
          <Text>Följ oss på sociala medier</Text>
          <HStack spacing="4rem">
            <Facebook />
            <Instagram />
            <Youtube />
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

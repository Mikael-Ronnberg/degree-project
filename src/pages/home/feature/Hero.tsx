import { Flex } from "@chakra-ui/react";
import { BigLogo } from "../../../components/icons/BigLogo";

export const Hero = () => {
  return (
    <>
      <Flex w="100vw" h="50vh" justify="center" align="center">
        <BigLogo />
      </Flex>
    </>
  );
};

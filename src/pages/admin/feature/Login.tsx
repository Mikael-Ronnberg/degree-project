import { Flex } from "@chakra-ui/react";
import { Auth } from "./Auth";

export const Login = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        w="100vw"
        h="100vh"
        background="grey"
      >
        <Auth></Auth>
      </Flex>
    </>
  );
};

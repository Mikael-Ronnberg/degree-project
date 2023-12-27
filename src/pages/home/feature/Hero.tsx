import { Flex } from "@chakra-ui/react";
import { BigLogo } from "../../../components/icons/BigLogo";
import { heroContainerStyles } from "../style/styleHome";

export const Hero = () => {
  return (
    <>
      <Flex {...heroContainerStyles}>
        <BigLogo />
      </Flex>
    </>
  );
};

import { Box } from "@chakra-ui/react";
import { BigLogo } from "../../../components/icons/BigLogo";
import { heroContainerStyles } from "../style/styleHome";

export const Hero = () => {
  return (
    <>
      <Box {...heroContainerStyles}>
        <Box
          pt={{ base: "6.5rem", md: "5rem", lg: "0rem" }}
          pl={{ base: "1.3rem" }}
        >
          <BigLogo />
        </Box>
      </Box>
    </>
  );
};

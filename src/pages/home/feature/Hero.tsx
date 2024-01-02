import { Box } from "@chakra-ui/react";
import { BigLogo } from "../../../components/icons/BigLogo";
import { heroContainerStyles } from "../style/styleHome";

export const Hero = () => {
  return (
    <>
      <Box {...heroContainerStyles}>
        <BigLogo />
      </Box>
    </>
  );
};

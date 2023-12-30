import { Box } from "@chakra-ui/react";
import { BigLogo } from "../../../components/icons/BigLogo";
import {
  heroBgBoxStyles,
  heroContainerStyles,
  heroIconBoxStyles,
} from "../style/styleHome";
import { Background } from "./Background";

export const Hero = () => {
  return (
    <>
      <Box {...heroContainerStyles}>
        <Box
          {...heroBgBoxStyles}
          viewBox="0 0 2061 801"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Background />
        </Box>
        <Box
          {...heroIconBoxStyles}
          viewBox="0 0 351 154"
          boxSize={{ base: "30rem", md: "35rem", lg: "45rem" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <BigLogo />
        </Box>
      </Box>
    </>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { homePageStyles, sandWaveBoxStyles } from "./style/styleHome";

import { SandWave } from "../../components/waves/SandWave";
import "./style/style.css";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <IntroContainer />
        <LitterContainer />
        <Box {...sandWaveBoxStyles}>
          <SandWave />
        </Box>
      </Flex>
    </>
  );
};

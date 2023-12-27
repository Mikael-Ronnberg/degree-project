import { Box, Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import {
  blueWaveBoxStyles,
  homePageStyles,
  sandWaveBoxStyles,
} from "./style/styleHome";
import { BlueWave } from "../../components/waves/BlueWave";
import { SandWave } from "../../components/waves/SandWave";
import "./style/style.css";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <Box {...blueWaveBoxStyles}>
          <BlueWave />
        </Box>
        <IntroContainer />
        <LitterContainer />
      </Flex>
      <Box {...sandWaveBoxStyles}>
        <SandWave />
      </Box>
    </>
  );
};

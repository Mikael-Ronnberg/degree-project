import { Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { blueWaveBoxStyles, homePageStyles } from "./style/styleHome";
import { BlueWave } from "../../components/waves/BlueWave";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <Flex {...blueWaveBoxStyles}>
          <BlueWave />
        </Flex>
        <IntroContainer />
        <LitterContainer />
      </Flex>
    </>
  );
};

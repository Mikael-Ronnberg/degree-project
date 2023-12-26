import { Box, Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { homePageStyles } from "./style/styleHome";
import { BlueWave } from "../../components/waves/BlueWave";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <Box w="90vw" overflow="hidden">
          <BlueWave />
        </Box>
        <IntroContainer />
        <LitterContainer />
      </Flex>
    </>
  );
};

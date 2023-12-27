import { Flex } from "@chakra-ui/react";
import { aboutPageStyles } from "./style/aboutStyle";
import { SnorkelContainer } from "./feature/SnorkelContainer";
import { BlueContainer } from "./feature/BlueContainer";
import { InfoContainer } from "./feature/InfoContainer";
import { IntroContainer } from "./feature/IntroContainer";

export const About = () => {
  return (
    <>
      <Flex {...aboutPageStyles}>
        <IntroContainer />
        <SnorkelContainer />
        <InfoContainer />
        <BlueContainer />
      </Flex>
    </>
  );
};

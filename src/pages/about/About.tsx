import { Flex, VStack } from "@chakra-ui/react";
import { aboutPageStyles } from "./style/aboutStyle";
import { SnorkelContainer } from "./feature/SnorkelContainer";
import { BlueContainer } from "./feature/BlueContainer";
import { InfoContainer } from "./feature/InfoContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { GoalContainer } from "./feature/GoalContainer";

export const About = () => {
  return (
    <>
      <Flex {...aboutPageStyles}>
        <VStack spacing="10">
          <VStack spacing="0">
            <IntroContainer />
            <SnorkelContainer />
          </VStack>

          <VStack>
            <GoalContainer />
          </VStack>

          <VStack overflow="hidden" outline="2px solid black">
            <InfoContainer />
            <BlueContainer />
          </VStack>
        </VStack>
      </Flex>
    </>
  );
};

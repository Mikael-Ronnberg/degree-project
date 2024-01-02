import { Flex, VStack } from "@chakra-ui/react";
import { aboutPageStyles } from "./style/aboutStyle";
import { SnorkelContainer } from "./feature/SnorkelContainer";
import { BlueContainer } from "./feature/BlueContainer";
import { InfoContainer } from "./feature/InfoContainer";
import { IntroContainer } from "./feature/IntroContainer";

export const About = () => {
  return (
    <>
      <Flex {...aboutPageStyles}>
        <VStack spacing="10">
          <VStack spacing="0">
            <IntroContainer />
            <SnorkelContainer />
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

//// Om Oss
// Vår Historia och Vision
// Svepa Botten grundades [år] av en grupp miljöentusiaster och dykare som såg behovet av att agera mot nedskräpningen i svenska vatten. Vår vision är klara, levande vatten där ekosystemen frodas och den biologiska mångfalden skyddas. Vi tror att genom gemensamma insatser kan vi göra en varaktig skillnad.

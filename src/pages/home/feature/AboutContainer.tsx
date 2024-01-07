import { VStack, Text, Box, Flex, Image } from "@chakra-ui/react";
import {
  aboutContainerStackStyles,
  aboutFlexContainerStyles,
  aboutPinkCurveStyles,
  aboutTextStyles,
} from "../style/styleHome";

export const AboutContainer = () => {
  return (
    <>
      <Box {...aboutPinkCurveStyles} />
      <Flex
        direction={{ base: "column", lg: "row" }}
        {...aboutFlexContainerStyles}
        justify="center"
        align="center"
      >
        <Image
          // display={{ base: "none", lg: "inline" }}
          pl={{ base: "0rem", lg: "2rem" }}
          src="/svg/sunrise.svg"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          h={{ base: "14vh", md: "30vh", lg: "auto" }}
          w={{ base: "40vw", md: "40vw", lg: "auto" }}
        ></Image>
        <VStack {...aboutContainerStackStyles}>
          <Text {...aboutTextStyles}>
            Varje sommarmånad organiserar vi snorklingsevent där våra medlemmar
            samlar skräp från botten i sjöar och hav.
          </Text>
          <Text {...aboutTextStyles}>
            Allt från övergivna fiskeredskap till bortkastade dryckesflaskor
            plockas upp och sorteras för återvinning.
          </Text>
          <Text {...aboutTextStyles}>
            Vi dokumenterar och rapporterar även invasiva arter till
            artportalen, vilket är avgörande för att inventera våra marina
            ekosystem.
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

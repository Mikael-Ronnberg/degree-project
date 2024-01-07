import { VStack, Text, Box, Flex, Image } from "@chakra-ui/react";
import {
  aboutFlexContainerStyles,
  aboutImageStyles,
  aboutPinkCurveStyles,
  aboutTextStyles,
} from "../style/styleHome";

export const AboutContainer = () => {
  return (
    <>
      <Box {...aboutPinkCurveStyles} />
      <Flex {...aboutFlexContainerStyles}>
        <Image {...aboutImageStyles} />
        <VStack spacing="0">
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

import { VStack, Text, Box, Heading } from "@chakra-ui/react";
import {
  aboutContainerStackStyles,
  aboutPinkCurveStyles,
  introTextStyles,
} from "../style/styleHome";
import { GreyButton } from "../../../components/buttons/GreyButton";

export const AboutContainer = () => {
  return (
    <>
      <Box {...aboutPinkCurveStyles} />
      <VStack {...aboutContainerStackStyles}>
        <Text
          {...introTextStyles}
          maxW={{ base: "95vw", md: "80vw", lg: "1000px" }}
        >
          Varje sommarmånad organiserar vi snorklingsevent där våra medlemmar
          samlar skräp från botten i sjöar och hav. Allt från övergivna
          fiskeredskap till bortkastade dryckesflaskor plockas upp och sorteras
          för återvinning. Vi dokumenterar och rapporterar även invasiva arter
          till relevanta myndigheter, vilket är avgörande för att skydda våra
          marina ekosystem.
        </Text>
        <Heading color="brand.purple" textAlign="center">
          Kika in våra kommande händelser
        </Heading>
        <GreyButton
          linkTo="/events"
          buttonText="Kommande Händelser"
        ></GreyButton>
      </VStack>
    </>
  );
};
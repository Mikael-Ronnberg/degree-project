import { VStack, Text, Flex, Heading } from "@chakra-ui/react";
import { GreyButton } from "../../../components/buttons/GreyButton";
import {
  joinContainerStackStyles,
  joinTextFlexStyles,
  joinTextStyles,
} from "../style/styleHome";

export const JoinContainer = () => {
  return (
    <>
      <VStack {...joinContainerStackStyles}>
        <Flex {...joinTextFlexStyles}>
          <Heading pt="1.5rem" px="2rem">
            Vill du göra en skillnad för den svenska undervattensmiljön?{" "}
          </Heading>
          <Text {...joinTextStyles}>
            Bli medlem i Svepa Botten! Som medlem får du delta i våra
            snorklingsevent, få utbildning om marina ekosystem och bidra till
            viktiga miljöinsatser. Ingen tidigare erfarenhet av snorkling krävs
            - bara en passion för miljön!
          </Text>
          <GreyButton buttonText="Kontakta oss" linkTo="/contact" />
        </Flex>
      </VStack>
    </>
  );
};

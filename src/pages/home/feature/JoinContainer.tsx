import { VStack, Text, Flex } from "@chakra-ui/react";
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
        <Flex {...joinTextFlexStyles} pb="1rem">
          <Text {...joinTextStyles}>
            Vill du göra en skillnad för den svenska undervattensmiljön? Bli
            medlem i Svepa Botten! Som medlem får du delta i våra
            snorklingsevent, få utbildning om marina ekosystem och bidra till
            viktiga miljöinsatser. Ingen tidigare erfarenhet av snorkling krävs
            - bara en passion för miljön!
          </Text>
          <Text {...joinTextStyles}>
            Har du frågor, vill samarbeta eller stödja vår verksamhet? Kontakta
            oss eller följ oss på sociala medier för senaste nyheterna och
            eventinformation.
          </Text>
          <GreyButton buttonText="Kontakta oss" linkTo="/contact" />
        </Flex>
      </VStack>
    </>
  );
};

import { Flex, Text } from "@chakra-ui/react";
import { GreyButton } from "../../../components/buttons/GreyButton";
import {
  introContainerStyle,
  introWhiteBoxStyles,
  introWhiteTextStyles,
} from "../style/styleHome";

export const IntroContainer = () => {
  return (
    <>
      <Flex {...introContainerStyle}>
        <Flex {...introWhiteBoxStyles}>
          <Text {...introWhiteTextStyles}>
            Med snorkel rensar vi våra vatten från skräp och skyddar havslivet.
            Ingen erfarenhet behövs, bara passion för naturen.
          </Text>
        </Flex>
        <GreyButton buttonText="Gå Med Du Också!" linkTo="/contact" />
      </Flex>
    </>
  );
};

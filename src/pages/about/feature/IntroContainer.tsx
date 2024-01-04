import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import {
  introGridStyles,
  introItemStyles,
  introHeadingStyles,
  introTextStyles,
} from "../style/aboutStyle";

export const IntroContainer = () => {
  return (
    <>
      <Grid {...introGridStyles}>
        <GridItem {...introItemStyles}>
          <Heading {...introHeadingStyles}>Hur Allt Började</Heading>
        </GridItem>
        <GridItem {...introItemStyles}>
          <Text background="brand.green" {...introTextStyles}>
            Svepa Botten började som en idé bland en grupp miljömedvetna dykare
            och snorklare som ville göra en konkret skillnad för Sveriges unika
            undervattensmiljöer. Grundat 2024, har vår organisation en liten
            grupp entusiaster med en stark gemenskap av medlemmar som delar vår
            passion för att skydda och bevara våra vatten.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

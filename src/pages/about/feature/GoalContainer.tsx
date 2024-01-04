import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import {
  goalGridStyles,
  introItemStyles,
  introTextStyles,
} from "../style/aboutStyle";

export const GoalContainer = () => {
  return (
    <>
      <Flex>
        <Grid {...goalGridStyles}>
          <GridItem {...introItemStyles}>
            <Text background="brand.pink" {...introTextStyles}>
              Vårt team består av individer från olika bakgrunder men med en
              gemensam nämnare: en stark vilja att göra en skillnad. Vår styrka
              ligger i vårt engagemang, samarbete och önskan att lära ut och
              sprida kunskap. Vi tror starkt på kraften i gemensamma insatser
              och det positiva inflytande som kunskap och medvetenhet kan ha på
              miljöskydd.
            </Text>
          </GridItem>
          <GridItem {...introItemStyles}>
            <Text background="brand.pink" {...introTextStyles}>
              Vi ser fram emot att fortsätta växa och utöka vår påverkan. Våra
              framtida mål inkluderar att utöka våra rensningsaktiviteter till
              nya områden, utveckla våra utbildningsprogram och bygga starkare
              samarbeten med andra miljöorganisationer, lokalsamhällen och
              myndigheter. Tillsammans kan vi göra en större skillnad för
              Sveriges vattenmiljöer.
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

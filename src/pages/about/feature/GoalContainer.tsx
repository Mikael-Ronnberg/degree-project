import {
  Flex,
  Text,
  Grid,
  GridItem,
  Heading,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  goalGridStyles,
  introHeadingStyles,
  introItemStyles,
  introTextStyles,
} from "../style/aboutStyle";
import { NormalLogo } from "../../../components/icons/NormalLogo";

export const GoalContainer = () => {
  return (
    <>
      <Flex>
        <Grid {...goalGridStyles}>
          <GridItem
            gridColumnStart={{ base: "1", lg: "2" }}
            gridRowStart={{ base: "1", lg: "1" }}
            {...introItemStyles}
          >
            <VStack>
              <Heading {...introHeadingStyles}>Vilka vi är</Heading>
              <Box fontSize="3rem" display={{ base: "none", lg: "block" }}>
                <NormalLogo />
              </Box>
            </VStack>
          </GridItem>
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
        </Grid>
      </Flex>
    </>
  );
};

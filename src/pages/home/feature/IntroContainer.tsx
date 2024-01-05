import { Flex, Text, Grid, GridItem, Heading } from "@chakra-ui/react";
import {
  introBlueFlexStyles,
  introContainerStyle,
  introWelcomeStyles,
  introWelcomeTextStyles,
  introGridStyles,
  introTextGridItemStyles,
  introEarthGridItemStyles,
  introGridHeadingStyles,
  introTextStyles,
} from "../style/styleHome";
import { Earth } from "../../../components/icons/Earth";

export const IntroContainer = () => {
  return (
    <>
      <Flex {...introContainerStyle}>
        <Flex {...introWelcomeStyles}>
          <Text {...introWelcomeTextStyles}>Välkommen till Svepa Botten!</Text>
        </Flex>
        <Flex {...introBlueFlexStyles}>
          <Grid {...introGridStyles}>
            <GridItem {...introTextGridItemStyles}>
              <Heading {...introGridHeadingStyles}>
                Kul att du har hittat hit
              </Heading>
              <Text
                textAlign="center"
                mt={{ base: "0rem", md: "0.2rem", lg: "0.4rem", xl: "1rem" }}
                {...introTextStyles}
              >
                Svepa Botten är en ideell förening dedikerad till att skydda och
                bevara den svenska undervattensmiljön. Vårt mål är att rena våra
                vatten från skräp och annat avfall, samt att rapportera invasiva
                arter. Genom snorkling rensar våra medlemmar Sveriges vackra men
                sårbara vattenmiljöer.
              </Text>
            </GridItem>
            <GridItem {...introEarthGridItemStyles}>
              <Earth />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

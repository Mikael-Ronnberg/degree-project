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
        <GridItem>
          <Text {...introTextStyles}>
            Vi upptäckte kärleken för snorkling under utlandsresor. När vi
            testade svenska vatten slogs vi av mängden skräp vi hittade under
            ytan. Med tiden blev det en hobby att plocka så mycket skräp vi
            kunde.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

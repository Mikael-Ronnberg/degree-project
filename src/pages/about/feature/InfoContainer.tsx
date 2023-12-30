import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import {
  infoGridStyles,
  infoHeadingItemStyles,
  infoHeadingStyles,
  infoTextItemStyles,
  infoTextStyles,
} from "../style/aboutStyle";

export const InfoContainer = () => {
  return (
    <>
      <Grid {...infoGridStyles}>
        <GridItem {...infoHeadingItemStyles}>
          <Heading {...infoHeadingStyles}>Visste du att...</Heading>
        </GridItem>
        <GridItem {...infoTextItemStyles}>
          <Text {...infoTextStyles}>
            Mer än en miljon fåglar och hundra tusen däggdjur dör varje år
            världen över efter att ha fastnat i eller ätit plast som de hittat i
            våra hav.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

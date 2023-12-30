import { Grid, GridItem, Heading, Box } from "@chakra-ui/react";
import { Snorkel } from "../../../components/icons/Snorkel";
import {
  snorkelGridStyles,
  snorkelHeadingItemStyles,
  snorkelBoxStyles,
  snorkelHeadingStyles,
  snorkelItemStyles,
} from "../style/aboutStyle";

export const SnorkelContainer = () => {
  return (
    <>
      <Grid {...snorkelGridStyles}>
        <GridItem {...snorkelHeadingItemStyles}>
          <Box {...snorkelBoxStyles}>
            <Heading {...snorkelHeadingStyles}>De Flesta Kan Snorkla!</Heading>
          </Box>
          <Box {...snorkelBoxStyles}>
            <Heading {...snorkelHeadingStyles}>
              Behövs Bara Snorkel och Mask
            </Heading>
          </Box>
        </GridItem>
        <GridItem {...snorkelItemStyles}>
          <Snorkel />
        </GridItem>
      </Grid>
    </>
  );
};

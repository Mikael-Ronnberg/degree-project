import { Box, Grid } from "@chakra-ui/react";
import { Tire } from "../../../components/icons/Tire";
import { Glass } from "../../../components/icons/Glass";
import { Animal } from "../../../components/icons/Animal";
import { Metal } from "../../../components/icons/Metal";
import { Plastic } from "../../../components/icons/Plastic";
import {
  animalAnimation,
  glassAnimation,
  litterIconsStyles,
  metalAnimation,
  plasticAnimation,
  tireAnimation,
} from "../style/styleHome";

export const Litter = () => {
  return (
    <>
      <Grid {...litterIconsStyles}>
        <Box animation={`${tireAnimation} infinite 20s linear`}>
          <Tire />
        </Box>
        <Box animation={`${glassAnimation} infinite 20s linear`}>
          <Glass />
        </Box>
        <Box animation={`${metalAnimation} infinite 20s linear`}>
          <Metal />
        </Box>
        <Box animation={`${plasticAnimation} infinite 20s linear`}>
          <Plastic />
        </Box>
        <Box animation={`${animalAnimation} infinite 10s linear`}>
          <Animal />
        </Box>
      </Grid>
    </>
  );
};

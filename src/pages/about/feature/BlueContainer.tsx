import { VStack, Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { GreyButton } from "../../../components/buttons/GreyButton";
import { BlueWave } from "../../../components/waves/BlueWave";
import {
  contactGridStyles,
  contactItemStyles,
  contactTextStyles,
} from "../style/aboutStyle";

export const BlueContainer = () => {
  return (
    <>
      <VStack background="brand.blue" h="auto">
        <Box position="relative" top="-10">
          <BlueWave />
        </Box>
        <Grid {...contactGridStyles}>
          <GridItem {...contactItemStyles}>
            <Text {...contactTextStyles}>
              Vill du vara med och påverka? Hör av dig till oss!
            </Text>
          </GridItem>
          <GridItem {...contactItemStyles}>
            <GreyButton linkTo="/contact" buttonText="Kontakta Oss" />
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

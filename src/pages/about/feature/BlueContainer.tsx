import { VStack, Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { GreyButton } from "../../../components/buttons/GreyButton";
import {
  blueContainerStackStyles,
  contactGridStyles,
  contactItemStyles,
  contactTextStyles,
} from "../style/aboutStyle";
import { SmallWave } from "../../../components/waves/SmallWave";

export const BlueContainer = () => {
  return (
    <>
      <VStack {...blueContainerStackStyles}>
        <Box position="relative" top="-10">
          <SmallWave color="#1E42D4" />
        </Box>
        <Grid {...contactGridStyles}>
          <GridItem {...contactItemStyles}>
            <Text {...contactTextStyles}>
              Ditt stöd och dina idéer är viktiga för oss. Om du har frågor,
              förslag eller vill engagera dig i vårt arbete, tveka inte att
              kontakta oss. Tillsammans kan vi skapa en bättre framtid för våra
              vatten.
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

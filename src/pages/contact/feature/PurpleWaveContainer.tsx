import { Text, VStack, Box } from "@chakra-ui/react";
import {
  pinkTextStyles,
  purpleBoxStyles,
  purpleTextStyles,
  purpleWaveStackStyles,
} from "../style/contactStyle";

export const PurpleWaveContainer = () => {
  return (
    <>
      <VStack {...purpleWaveStackStyles}>
        <Box {...purpleBoxStyles}>
          <Text {...pinkTextStyles}>Vill Du Stötta Oss?</Text>
        </Box>

        <Box {...purpleBoxStyles}>
          <Text {...purpleTextStyles}>
            För att hjälpa till med ekonomiskt stöd och täcka eventuella
            utgifter relaterade till transporter, skadad utrustning,
            reparationer och liknande, finns möjlighet att bidra via
            Swish-nummer 123 000 00 00 och bankgiro 3000-0000. Vi är tacksamma
            för alla bidrag!
          </Text>
        </Box>
      </VStack>
    </>
  );
};
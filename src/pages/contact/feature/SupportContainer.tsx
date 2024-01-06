import {
  Flex,
  Text,
  Image,
  Box,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import {
  supportGridItemGreenCurveStyles,
  supportGridItemGreenBGStyles,
  supportWrapperStyles,
  supportTextBoxStyles,
  supportImageBoxStyles,
  supportGridStyles,
  supportTextStyles,
  supportSocialsBoxStyles,
  supportHeadingStyles,
} from "../style/contactStyle";
import { Facebook } from "../../../components/icons/Facebook";
import { Instagram } from "../../../components/icons/Instagram";
import { Youtube } from "../../../components/icons/Youtube";

export const SupportContainer = () => {
  return (
    <>
      <Flex {...supportWrapperStyles}>
        <Grid {...supportGridStyles}>
          <GridItem {...supportGridItemGreenBGStyles}>
            <Box {...supportTextBoxStyles}>
              <Heading {...supportHeadingStyles}>
                Ditt Bidrag Gör Skillnad
              </Heading>
              <Text {...supportTextStyles}>
                Din donation hjälper oss att fortsätta vårt arbete med att rena
                svenska vatten och skydda marina ekosystem. Varje bidrag, stort
                som litet, bidrar till organisering av våra
                rensningsaktiviteter.
              </Text>
              <Text {...supportTextStyles}>
                Du kan också scanna koden för att swisha. Vi är tacksamma för
                alla bidrag!
              </Text>
            </Box>
            <Box {...supportImageBoxStyles}>
              <Image
                src="/svg/QR.svg"
                alt="QR Code"
                w={{ base: "200px", md: "280px" }}
              />
            </Box>
            <Heading textAlign="center" mt="1.4rem" py="1rem">
              Vill du veta mer?
            </Heading>
            <Text p="0.5rem" fontWeight="bold">
              Kolla in våra sociala Medier
            </Text>
          </GridItem>

          <GridItem {...supportGridItemGreenCurveStyles}>
            <Box {...supportSocialsBoxStyles}>
              <Facebook />
              <Instagram />
              <Youtube />
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

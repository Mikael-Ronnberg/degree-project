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
import { Youtube } from "../../../components/icons/Tiktok";

export const SupportContainer = () => {
  return (
    <>
      <Flex {...supportWrapperStyles}>
        <Grid {...supportGridStyles}>
          <GridItem {...supportGridItemGreenBGStyles}>
            <Box {...supportTextBoxStyles}>
              <Heading {...supportHeadingStyles}>
                Ditt Bidrag Gör Skillnad{" "}
              </Heading>
              <Text {...supportTextStyles}>
                Din donation hjälper oss att fortsätta vårt arbete med att rena
                svenska vatten och skydda marina ekosystem. Varje bidrag, stort
                som litet, bidrar till inköp av utrustning, utbildningsmaterial
                och organisering av våra rensningsaktiviteter.
              </Text>
              <Text {...supportTextStyles}>
                Swish-nummer 123 000 00 00 eller scanna koden. Vi är tacksamma
                för alla bidrag!
              </Text>
            </Box>
            <Box {...supportImageBoxStyles}>
              <Image
                src="/svg/QR.svg"
                alt="QR Code"
                w={{ base: "200px", md: "280px" }}
              />
            </Box>
            <Heading textAlign="center" p="1rem">
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

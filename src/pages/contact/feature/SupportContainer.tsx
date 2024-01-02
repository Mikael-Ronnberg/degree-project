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
} from "../style/contactStyle";
import { Facebook } from "../../../components/icons/Facebook";
import { Instagram } from "../../../components/icons/Instagram";
import { Tiktok } from "../../../components/icons/Tiktok";

export const SupportContainer = () => {
  return (
    <>
      <Flex {...supportWrapperStyles}>
        <Grid {...supportGridStyles}>
          <GridItem {...supportGridItemGreenBGStyles}>
            <Box {...supportTextBoxStyles}>
              <Text {...supportTextStyles}>
                Det går bra att Swisha oss men om ni vill donera på andra sätt
                kan ni höra av er till oss. Alla donationer går oavkortat in i
                organisationen igen i form av redskap och dylikt som behövs för
                vårt ändamål.
              </Text>
            </Box>
            <Box {...supportImageBoxStyles}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/sb-project-a9f24.appspot.com/o/QR.png?alt=media&token=2899892e-c905-480a-aa90-0f453eb3685c"
                alt="QR Code"
              />
            </Box>
            <Heading textAlign="center" p="2rem">
              Social?
            </Heading>
          </GridItem>

          <GridItem {...supportGridItemGreenCurveStyles}>
            <Text p="2rem" fontWeight="bold">
              Kolla in våra sociala Medier
            </Text>
            <Box {...supportSocialsBoxStyles}>
              <Facebook />
              <Instagram />
              <Tiktok />
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

//Ditt Bidrag Gör Skillnad
// Din donation hjälper oss att fortsätta vårt arbete med att rena svenska vatten och skydda marina ekosystem. Varje bidrag, stort som litet, bidrar till inköp av utrustning, utbildningsmaterial och organisering av våra rensningsaktiviteter.

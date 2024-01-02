import { Flex, Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import {
  formGridStyles,
  formGriditemYellowBGStyles,
  formGriditemYellowCurveStyles,
  formHeadingStyles,
  formWrapperStyles,
  headingBoxStyles,
} from "../style/contactStyle";

import { ContactForm } from "./ContactForm";

export const FormContainer = () => {
  return (
    <>
      <Flex {...formWrapperStyles}>
        <Grid {...formGridStyles}>
          <GridItem {...formGriditemYellowCurveStyles}>
            <Box {...headingBoxStyles}>
              <Heading {...formHeadingStyles}>
                Har du någon fråga eller något du undrar över?
              </Heading>
            </Box>
          </GridItem>
          <GridItem {...formGriditemYellowBGStyles}>
            <ContactForm />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

import { Flex } from "@chakra-ui/react";
import { contactPageStyles } from "./style/contactStyle";
import { FormContainer } from "./feature/FormContainer";
import { SupportContainer } from "./feature/SupportContainer";
import { PurpleWaveContainer } from "./feature/PurpleWaveContainer";

export const Contact = () => {
  return (
    <>
      <Flex {...contactPageStyles}>
        <FormContainer />
        <PurpleWaveContainer />
        <SupportContainer />
      </Flex>
    </>
  );
};

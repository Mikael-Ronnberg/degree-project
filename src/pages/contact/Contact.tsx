import { Flex } from "@chakra-ui/react";
import { contactPageStyles } from "./style/contactStyle";
import { FormContainer } from "./feature/FormContainer";
import { SupportContainer } from "./feature/SupportContainer";

export const Contact = () => {
  return (
    <>
      <Flex {...contactPageStyles}>
        <FormContainer />
        <SupportContainer />
      </Flex>
    </>
  );
};

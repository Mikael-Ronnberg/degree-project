import { Flex, Heading } from "@chakra-ui/react";
import {
  formContainerStyles,
  formHeadingStyles,
  formWrapperStyles,
  headingContainerStyles,
} from "../style/contactStyle";
import { ContactForm } from "./ContactForm";
import { PurpleButton } from "../../../components/buttons/PurpleButton";

export const FormContainer = () => {
  return (
    <>
      <Flex {...formWrapperStyles}>
        <Flex {...headingContainerStyles}>
          <Heading {...formHeadingStyles}>
            Har du någon fråga eller något du undrar över?
          </Heading>
        </Flex>
        <Flex {...formContainerStyles}>
          <ContactForm />
        </Flex>
        <PurpleButton buttonText="Skicka" />
      </Flex>
    </>
  );
};

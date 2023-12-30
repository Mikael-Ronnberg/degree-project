import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import {
  contactFormInputStyles,
  contactFormTextareaStyles,
} from "../style/contactStyle";

export interface ContactValues {
  name: string;
  email: string;
  question: string;
  message: string;
}

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const initialValues: ContactValues = {
    name: "",
    email: "",
    question: "",
    message: "",
  };

  const onSubmit = (values: ContactValues) => {
    console.log("Form data", values);

    setSubmitted(true);
  };

  return (
    <>
      {!submitted && (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormControl>
                <VStack spacing="2rem">
                  <FormLabel htmlFor="name" as={VisuallyHidden}>
                    Namn
                  </FormLabel>
                  <Input
                    {...contactFormInputStyles}
                    id="name"
                    name="name"
                    placeholder="Namn"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <FormLabel htmlFor="email" as={VisuallyHidden}>
                    Email
                  </FormLabel>
                  <Input
                    {...contactFormInputStyles}
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <FormLabel htmlFor="email" as={VisuallyHidden}>
                    Vad gäller din fråga?
                  </FormLabel>
                  <Input
                    {...contactFormInputStyles}
                    id="question"
                    name="question"
                    placeholder="Fråga"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.question}
                  />
                  <FormLabel htmlFor="message" as={VisuallyHidden}>
                    Skriv ditt meddelande här
                  </FormLabel>
                  <Textarea
                    {...contactFormTextareaStyles}
                    id="message"
                    name="message"
                    placeholder="Skriv ditt meddelande här"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {/* <HStack spacing="2rem">
                    <Button type="submit">Skicka</Button>
                  </HStack> */}
                </VStack>
              </FormControl>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

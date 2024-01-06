import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Formik } from "formik";
import {
  contactFormInputStyles,
  contactFormTextareaStyles,
  formStackStyles,
} from "../style/contactStyle";
import emailjs from "@emailjs/browser";
import { ContactValues } from "../../../model/GlobalInterfaces";
import {
  purpleButtonStyles,
  purpleDisabledButtonStyles,
} from "../../../components/buttons/style/buttonStyles";
import { useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(false);
  const initialValues: ContactValues = {
    name: "",
    email: "",
    question: "",
    message: "",
  };

  const handleFormSubmit = async (values: ContactValues) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          to_name: "Svepa Botten Gänget",
          from_email: values.email,
          to_email: "mikael.rnnberg@gmail.com",
          question: values.question,
          message: values.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!submitted && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          enableReinitialize
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => {
            if (values.message.length > 0) {
              setSubmitTrue(true);
            } else {
              setSubmitTrue(false);
            }

            return (
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <VStack spacing="3rem" pb="2rem">
                    <VStack {...formStackStyles}>
                      <FormLabel htmlFor="name" as={VisuallyHidden}>
                        Namn
                      </FormLabel>
                      <Input
                        {...contactFormInputStyles}
                        id="name"
                        name="name"
                        placeholder="Namn... (valfritt)"
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
                        placeholder="Email... (valfritt)"
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
                        placeholder="Fråga... (valfritt)"
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
                        placeholder="Skriv ditt meddelande här..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                    </VStack>
                    {submitTrue ? (
                      <Button type="submit" {...purpleButtonStyles}>
                        Skicka
                      </Button>
                    ) : (
                      <Button {...purpleDisabledButtonStyles}>
                        Fyll i för att skicka
                      </Button>
                    )}
                  </VStack>
                </FormControl>
              </form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Formik, useFormikContext } from "formik";
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
import { useEffect, useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
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
          <FormContactContent />
        </Formik>
      )}
    </>
  );
};

const FormContactContent = () => {
  const { values, handleChange, handleBlur, handleSubmit } =
    useFormikContext<ContactValues>();
  const [submitTrue, setSubmitTrue] = useState(false);

  useEffect(() => {
    setSubmitTrue(values.message.length > 0);
  }, [values.message]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <VStack spacing="3rem" pb="2rem">
          <VStack {...formStackStyles}>
            <FormLabel htmlFor="name">
              <VisuallyHidden>Namn</VisuallyHidden>
            </FormLabel>
            <Input
              {...contactFormInputStyles}
              id="name"
              name="name"
              placeholder="Namn... (valfritt)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              autoComplete="name"
            />
            <FormLabel htmlFor="email">
              <VisuallyHidden>Email</VisuallyHidden>
            </FormLabel>
            <Input
              {...contactFormInputStyles}
              id="email"
              name="email"
              placeholder="Email... (valfritt)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              autoComplete="email"
            />
            <FormLabel htmlFor="question">
              <VisuallyHidden>Fråga</VisuallyHidden>
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
            <FormLabel htmlFor="message">
              <VisuallyHidden>Meddelande</VisuallyHidden>
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
            <Button
              {...purpleDisabledButtonStyles}
              aria-label="fyll i för att kunna trycka"
            >
              Fyll i för att skicka
            </Button>
          )}
        </VStack>
      </FormControl>
    </form>
  );
};

import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import {
  CreateEventFormValues,
  TransformedEventResponse,
} from "../../../model/AdminInterfaces";
import {
  createFormStyles,
  createInputFormStyles,
  createTextareaFormStyles,
} from "../../admin/style/styleAdmin";

interface EventFormProps {
  formType: "create" | "update";
  formValues?: Omit<TransformedEventResponse, "createdAt">;
  onClose: () => void;
  onSubmit: (
    values: CreateEventFormValues | Omit<TransformedEventResponse, "createdAt">,
    formikHelpers: FormikHelpers<
      CreateEventFormValues | Omit<TransformedEventResponse, "createdAt">
    >
  ) => void;
}

export const EventForm = ({
  formType,
  onSubmit,
  formValues,
  onClose,
}: EventFormProps) => {
  const isUpdateForm = formType === "update";
  const submitButtonText = isUpdateForm ? "Updatera" : "Spara";
  const initialValues =
    formType === "update" && formValues
      ? {
          id: formValues.id,
          heading: formValues.heading,
          date: formValues.date,
          description: formValues.description,
        }
      : {
          heading: "",
          date: "",
          description: "",
        };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Flex {...createFormStyles}>
              <FormLabel htmlFor="heading">Titel för händelsen</FormLabel>
              <Input
                {...createInputFormStyles}
                id="heading"
                name="heading"
                placeholder="Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.heading}
              />
              <FormLabel htmlFor="date">Datum för händelsen</FormLabel>
              <Input
                {...createInputFormStyles}
                id="date"
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel htmlFor="description">Skriv om händelsen</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="description"
                name="description"
                placeholder="Skriv om kommande händelse och plats"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <HStack spacing="2rem">
                <Button colorScheme="blue" onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit">{submitButtonText}</Button>
              </HStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

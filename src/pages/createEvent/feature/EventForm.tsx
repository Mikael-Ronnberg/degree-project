import {
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import {
  CreateEventFormValues,
  TransformedEventResponse,
} from "../../../model/EventsInterfaces";
import {
  formFlexStyles,
  formLabelStyles,
  inputFormStyles,
  textareaFormStyles,
} from "../../admin/style/styleAdmin";
import {
  cancelButtonStyles,
  greyButtonStyles,
} from "../../../components/buttons/style/buttonStyles";

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
            <Flex {...formFlexStyles}>
              <FormLabel {...formLabelStyles} htmlFor="heading">
                Titel för händelsen
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="heading"
                name="heading"
                placeholder="Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.heading}
              />
              <FormLabel {...formLabelStyles} htmlFor="date">
                Datum för händelsen
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="date"
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel {...formLabelStyles} htmlFor="description">
                Skriv om händelsen
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
                id="description"
                name="description"
                placeholder="Skriv om kommande händelse och plats"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <VStack spacing="2rem" pt="3rem">
                <Button {...cancelButtonStyles} onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit" {...greyButtonStyles}>
                  {submitButtonText}
                </Button>
              </VStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import {
  ourFormStyles,
  ourInputStyles,
  ourTextareaStyles,
} from "../../admin/style/styleAdmin";
import { CreateEventFormValues } from "../../../model/AdminInterfaces";
import { submitEvent } from "../../../services/AdminServices";

export const CreateEventForm = () => {
  const initialValues: CreateEventFormValues = {
    heading: "",
    date: "",
    description: "",
  };

  const handleSubmit = (
    values: CreateEventFormValues,
    { resetForm }: FormikHelpers<CreateEventFormValues>
  ) => {
    submitEvent(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Flex {...ourFormStyles}>
              <FormLabel htmlFor="heading">Titel för händelsen</FormLabel>
              <Input
                {...ourInputStyles}
                name="heading"
                placeholder="Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.heading}
              />
              <FormLabel htmlFor="date">Datum för händelsen</FormLabel>
              <Input
                {...ourInputStyles}
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel htmlFor="description">Skriv om händelsen</FormLabel>
              <Textarea
                {...ourTextareaStyles}
                name="description"
                placeholder="Skriv om kommande händelse och plats"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <Button type="submit">Spara</Button>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

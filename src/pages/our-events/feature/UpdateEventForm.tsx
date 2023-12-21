import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { TransformedEventResponse } from "../../../model/AdminInterfaces";
import { submitEvent } from "../../../services/AdminServices";
import { useEventsStore } from "../../../store/useEventsStore";
import {
  createFormStyles,
  createInputFormStyles,
  createTextareaFormStyles,
} from "../../admin/style/styleAdmin";

interface UpdateEventFormProps {
  formValues: TransformedEventResponse;
  onClose: () => void;
}

export const UpdateEventForm = ({
  formValues,
  onClose,
}: UpdateEventFormProps) => {
  const initialValues: Omit<TransformedEventResponse, "createdAt"> = {
    id: formValues.id,
    heading: formValues.heading,
    date: formValues.date,
    description: formValues.description,
  };

  const { updateEvent } = useEventsStore();

  const handleSubmit = (
    values: Omit<TransformedEventResponse, "createdAt">
  ) => {
    updateEvent(values as TransformedEventResponse);
    localStorage.removeItem("events");
    submitEvent(values);
    onClose();
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
            <Flex {...createFormStyles}>
              <FormLabel htmlFor="heading">Titel för händelsen</FormLabel>
              <Input
                {...createInputFormStyles}
                name="heading"
                placeholder="Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.heading}
              />
              <FormLabel htmlFor="date">Datum för händelsen</FormLabel>
              <Input
                {...createInputFormStyles}
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel htmlFor="description">Skriv om händelsen</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
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
                <Button type="submit">Updatera</Button>
              </HStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

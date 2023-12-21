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
import { TransformedOurLocationResponse } from "../../../model/AdminInterfaces";
import { updateOurLocation } from "../../../services/AdminServices";
import {
  createFormStyles,
  createInputFormStyles,
  createTextareaFormStyles,
} from "../../admin/style/styleAdmin";

interface UpdateOurLocationFormProps {
  formValues: TransformedOurLocationResponse;
  onClose: () => void;
}

export const UpdateOurLocationForm = ({
  formValues,
  onClose,
}: UpdateOurLocationFormProps) => {
  const initialValues: Omit<TransformedOurLocationResponse, "createdAt"> = {
    id: formValues.id,
    locationName: formValues.locationName,
    date: formValues.date,
    description: formValues.description,
    plastic: formValues.plastic,
    metal: formValues.metal,
    glass: formValues.glass,
    other: formValues.other,
    animals: formValues.animals,
    lat: formValues.lat,
    lng: formValues.lng,
  };

  const handleSubmit = (
    values: Omit<TransformedOurLocationResponse, "createdAt">
  ) => {
    updateOurLocation(values);
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
              <Input
                {...createInputFormStyles}
                name="locationName"
                placeholder="Platsens Namn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.locationName}
              />
              <Input
                {...createInputFormStyles}
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <Textarea
                {...createTextareaFormStyles}
                name="description"
                placeholder="Skriv något om platsen och vad vi gjorde denna dag"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <FormLabel htmlFor="plastic">Plast</FormLabel>
              <Input
                {...createInputFormStyles}
                name="plastic"
                placeholder="Plast i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.plastic}
              />
              <FormLabel htmlFor="metal">Metall</FormLabel>
              <Input
                {...createInputFormStyles}
                name="metal"
                placeholder="Metall i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metal}
              />
              <FormLabel htmlFor="glass">Glas</FormLabel>
              <Input
                {...createInputFormStyles}
                name="glass"
                placeholder="Glas i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.glass}
              />
              <FormLabel htmlFor="other">Övrigt</FormLabel>
              <Input
                {...createInputFormStyles}
                name="other"
                placeholder="Övrigt i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.other}
              />
              <FormLabel htmlFor="animals">
                Invasiv art (antal individer, skriv i beskrivning vilka)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                name="animals"
                placeholder="Invasiva arter (antal individer, skriv i beskrivning vilka)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.animals}
              />
              <Input
                type="hidden"
                name="lat"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lat}
              />
              <Input
                type="hidden"
                name="lon"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lng}
              />
              <HStack spacing="2rem">
                <Button colorScheme="blue" onClick={onClose}>
                  Close
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

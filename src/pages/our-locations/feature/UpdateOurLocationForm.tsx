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
import {
  ourFormStyles,
  ourInputStyles,
  ourTextareaStyles,
} from "../../admin/style/styleAdmin";
import { updateOurLocation } from "../../../services/AdminServices";

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
            <Flex {...ourFormStyles}>
              <Input
                {...ourInputStyles}
                name="locationName"
                placeholder="Platsens Namn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.locationName}
              />
              <Input
                {...ourInputStyles}
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <Textarea
                {...ourTextareaStyles}
                name="description"
                placeholder="Skriv något om platsen och vad vi gjorde denna dag"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <FormLabel htmlFor="plastic">Plast</FormLabel>
              <Input
                {...ourInputStyles}
                name="plastic"
                placeholder="Plast i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.plastic}
              />
              <FormLabel htmlFor="metal">Metall</FormLabel>
              <Input
                {...ourInputStyles}
                name="metal"
                placeholder="Metall i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metal}
              />
              <FormLabel htmlFor="glass">Glas</FormLabel>
              <Input
                {...ourInputStyles}
                name="glass"
                placeholder="Glas i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.glass}
              />
              <FormLabel htmlFor="other">Övrigt</FormLabel>
              <Input
                {...ourInputStyles}
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
                {...ourInputStyles}
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

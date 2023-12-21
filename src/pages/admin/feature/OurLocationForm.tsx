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
} from "../style/styleAdmin";
import { useLocationStore } from "../../../store/useLocationsStore";
import { submitOurLocation } from "../services/AdminServices";
import { OurLocationFormValues } from "../model/AdminInterfaces";

export const OurLocationForm = () => {
  const { pinLocation, setPinLocation } = useLocationStore();

  const initialValues: OurLocationFormValues = {
    locationName: "",
    date: "",
    description: "",
    plastic: 0,
    metal: 0,
    glass: 0,
    other: 0,
    animals: 0,
    lat: pinLocation?.lat || 0,
    lng: pinLocation?.lng || 0,
  };

  const handleSubmit = (
    values: OurLocationFormValues,
    { resetForm }: FormikHelpers<OurLocationFormValues>
  ) => {
    submitOurLocation(values);
    setPinLocation(null);

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
              <Button type="submit">Skicka till databasen</Button>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

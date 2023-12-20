import { Button, Flex, FormControl, Input, Textarea } from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import { OurLocationFormValues } from "../model/adminInterfaces";
import {
  ourFormStyles,
  ourInputStyles,
  ourTextareaStyles,
} from "../style/styleAdmin";

export const OurLocationForm = () => {
  // const { pinLocation, setPinLocation, setFormSubmitted } = useLocationStore();

  const initialValues: OurLocationFormValues = {
    locationName: "",
    date: "",
    description: "",
    plastic: 0,
    metal: 0,
    glass: 0,
    other: 0,
    animals: 0,
    lat: 0,
    lng: 0,
  };

  const handleSubmit = (
    values: OurLocationFormValues,
    { resetForm }: FormikHelpers<OurLocationFormValues>
  ) => {
    //   submitLocation(values);
    resetForm();
    //   setFormSubmitted(true);
    //   setPinLocation(null);
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
              <Input
                {...ourInputStyles}
                name="plastic"
                placeholder="Plast i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.plastic}
              />
              <Input
                {...ourInputStyles}
                name="metal"
                placeholder="Metall i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metal}
              />
              <Input
                {...ourInputStyles}
                name="glass"
                placeholder="Glas i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.glass}
              />
              <Input
                {...ourInputStyles}
                name="other"
                placeholder="Övrigt i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.other}
              />
              <Input
                {...ourInputStyles}
                name="animals"
                placeholder="Invasiv art (antal individer, skriv i beskrivning vilka)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.other}
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

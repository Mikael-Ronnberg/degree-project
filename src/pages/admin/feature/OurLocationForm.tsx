import {
  FormControl,
  Flex,
  Input,
  Textarea,
  FormLabel,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FormikHelpers, Formik } from "formik";
import {
  TransformedOurLocationResponse,
  CreateOurLocationFormValues,
} from "../../../model/AdminInterfaces";
import {
  createFormStyles,
  createInputFormStyles,
  createTextareaFormStyles,
} from "../style/styleAdmin";
import { useLocationStore } from "../../../store/useLocationsStore";

interface OurLocationFormProps {
  formType: "create" | "update";
  formValues?: TransformedOurLocationResponse; // Optional for update
  onClose: () => void;
  onSubmit: (
    values:
      | CreateOurLocationFormValues
      | Omit<TransformedOurLocationResponse, "createdAt">,
    formikHelpers: FormikHelpers<
      | CreateOurLocationFormValues
      | Omit<TransformedOurLocationResponse, "createdAt">
    >
  ) => void;
}

export const OurLocationForm = ({
  formType,
  formValues,
  onClose,
  onSubmit,
}: OurLocationFormProps) => {
  const { pinLocation } = useLocationStore();

  const initialValues =
    formType === "update" && formValues
      ? {
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
        }
      : {
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
              <Input
                {...createInputFormStyles}
                id="locationName"
                name="locationName"
                placeholder="Platsens Namn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.locationName}
              />
              <Input
                {...createInputFormStyles}
                id="date"
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <Textarea
                {...createTextareaFormStyles}
                id="description"
                name="description"
                placeholder="Skriv något om platsen och vad vi gjorde denna dag"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <FormLabel htmlFor="plastic">Plast</FormLabel>
              <Input
                {...createInputFormStyles}
                id="plastic"
                name="plastic"
                placeholder="Plast i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.plastic}
              />
              <FormLabel htmlFor="metal">Metall</FormLabel>
              <Input
                {...createInputFormStyles}
                id="metal"
                name="metal"
                placeholder="Metall i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metal}
              />
              <FormLabel htmlFor="glass">Glas</FormLabel>
              <Input
                {...createInputFormStyles}
                id="glass"
                name="glass"
                placeholder="Glas i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.glass}
              />
              <FormLabel htmlFor="other">Övrigt</FormLabel>
              <Input
                {...createInputFormStyles}
                id="other"
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
                id="animals"
                name="animals"
                placeholder="Invasiva arter (antal individer, skriv i beskrivning vilka)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.animals}
              />
              <Input
                id="lat"
                type="hidden"
                name="lat"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lat}
              />
              <Input
                id="lon"
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

import {
  FormControl,
  Flex,
  Input,
  Textarea,
  FormLabel,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FormikHelpers, Formik } from "formik";
import {
  TransformedOurLocationResponse,
  CreateOurLocationFormValues,
} from "../../../model/LocationsInterfaces";
import {
  formFlexStyles,
  formLabelStyles,
  inputFormStyles,
  textareaFormStyles,
} from "../style/styleAdmin";
import { useLocationStore } from "../../../store/useLocationsStore";
import {
  cancelButtonStyles,
  greyButtonStyles,
} from "../../../components/buttons/style/buttonStyles";

interface OurLocationFormProps {
  formType: "create" | "update";
  formValues?: TransformedOurLocationResponse;
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

  const buttonText = formType === "update" ? "Uppdatera" : "Skapa";

  const initialValues:
    | CreateOurLocationFormValues
    | Omit<TransformedOurLocationResponse, "createdAt"> =
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
          plastic: undefined,
          metal: undefined,
          glass: undefined,
          other: undefined,
          animals: undefined,
          lat: pinLocation?.lat || 0,
          lng: pinLocation?.lng || 0,
        };

  const handleFormSubmit = (
    values: CreateOurLocationFormValues,
    formikHelpers: FormikHelpers<CreateOurLocationFormValues>
  ) => {
    const processedValues = {
      ...values,
      plastic: values.plastic ?? 0,
      metal: values.metal ?? 0,
      glass: values.glass ?? 0,
      other: values.other ?? 0,
      animals: values.animals ?? 0,
    };

    onSubmit(processedValues, formikHelpers);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Flex {...formFlexStyles}>
              <Input
                {...inputFormStyles}
                id="locationName"
                name="locationName"
                placeholder="Platsens Namn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.locationName}
              />
              <Input
                {...inputFormStyles}
                id="date"
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <Textarea
                {...textareaFormStyles}
                id="description"
                name="description"
                placeholder="Skriv något om platsen och vad vi gjorde denna dag"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <FormLabel htmlFor="plastic" {...formLabelStyles}>
                Plast
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="plastic"
                name="plastic"
                placeholder="Plast i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.plastic}
              />
              <FormLabel htmlFor="metal" {...formLabelStyles}>
                Metall
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="metal"
                name="metal"
                placeholder="Metall i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.metal}
              />
              <FormLabel htmlFor="glass" {...formLabelStyles}>
                Glas
              </FormLabel>
              <Input
                {...inputFormStyles}
                type="number"
                id="glass"
                name="glass"
                placeholder="Glas i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.glass}
              />
              <FormLabel htmlFor="other" {...formLabelStyles}>
                Övrigt
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="other"
                name="other"
                placeholder="Övrigt i vikt (kg)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.other}
              />
              <FormLabel htmlFor="animals" {...formLabelStyles}>
                Invasiv art (antal individer, skriv i beskrivning vilka)
              </FormLabel>
              <Input
                {...inputFormStyles}
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
              <VStack spacing="2rem" pt="3rem">
                <Button {...cancelButtonStyles} onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit" {...greyButtonStyles}>
                  {buttonText}
                </Button>
              </VStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

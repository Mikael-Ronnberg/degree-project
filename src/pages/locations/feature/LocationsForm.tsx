import { Formik, FormikHelpers } from "formik";
import { Flex, FormControl, Input, Button, Textarea } from "@chakra-ui/react";
import {
  formContainerStyles,
  formContentStyles,
  textareaStyles,
  inputStyles,
} from "../style/styleLocations";
import { LocationsFormValues } from "../model/LocationsInterfaces";
import { useLocationStore } from "../../../store/useLocationsStore";
import { submitLocation } from "../services/MapServices";

export const LocationsForm = () => {
  const { pinLocation, setPinLocation, setFormSubmitted } = useLocationStore();

  const initialValues: LocationsFormValues = {
    name: "",
    email: "",
    message: "",
    lat: pinLocation?.lat || 0,
    lng: pinLocation?.lng || 0,
  };

  const handleSubmit = (
    values: LocationsFormValues,
    { resetForm }: FormikHelpers<LocationsFormValues>
  ) => {
    submitLocation(values);
    resetForm();
    setFormSubmitted(true);
    setPinLocation(null);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Flex {...formContainerStyles}>
            <FormControl>
              <Flex {...formContentStyles}>
                <Input
                  {...inputStyles}
                  name="name"
                  placeholder="Namn (Valfritt)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Input
                  {...inputStyles}
                  name="email"
                  placeholder="Email (Valfritt)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Textarea
                  {...textareaStyles}
                  name="message"
                  placeholder="Meddelande"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
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
                <Button type="submit">Skicka tipset!</Button>
              </Flex>
            </FormControl>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

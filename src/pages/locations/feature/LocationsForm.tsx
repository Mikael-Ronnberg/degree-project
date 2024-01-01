import { Formik, FormikHelpers } from "formik";
import { Flex, FormControl, Input, Button, Textarea } from "@chakra-ui/react";
import {
  formContentStyles,
  textareaStyles,
  inputStyles,
} from "../style/locationStyle";

import { useLocationStore } from "../../../store/useLocationsStore";
import { submitLocation } from "../../../services/MapServices";
import { SubLocationsFormValues } from "../../../model/LocationsInterfaces";
import { purpleButtonStyles } from "../../../components/buttons/style/buttonStyles";

export const LocationsForm = () => {
  const { pinLocation, setPinLocation, setFormSubmitted } = useLocationStore();

  const initialValues: SubLocationsFormValues = {
    name: "",
    email: "",
    message: "",
    lat: pinLocation?.lat || 0,
    lng: pinLocation?.lng || 0,
  };

  const handleSubmit = (
    values: SubLocationsFormValues,
    { resetForm }: FormikHelpers<SubLocationsFormValues>
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
              <Button type="submit" {...purpleButtonStyles}>
                Skicka tipset!
              </Button>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

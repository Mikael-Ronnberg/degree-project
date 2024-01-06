import { Formik, FormikHelpers } from "formik";
import { Flex, Input, Button, Textarea } from "@chakra-ui/react";
import {
  formContentStyles,
  textareaStyles,
  inputStyles,
} from "../style/locationStyle";

import { useLocationStore } from "../../../store/useLocationsStore";
import { submitLocation } from "../../../services/MapServices";
import { SubLocationsFormValues } from "../../../model/LocationsInterfaces";
import {
  purpleButtonStyles,
  purpleDisabledButtonStyles,
} from "../../../components/buttons/style/buttonStyles";
import { useState } from "react";

export const LocationsForm = () => {
  const { pinLocation, setPinLocation, setFormSubmitted } = useLocationStore();

  const [submitTrue, setSubmitTrue] = useState(false);

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
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        if (values.message.length > 0 && values.lat !== 0 && values.lng !== 0) {
          setSubmitTrue(true);
        } else {
          setSubmitTrue(false);
        }

        return (
          <form onSubmit={handleSubmit}>
            <Flex {...formContentStyles}>
              <Input
                {...inputStyles}
                name="name"
                placeholder="Namn... (valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <Input
                {...inputStyles}
                name="email"
                placeholder="Email... (valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Textarea
                {...textareaStyles}
                name="message"
                placeholder="Meddelande..."
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
              {submitTrue ? (
                <Button type="submit" {...purpleButtonStyles}>
                  Skicka tipset
                </Button>
              ) : (
                <Button {...purpleDisabledButtonStyles}>
                  Fyll i för att skicka
                </Button>
              )}
            </Flex>
          </form>
        );
      }}
    </Formik>
  );
};

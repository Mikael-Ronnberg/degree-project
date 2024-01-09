import { Formik, FormikHelpers, useFormikContext } from "formik";
import { Flex, Input, Button, Textarea, Text } from "@chakra-ui/react";
import {
  formContentStyles,
  textareaStyles,
  inputStyles,
  formTextStyles,
} from "../style/locationStyle";

import { useLocationStore } from "../../../store/useLocationsStore";
import { submitLocation } from "../../../services/MapServices";
import { SubLocationsFormValues } from "../../../model/LocationsInterfaces";
import {
  purpleButtonStyles,
  purpleDisabledButtonStyles,
} from "../../../components/buttons/style/buttonStyles";
import { useEffect, useState } from "react";

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
      <FormLocationContent />
    </Formik>
  );
};

const FormLocationContent = () => {
  const { values, handleChange, handleBlur, handleSubmit } =
    useFormikContext<SubLocationsFormValues>();
  const [submitTrue, setSubmitTrue] = useState(false);

  useEffect(() => {
    if (values.message.length > 0 && values.lat !== 0 && values.lng !== 0) {
      setSubmitTrue(true);
    } else {
      setSubmitTrue(false);
    }
  }, [values]);

  return (
    <form onSubmit={handleSubmit}>
      <Flex {...formContentStyles}>
        <Text {...formTextStyles}>
          Glöm inte att markera en plats på kartan för att kunna skicka in ett
          tips
        </Text>
        <Input
          {...inputStyles}
          id="name"
          name="name"
          placeholder="Namn... (valfritt)"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          autoComplete="name"
        />
        <Input
          {...inputStyles}
          id="email"
          name="email"
          placeholder="Email... (valfritt)"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          autoComplete="email"
        />
        <Textarea
          {...textareaStyles}
          id="message"
          name="message"
          placeholder="Meddelande..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
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
          id="lng"
          type="hidden"
          name="lng"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lng}
        />
        {submitTrue ? (
          <Button type="submit" {...purpleButtonStyles} mt="1.5rem" mb="0.5rem">
            Skicka tipset
          </Button>
        ) : (
          <>
            <Button {...purpleDisabledButtonStyles} mt="1.5rem" mb="0.5rem">
              Fyll i för att skicka
            </Button>
          </>
        )}
      </Flex>
    </form>
  );
};

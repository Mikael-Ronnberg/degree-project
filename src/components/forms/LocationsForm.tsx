import { Formik, FormikHelpers } from "formik";
import { Flex, FormControl, Input, Button, Textarea } from "@chakra-ui/react";
import {
  formContainerStyles,
  formContentStyles,
  textareaStyles,
  inputStyles,
} from "../../pages/locations/style/styleLocations";
import { ILocation, ILocationsFormValues } from "../../model/Interfaces";

interface LocationsFormProps {
  pinLocation: ILocation | null;
}

export const LocationsForm = ({ pinLocation }: LocationsFormProps) => {
  const initialValues: ILocationsFormValues = {
    name: "",
    email: "",
    message: "",
    lat: pinLocation?.lat || 0,
    lng: pinLocation?.lng || 0,
  };

  const handleSubmit = (
    values: ILocationsFormValues,
    { resetForm }: FormikHelpers<ILocationsFormValues>
  ) => {
    console.log(values);
    //API call to our server later!

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

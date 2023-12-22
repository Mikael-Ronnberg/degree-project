import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import {
  AddUserFormValues,
  SubmitUserValues,
} from "../../../model/AdminInterfaces";
import {
  createFormStyles,
  createInputFormStyles,
} from "../../admin/style/styleAdmin";
import { submitUser } from "../../../services/AdminServices";

interface AddUserFormProps {
  onClose: () => void;
}

export const AddUserForm = ({ onClose }: AddUserFormProps) => {
  const initialValues: AddUserFormValues = {
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
    number: "",
    city: "",
  };

  const handleSubmit = async (
    values: AddUserFormValues,
    { resetForm, setErrors }: FormikHelpers<AddUserFormValues>
  ) => {
    if (values.password !== values.repeatPassword) {
      setErrors({ repeatPassword: "Lösenorden matchar ej" });
      return;
    }

    const submissionData: SubmitUserValues = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      number: values.number,
      city: values.city,
    };

    try {
      const response = await submitUser(submissionData);
      if (response.success) {
        resetForm();
        onClose();
      } else {
        setErrors({ general: response.error });
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ general: error.message });
      } else {
        setErrors({ general: "Unkown error occurred" });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Flex {...createFormStyles}>
              <FormLabel htmlFor="fullName">Namn och Efternamn</FormLabel>
              <Input
                {...createInputFormStyles}
                id="fullName-input"
                name="fullName"
                placeholder="Namn och Efternamn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                {...createInputFormStyles}
                id="email-input"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormLabel htmlFor="password">Lösenord</FormLabel>
              <Input
                {...createInputFormStyles}
                id="password-input"
                name="password"
                type="password"
                placeholder="Lösenord"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormLabel htmlFor="repeatPassword">Upprepa Lösenord</FormLabel>
              <Input
                {...createInputFormStyles}
                id="repeatPassword-input"
                name="repeatPassword"
                type="password"
                placeholder="Upprepa Lösenord"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatPassword}
              />
              <FormLabel htmlFor="number">Telefonnummer</FormLabel>
              <Input
                {...createInputFormStyles}
                id="number-input"
                name="number"
                placeholder="Telefonnr."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              <FormLabel htmlFor="city">Stad</FormLabel>
              <Input
                {...createInputFormStyles}
                id="city-input"
                name="city"
                placeholder="Stad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />

              {errors.repeatPassword && touched.repeatPassword && (
                <Box style={{ color: "red" }}>{errors.repeatPassword}</Box>
              )}
              {errors.general && (
                <Box style={{ color: "red" }}>{errors.general}</Box>
              )}

              <HStack spacing="2rem">
                <Button colorScheme="blue" onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit">Spara</Button>
              </HStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import {
  AddUserFormValues,
  SubmitUserValues,
} from "../../../model/AdminInterfaces";
import {
  formFlexStyles,
  formLabelStyles,
  inputFormStyles,
} from "../../admin/style/styleAdmin";
import { submitUser } from "../../../services/AdminServices";
import {
  cancelButtonStyles,
  greyButtonStyles,
} from "../../../components/buttons/style/buttonStyles";

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
            <Flex {...formFlexStyles}>
              <FormLabel {...formLabelStyles} htmlFor="fullName">
                Namn och Efternamn
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="fullName-input"
                name="fullName"
                placeholder="Namn och Efternamn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              <FormLabel {...formLabelStyles} htmlFor="email">
                Email
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="email-input"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormLabel {...formLabelStyles} htmlFor="password">
                Lösenord
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="password-input"
                name="password"
                type="password"
                placeholder="Lösenord"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormLabel {...formLabelStyles} htmlFor="repeatPassword">
                Upprepa Lösenord
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="repeatPassword-input"
                name="repeatPassword"
                type="password"
                placeholder="Upprepa Lösenord"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatPassword}
              />
              <FormLabel {...formLabelStyles} htmlFor="number">
                Telefonnummer
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="number-input"
                name="number"
                placeholder="Telefonnr."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              <FormLabel {...formLabelStyles} htmlFor="city">
                Stad
              </FormLabel>
              <Input
                {...inputFormStyles}
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

              <VStack spacing="2rem" pt="3rem">
                <Button {...cancelButtonStyles} onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit" {...greyButtonStyles}>
                  Spara
                </Button>
              </VStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

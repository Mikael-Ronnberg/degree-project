import { Button, Flex, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useFormik } from "formik";
import { useAuthStore } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";
import { AuthDetails } from "./AuthDetails";
import { LoginFormValues } from "../../../model/AdminInterfaces";
import { loginContainerStyles } from "../style/LoginStyles";

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = useAuthStore();
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Partial<LoginFormValues> = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },

    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        ).then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
          setErrorMessage("");
          navigate("/admin");
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          setErrorMessage(error.message);
        } else {
          console.error("An unknown error occurred:", error);
          setErrorMessage("An unknown error occurred");
        }
      }
    },
  });

  return (
    <Flex {...loginContainerStyles}>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing="2rem" pb="3rem">
          <Heading>Logga in</Heading>
          <Input
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </VStack>
        <HStack spacing="2rem">
          <Button type="submit">Login</Button>
          <AuthDetails />
        </HStack>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </Flex>
  );
};

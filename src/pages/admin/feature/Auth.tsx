import { Button, Flex, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { loginContainerStyles } from "../style/styleAdmin";
import { useFormik } from "formik";
import { useAuthStore } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

export const Auth = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { login, logout } = useAuthStore();
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Partial<FormValues> = {};
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
        ).then(() => {
          // const user = userCredential.user;
          // console.log(user);
          login();
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

  const logOut = async () => {
    try {
      await signOut(auth);
      logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex {...loginContainerStyles}>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing="2rem" pb="3rem">
          <Heading>Admin Login</Heading>

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
          <Button onClick={logOut}>Logout</Button>
        </HStack>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </Flex>
  );
};

import { Button, Flex, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import {
  auth,
  // googleProvider
} from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  // signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { loginContainerStyles } from "../style/styleAdmin";
import { useFormik } from "formik";

interface FormValues {
  email: string;
  password: string;
}

export const Auth = () => {
  const [errorMessage, setErrorMessage] = useState("");

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
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        setErrorMessage("");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          setErrorMessage(error.message); // This is now safe
        } else {
          console.error("An unknown error occurred:", error);
          setErrorMessage("An unknown error occurred");
        }
      }
    },
  });

  // const signIn = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const logout = async () => {
    try {
      await signOut(auth);
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
          <Button onClick={logout}>Logout</Button>
        </HStack>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </Flex>
  );
};

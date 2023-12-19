import { Button, Flex, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { auth, googleProvider } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { loginContainerStyles } from "../style/styleAdmin";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Flex {...loginContainerStyles}>
        <VStack spacing="2rem" pb="3rem">
          <Heading>Logga in</Heading>
          <Input
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </VStack>
        <HStack spacing="2rem">
          <Button onClick={signIn}>Logga in</Button>
          <Button onClick={signInWithGoogle}>Logga in med Google</Button>
          <Button onClick={logout}>Logout</Button>
        </HStack>
      </Flex>
    </>
  );
};

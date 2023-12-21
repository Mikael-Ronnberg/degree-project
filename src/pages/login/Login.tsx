import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./feature/LoginForm";
import { loginPageStyles } from "./style/LoginStyles";

export const Login = () => {
  return (
    <>
      <Flex {...loginPageStyles}>
        <LoginForm />
      </Flex>
    </>
  );
};

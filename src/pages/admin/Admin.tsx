import { Flex } from "@chakra-ui/react";
import { adminPageStyles } from "./style/styleAdmin";
import { AdminContainer } from "./feature/AdminContainer";

export const Admin = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <AdminContainer />
      </Flex>
    </>
  );
};

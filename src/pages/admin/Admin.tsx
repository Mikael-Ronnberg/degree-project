import { Flex } from "@chakra-ui/react";
import { adminPageStyles } from "./style/styleAdmin";
import { AdminContainer } from "./feature/AdminContainer";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";

export const Admin = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} navType={"admin"} />
      <Flex {...adminPageStyles}>
        <AdminContainer />
      </Flex>
    </>
  );
};

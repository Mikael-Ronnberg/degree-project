import { Flex } from "@chakra-ui/react";
import { adminPageStyles } from "./style/styleAdmin";
import { AdminContainer } from "./feature/AdminContainer";
import { adminNavItems } from "../../helpers/helpers";
import { Navbar } from "../../components/navbar/NavBar";

export const Admin = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <AdminContainer />
      </Flex>
    </>
  );
};

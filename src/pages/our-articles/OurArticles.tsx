import { Flex } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";

export const OurArticles = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}></Flex>
    </>
  );
};

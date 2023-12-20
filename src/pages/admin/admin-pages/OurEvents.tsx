import { Flex } from "@chakra-ui/react";
import { adminPageStyles } from "../style/styleAdmin";
import { Navbar } from "../../../components/navbar/NavBar";
import { adminNavItems } from "../../../helpers/helpers";

export const OurEvents = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}></Flex>
    </>
  );
};

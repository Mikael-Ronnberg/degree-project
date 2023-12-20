import { Flex } from "@chakra-ui/react";

import { adminPageStyles } from "../style/styleAdmin";
import { adminNavItems } from "../../../helpers/helpers";
import { Navbar } from "../../../components/navbar/NavBar";

export const CreateEvent = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}></Flex>
    </>
  );
};

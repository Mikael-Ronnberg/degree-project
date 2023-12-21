import { Flex } from "@chakra-ui/react";

import {
  adminPageStyles,
  ourMapContainerStyles,
} from "../admin/style/styleAdmin";

import { Navbar } from "../../components/navbar/NavBar";
import { CreateEventForm } from "./feature/CreateEventForm";
import { adminNavItems } from "../../helpers/AdminHelpers";

export const CreateEvent = () => {
  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <Flex {...ourMapContainerStyles}>
          <CreateEventForm />
        </Flex>
      </Flex>
    </>
  );
};

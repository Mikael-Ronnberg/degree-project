import { Flex } from "@chakra-ui/react";

import { adminPageStyles, ourMapContainerStyles } from "../style/styleAdmin";
import { adminNavItems } from "../../../helpers/helpers";
import { Navbar } from "../../../components/navbar/NavBar";
import { CreateEventForm } from "../feature/CreateEventForm";

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

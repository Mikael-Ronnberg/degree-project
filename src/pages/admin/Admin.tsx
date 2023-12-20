import { Flex } from "@chakra-ui/react";
import { adminPageStyles, sideBarStyles } from "./style/styleAdmin";
import { SideBar } from "./feature/SideBar";
import { AdminContainer } from "./feature/AdminContainer";

export const Admin = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <SideBar {...sideBarStyles} />
        <AdminContainer />
      </Flex>
    </>
  );
};

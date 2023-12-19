import { Flex } from "@chakra-ui/react";
import { adminPageStyles } from "./style/styleAdmin";
import { Auth } from "./feature/Auth";
import { ViewSubmittedLocations } from "./views/viewSubmittedLocations";

export const Admin = () => {
  return (
    <>
      <Flex {...adminPageStyles}>
        <Auth></Auth>
        <ViewSubmittedLocations />
      </Flex>
    </>
  );
};

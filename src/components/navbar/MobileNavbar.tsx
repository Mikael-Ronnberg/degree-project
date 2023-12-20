import { MobileMenu } from "./MobileMenu";
import { Box, Flex } from "@chakra-ui/react";
import { mobileNavContainerStyles } from "./style";
import { NavItem } from "../../helpers/helpers";

interface MobileNavbarProps {
  navItems: NavItem[];
}

export const MobileNavbar = ({ navItems }: MobileNavbarProps) => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>
          <MobileMenu navItems={navItems} />
        </Box>
        {/* <NavLogo/> */}
      </Flex>
    </>
  );
};

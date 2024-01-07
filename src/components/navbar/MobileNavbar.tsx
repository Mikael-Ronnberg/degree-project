import { MobileMenu } from "./MobileMenu";
import { Box, Flex } from "@chakra-ui/react";
import { mobileNavContainerStyles } from "./navbarStyle";
import { NavItem } from "../../model/GlobalInterfaces";
import { NavLogo } from "../icons/NavLogo";

interface MobileNavbarProps {
  navItems: NavItem[];
  navType?: string;
}

export const MobileNavbar = ({ navItems, navType }: MobileNavbarProps) => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box pl="0.3rem">
          <NavLogo />
        </Box>
        <Box>
          <MobileMenu navItems={navItems} navType={navType} />
        </Box>
      </Flex>
    </>
  );
};

import { MobileMenu } from "./MobileMenu";
import { Box, Flex } from "@chakra-ui/react";
import { mobileNavContainerStyles } from "./style";
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
        <NavLogo />
        <Box>
          <MobileMenu navItems={navItems} navType={navType} />
        </Box>
      </Flex>
    </>
  );
};

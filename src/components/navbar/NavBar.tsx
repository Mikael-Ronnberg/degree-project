import { Box } from "@chakra-ui/react";
import { navbarStyles } from "./style";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { NavItem } from "../../model/GlobalInterfaces";

interface NavbarProps {
  navItems: NavItem[];
  navType?: string;
}

export const Navbar = ({ navItems, navType }: NavbarProps) => {
  return (
    <>
      <Box {...navbarStyles}>
        <DesktopNavbar navItems={navItems} navType={navType} />
        <MobileNavbar navItems={navItems} navType={navType} />
      </Box>
    </>
  );
};

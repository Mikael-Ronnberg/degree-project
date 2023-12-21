import { Box } from "@chakra-ui/react";
import { navbarStyles } from "./style";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { NavItem } from "../../model/GlobalInterfaces";

interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <>
      <Box {...navbarStyles}>
        <DesktopNavbar navItems={navItems} />
        <MobileNavbar navItems={navItems} />
      </Box>
    </>
  );
};

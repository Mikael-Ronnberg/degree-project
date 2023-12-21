import { Link } from "react-router-dom";
import { desktopNavStyles, logoSectionStyles } from "./style";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { NavItem } from "../../model/GlobalInterfaces";

interface DesktopNavbarProps {
  navItems: NavItem[];
}

export const DesktopNavbar = ({ navItems }: DesktopNavbarProps) => {
  return (
    <>
      <Flex {...desktopNavStyles}>
        <Stack {...logoSectionStyles}>
          <Box>{/* <NavLogo/> */}</Box>
          {navItems.map((navItem) => (
            <Box p="1rem" key={navItem.label}>
              <Link to={navItem.to}>{navItem.label}</Link>
            </Box>
          ))}
        </Stack>
      </Flex>
    </>
  );
};

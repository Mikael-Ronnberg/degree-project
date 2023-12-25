import { Link, useNavigate } from "react-router-dom";
import { desktopNavStyles, logoSectionStyles } from "./style";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { NavItem } from "../../model/GlobalInterfaces";
import { userSignOut } from "../../services/AdminServices";

interface DesktopNavbarProps {
  navItems: NavItem[];
  navType?: string;
}

export const DesktopNavbar = ({ navItems, navType }: DesktopNavbarProps) => {
  const navigate = useNavigate();

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
          {navType && navType === "admin" ? (
            <Box>
              <Button
                onClick={() => {
                  userSignOut(), navigate("/");
                }}
              >
                Logga Ut
              </Button>
            </Box>
          ) : null}
        </Stack>
      </Flex>
    </>
  );
};

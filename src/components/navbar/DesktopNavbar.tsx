import { Link, useNavigate } from "react-router-dom";
import {
  desktopNavSectionStyles,
  desktopNavStyles,
  desktopTextStyles,
} from "./navbarStyle";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { NavItem } from "../../model/GlobalInterfaces";
import { userSignOut } from "../../services/AdminServices";
import { NavLogo } from "../icons/NavLogo";

interface DesktopNavbarProps {
  navItems: NavItem[];
  navType?: string;
}

export const DesktopNavbar = ({ navItems, navType }: DesktopNavbarProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid {...desktopNavStyles}>
        <GridItem {...desktopNavSectionStyles}>
          <NavLogo />
        </GridItem>
        {navItems.map((navItem) => (
          <GridItem key={navItem.label} {...desktopNavSectionStyles}>
            <Link to={navItem.to}>
              <Text {...desktopTextStyles}>{navItem.label}</Text>
            </Link>
          </GridItem>
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
      </Grid>
    </>
  );
};

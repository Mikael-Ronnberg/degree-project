import { Link, useNavigate } from "react-router-dom";
import {
  desktopNavSectionStyles,
  desktopNavStyles,
  desktopTextStyles,
} from "./navbarStyle";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { NavItem } from "../../model/GlobalInterfaces";
import { userSignOut } from "../../services/AdminServices";
import { NavLogo } from "../icons/NavLogo";
import { logoutButtonStyles } from "../buttons/style/buttonStyles";

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
          <GridItem
            key={navItem.label}
            {...desktopNavSectionStyles}
            _hover={{ bg: navItem.bgColor, color: "white" }}
          >
            <Link to={navItem.to}>
              <Text {...desktopTextStyles}>{navItem.label}</Text>
            </Link>
          </GridItem>
        ))}
        {navType && navType === "admin" ? (
          <GridItem {...desktopNavSectionStyles}>
            <Button
              onClick={() => {
                userSignOut(), navigate("/");
              }}
              {...logoutButtonStyles}
            >
              Logga Ut
            </Button>
          </GridItem>
        ) : null}
      </Grid>
    </>
  );
};

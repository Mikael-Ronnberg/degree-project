import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavItem } from "../../model/GlobalInterfaces";
import { userSignOut } from "../../services/AdminServices";
import { Burger } from "../icons/Burger";
import {
  burgerButtonStyles,
  drawerCloseButtonStyles,
} from "../buttons/style/buttonStyles";
import {
  drawerHeaderStyles,
  mobileMenuSectionStyles,
  mobileMenuStyles,
  mobileTextStyles,
} from "./navbarStyle";

interface MobileMenuProps {
  navItems: NavItem[];
  navType?: string;
}

export const MobileMenu = ({ navItems, navType }: MobileMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  return (
    <>
      <Button
        {...burgerButtonStyles}
        ref={btnRef}
        onClick={onOpen}
        aria-label="hamburger menu"
      >
        <Burger />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader {...drawerHeaderStyles}>
            <DrawerCloseButton {...drawerCloseButtonStyles} />
          </DrawerHeader>

          <DrawerBody bgColor="white">
            <Grid {...mobileMenuStyles}>
              {navItems.map((navItem, i) => (
                <Link to={navItem.to} key={i} onClick={onClose}>
                  <GridItem
                    {...mobileMenuSectionStyles}
                    _hover={{ bg: navItem.bgColor, color: "white" }}
                  >
                    <Text {...mobileTextStyles}>{navItem.label}</Text>
                  </GridItem>
                </Link>
              ))}
              {navType && navType === "admin" ? (
                <GridItem
                  {...mobileMenuSectionStyles}
                  cursor="pointer"
                  onClick={() => {
                    userSignOut(), navigate("/");
                  }}
                >
                  <Text {...mobileTextStyles}>Logga Ut</Text>
                </GridItem>
              ) : null}
            </Grid>
          </DrawerBody>

          <DrawerFooter bgColor="white"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

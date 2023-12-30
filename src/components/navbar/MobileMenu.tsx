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
  logoutButtonStyles,
} from "../buttons/style/buttonStyles";
import {
  drawerHeaderStyles,
  mobileMenuSectionStyles,
  mobileMenuStyles,
  mobileTextStyles,
} from "./navbarStyle";
// import { BigLogo } from "../icons/BigLogo";

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
      <Button {...burgerButtonStyles} ref={btnRef} onClick={onOpen}>
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
            {/* <BigLogo /> */}
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
                <GridItem {...mobileMenuSectionStyles}>
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
          </DrawerBody>

          <DrawerFooter bgColor="white"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

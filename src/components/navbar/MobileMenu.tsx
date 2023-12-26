import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavItem } from "../../model/GlobalInterfaces";
import { userSignOut } from "../../services/AdminServices";
import { Burger } from "../icons/Burger";
import { burgerButtonStyles } from "../buttons/style/buttonStyles";

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
          <DrawerCloseButton color="black" rounded="sm" />

          <DrawerBody bgColor="white">
            {navItems.map((navItem, i) => (
              <Link to={navItem.to} key={i}>
                <Box
                  color="black"
                  p="0.5rem"
                  //   _hover={{
                  //     bgColor: "brand.primary",
                  //     color: "brand.whiteCream",
                  //   }}
                >
                  {navItem.label}
                </Box>
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
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter bgColor="white"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

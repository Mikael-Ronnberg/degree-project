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
import { Link } from "react-router-dom";
import { NavItem } from "../../model/GlobalInterfaces";

interface MobileMenuProps {
  navItems: NavItem[];
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        // _hover={{
        //   bgColor: "transparent",
        // }}
        color="black"
        fontSize="1rem"
        pt="1rem"
      >
        Hamburgare
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
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter bgColor="white"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

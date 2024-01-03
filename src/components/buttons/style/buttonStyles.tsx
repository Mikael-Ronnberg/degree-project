import {
  ButtonProps,
  CloseButtonProps,
  ModalCloseButtonProps,
} from "@chakra-ui/react";

export const burgerButtonStyles: ButtonProps = {
  variant: "ghost",
  _hover: { bg: "transparent", textDecoration: "none" },
  _focus: { outline: "none", boxShadow: "none" },
  _active: { bg: "transparent" },
};

export const greyButtonStyles: ButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  minW: { base: "24rem" },
  fontWeight: "bold",
  px: "2rem",
  borderRadius: "50px",
  border: "solid 2px black",
  background: "white",
  _hover: {
    bgColor: "#c9c9c9",
    color: "black",
  },
};

export const purpleButtonStyles: ButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  w: { base: "20rem" },
  px: "1.4rem",
  borderRadius: "50px",
  border: "solid 2px black",
  color: "white",
  background: "brand.purple",
  _hover: {
    bgColor: "#d2befb",
    color: "black",
  },
};

export const modalCloseButtonStyles: ModalCloseButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  p: "1.4rem",
  // borderRadius: "50px",
  rounded: "sm",
  _hover: { bg: "transparent", textDecoration: "none" },
};

//   _hover={{
//     bgColor: "brand.primary",
//     color: "brand.whiteCream",
//   }}

export const drawerCloseButtonStyles: CloseButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  color: "black",
  p: "1.4rem",
  rounded: "sm",
  _hover: { bg: "transparent", textDecoration: "none" },
};

export const logoutButtonStyles: ButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  color: "black",
  p: "1.4rem",
  rounded: "sm",
  _hover: { bg: "white", textDecoration: "none" },
};

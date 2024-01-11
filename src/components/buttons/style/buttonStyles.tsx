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
  fontSize: { base: "1.2rem", md: "1.3rem", lg: "1.5rem" },
  minW: { base: "80vw", md: "27rem", lg: "30rem" },
  fontWeight: "bold",
  px: "2rem",
  borderRadius: "50px",
  border: "solid 2px black",
  background: "white",
  _hover: {
    transform: "translateY(-4px)",
    boxShadow: "-4px 4px 0px 0px black",
  },
  _active: {
    transform: "translateY(0px)",
    boxShadow: "0px 0px 0px 0px black",
    background: "white",
  },
};
export const greySmallButtonStyles: ButtonProps = {
  fontSize: { base: "1rem", md: "1.3rem" },
  minW: { base: "auto" },
  fontWeight: "bold",
  px: "2rem",
  borderRadius: "50px",
  border: "solid 2px black",
  background: "white",
  _hover: {
    transform: "translateY(-4px)",
    boxShadow: "-4px 4px 0px 0px black",
  },
  _active: {
    transform: "translateY(0px)",
    boxShadow: "0px 0px 0px 0px black",
    background: "white",
  },
};

export const cancelButtonStyles: ButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  minW: { base: "80vw", md: "27rem", lg: "30rem" },
  fontWeight: "bold",
  px: "2rem",
  borderRadius: "50px",
  border: "solid 2px black",
  colorScheme: "blue",
  _hover: {
    transform: "translateY(-4px)",
    boxShadow: "-4px 4px 0px 0px black",
  },
  _active: {
    transform: "translateY(0px)",
    boxShadow: "0px 0px 0px 0px black",
    background: "white",
  },
};

export const purpleButtonStyles: ButtonProps = {
  fontSize: { base: "1.2rem", md: "1.3rem", lg: "1.5rem" },
  minW: { base: "80vw", md: "27rem", lg: "30rem" },
  px: "2rem",
  borderRadius: "50px",
  border: "solid 2px black",
  color: "white",
  background: "brand.purple",
  _hover: {
    transform: "translateY(-4px)",
    boxShadow: "-4px 4px 0px 0px black",
  },
  _active: {
    transform: "translateY(0px)",
    boxShadow: "0px 0px 0px 0px black",
    background: "brand.purple",
  },
};
export const purpleDisabledButtonStyles: ButtonProps = {
  fontSize: { base: "1.1rem", sm: "1.2rem", md: "1.5rem" },
  minW: { base: "80vw", md: "27rem", lg: "30rem" },
  px: "2rem",
  opacity: "0.5",
  borderRadius: "50px",
  border: "solid 2px black",
  color: "white",
  background: "brand.purple",
  _hover: {
    transform: "translateY(-4px)",
    boxShadow: "-4px 4px 0px 0px black",
  },
  _active: {
    transform: "translateY(0px)",
    boxShadow: "0px 0px 0px 0px black",
    background: "brand.purple",
  },
};

export const modalCloseButtonStyles: ModalCloseButtonProps = {
  fontSize: { base: "1rem", sm: "1.3rem", md: "1.5rem" },
  p: "1.2rem",
  rounded: "sm",
  _hover: { bg: "transparent", textDecoration: "none" },
};

export const drawerCloseButtonStyles: CloseButtonProps = {
  fontSize: { base: "1.2rem", sm: "1.3rem", md: "1.5rem" },
  color: "black",
  p: "1.4rem",
  rounded: "sm",
  _hover: { bg: "transparent", textDecoration: "none" },
};

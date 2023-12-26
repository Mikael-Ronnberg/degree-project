import { ButtonProps } from "@chakra-ui/react";

export const burgerButtonStyles: ButtonProps = {
  variant: "ghost",
  _hover: { bg: "transparent", textDecoration: "none" },
  _focus: { outline: "none", boxShadow: "none" },
  _active: { bg: "transparent" },
};

export const greyButtonStyles: ButtonProps = {
  fontSize: "1.5rem",
  p: "1.4rem",
  borderRadius: "50px",
  border: "solid 2px black",
};

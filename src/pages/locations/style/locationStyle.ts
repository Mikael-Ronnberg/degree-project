import {
  BoxProps,
  FlexProps,
  HeadingProps,
  InputProps,
  TextareaProps,
} from "@chakra-ui/react";

export const locationPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "linear-gradient(to top,#67D8C0 , #0F769F)",
  pt: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
  w: "100vw",
  gap: "2rem",
  minH: "100vh",
  overflow: "hidden",
  pb: { base: "2rem", lg: "2.3rem" },
};

export const mapContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  background: "brand.pink",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "80vh",
  border: "black 2px solid",
  direction: "column",
};

export const mapHeadingStyles: HeadingProps = {
  fontSize: { base: "3rem", md: "3.2rem", lg: "3.5rem" },
  textAlign: "center",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const mapBoxStyles: BoxProps = {
  border: "black 2px solid",
  w: "60vw",
  h: "60vh",
  zIndex: "2",
};

export const searchInputStyles: InputProps = {
  variant: "outline",
  border: "2px solid black",
  background: "white",
  placeholder: "Sök Plats",
  w: "60vw",
  rounded: "sm",
  m: "1rem",
};

export const searchDropdownStyles: BoxProps = {
  position: "absolute",
  w: "60vw",
  bg: "white",
  zIndex: "dropdown",
};

export const formContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  background: "brand.green",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "80vh",
  outline: "black 2px solid",
  direction: "row",
};

export const formContentStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: "auto",
  h: "80vh",
  direction: "column",
};

export const inputStyles: InputProps = {
  variant: "outline",
  background: "white",
  rounded: "sm",
  border: "black 2px solid",
  w: "60vw",
  m: "1rem",
};

export const textareaStyles: TextareaProps = {
  variant: "outline",
  rounded: "sm",
  border: "black 2px solid",
  background: "white",
  w: "60vw",
  h: "40vh",
  m: "1rem",
};

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
  background: "brand.green",
  pt: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
  // pt: "5rem",
  w: "100vw",
  gap: "2rem",
  minH: "100vh",
  overflow: "hidden",
  pb: { base: "2rem", lg: "2.3rem" },
};

export const mapContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  // background: "white",
  w: "90vw",
  h: "80vh",
  border: "black 2px solid",
  direction: "column",
};

export const mapHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.3rem", lg: "2.5rem" },
};

export const mapBoxStyles: BoxProps = {
  border: "black 2px solid",
  w: "60vw",
  h: "60vh",
  zIndex: "-3",
};

export const searchInputStyles: InputProps = {
  variant: "outline",
  border: "1px solid black",
  w: "10vw",
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
  w: "90vw",
  h: "80vh",
  border: "black 2px solid",
  direction: "row",
};

export const formContentStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: "90vw",
  h: "80vh",
  border: "black 2px solid",
  direction: "column",
};

export const inputStyles: InputProps = {
  variant: "outline",
  rounded: "sm",
  w: "60vw",
  m: "1rem",
};

export const textareaStyles: TextareaProps = {
  variant: "outline",
  rounded: "sm",
  w: "60vw",
  h: "40vh",
  m: "1rem",
};

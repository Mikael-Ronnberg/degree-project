import {
  BoxProps,
  FlexProps,
  InputProps,
  StackProps,
  TextProps,
  TextareaProps,
} from "@chakra-ui/react";

export const adminPageStyles: FlexProps = {
  boxSizing: "border-box",
  align: "center",
  justify: "center",
  direction: "column",
  backgroundColor: "grey",
  h: "auto",
  w: "100vw",
  mt: "3rem",
};

export const subLocationsStyles: StackProps = {
  h: "100vh",
  w: { s: "90vw", l: "85vw" },
  backgroundColor: "grey",
};

export const adminContainerStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "center",
  w: { s: "85vw", l: "80vw" },
};

export const loginContainerStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "center",
  h: "70vh",
  w: { sm: "90vw", lg: "70vh" },
  backgroundColor: "white",
  border: "2px solid black",
  p: "3rem",
};

export const subLocationCardStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "flexStart",
  h: "auto",
  w: { sm: "90vw", lg: "65vw" },
  backgroundColor: "white",
  border: "1px solid black",
  p: "2rem",
  m: "2rem",
};

export const subLocationTextStyles: TextProps = {
  m: "0.5rem",
};

export const ourMapContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { sm: "90vw", lg: "65vw" },
  h: "auto",
  border: "black 1px solid",
  direction: "column",
  background: "white",
  mt: "3rem",
  p: "2rem",
};

export const ourMapBoxStyles: BoxProps = {
  border: "black 1px solid",
  w: "40vw",
  h: "35vh",
  zIndex: "1",
};

export const ourFormContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { sm: "90vw", lg: "65vw" },
  h: "auto",
  border: "black 1px solid",
  direction: "row",
  background: "white",
  m: "2rem",
};

export const ourFormStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { sm: "90vw", lg: "65vw" },
  h: "auto",
  direction: "column",
  m: "2rem",
};

export const ourInputStyles: InputProps = {
  variant: "outline",
  border: "black 1px solid",
  rounded: "sm",
  w: "60vw",
  m: "1rem",
};

export const ourTextareaStyles: TextareaProps = {
  border: "black 1px solid",
  variant: "outline",
  rounded: "sm",
  w: "60vw",
  h: "40vh",
  m: "1rem",
};

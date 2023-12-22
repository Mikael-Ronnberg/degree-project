import {
  BoxProps,
  FlexProps,
  ImageProps,
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
  minH: "100vh",
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

export const adminCardStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "center",
  h: "auto",
  w: { sm: "90vw", lg: "65vw" },
  backgroundColor: "white",
  border: "1px solid black",
  p: "2rem",
  m: "2rem",
};

export const adminCardTextStyles: TextProps = {
  m: "0.5rem",
};

export const subImageTextCardStyles: TextProps = {
  fontSize: "0.7rem",
};

export const mainImageCardStyles: ImageProps = {
  w: "80vw",
};

export const subImageCardStyles: ImageProps = {
  w: "60vw",
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

export const createContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { sm: "90vw", lg: "65vw" },
  h: "80vh",
  border: "black 1px solid",
  direction: "column",
  background: "white",
  mt: "3rem",
  p: "2rem",
};

export const createFormStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { sm: "90vw", lg: "65vw" },
  h: "auto",
  border: "black 2px solid",
  direction: "column",
  background: "white",
  mt: "3rem",
  p: "2rem",
};

export const createInputFormStyles: InputProps = {
  variant: "outline",
  border: "black 2px solid",
  rounded: "sm",
  w: "60vw",
  m: "1rem",
};

export const createTextareaFormStyles: TextareaProps = {
  border: "black 2px solid",
  variant: "outline",
  rounded: "sm",
  w: "60vw",
  h: "40vh",
  m: "1rem",
};

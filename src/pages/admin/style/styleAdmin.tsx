import {
  BoxProps,
  FlexProps,
  HeadingProps,
  ImageProps,
  InputProps,
  ModalBodyProps,
  ModalContentProps,
  ModalHeaderProps,
  StackProps,
  TextProps,
  TextareaProps,
} from "@chakra-ui/react";

export const adminPageStyles: FlexProps = {
  align: "center",
  justify: "center",
  direction: "column",
  backgroundColor: "grey",
  minH: "100vh",
  w: "100vw",
  py: { base: "4rem", md: "5.5rem", lg: "6rem" },
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
  gap: "10rem",
  border: "black 1px solid",
  direction: "column",
  background: "white",
  mt: "3rem",
  p: "2rem",
};

export const createHeadingStyles: HeadingProps = {
  fontSize: { base: "2.5rem", md: "2.8rem", lg: "3rem" },
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

export const createModalStyles: ModalContentProps = {
  // background: "brand.pink",
  // border: "solid 2px black",
  maxW: { base: "inherit" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  m: { base: "5rem", md: "6rem" },
  mx: { lg: "8rem", xl: "20rem" },
  pb: "2rem",
  rounded: "sm",
};

export const createModalHeaderStyles: ModalHeaderProps = {
  fontSize: { base: "1.4rem", md: "1.6rem", lg: "2rem" },
};

export const createModalBodyStyles: ModalBodyProps = {
  // maxW: "800px",
};

import {
  BoxProps,
  FlexProps,
  HeadingProps,
  InputProps,
  TextProps,
  TextareaProps,
} from "@chakra-ui/react";

export const contactPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
  w: "100vw",
  gap: "5rem",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const formWrapperStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "brand.yellow",
  border: "2px solid black",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const formContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  p: "2rem",
  h: "auto",
  maxW: { base: "95vw", sm: "95vw", md: "80vw", lg: "1000px" },
  background: "white",
  outline: "2px solid black",
};

export const headingContainerStyles: FlexProps = {
  outline: "2px solid black",
  justify: "center",
  align: "center",
  maxW: { base: "95vw", sm: "95vw", md: "80vw", lg: "1000px" },
  background: "white",
};

export const formHeadingStyles: HeadingProps = {
  fontSize: { base: "3.2rem", md: "2.6rem", lg: "3.5rem" },
  textAlign: "center",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const contactFormInputStyles: InputProps = {
  w: { base: "90vw", sm: "90vw", md: "75vw", xl: "950px" },
  border: "2px solid black",
  rounded: "sm",
};

export const contactFormTextareaStyles: TextareaProps = {
  w: { base: "90vw", sm: "90vw", md: "75vw", xl: "950px" },
  border: "2px solid black",
  rounded: "sm",
};

export const supportWrapperStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "brand.green",
  border: "2px solid black",
};

export const supportContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  p: "2rem",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
};

export const supportBoxWrapperStyles: BoxProps = {
  w: { base: "90vw", sm: "90vw", md: "75vw", lg: "950px" },
  h: "auto",
};

export const supportTextStyles: TextProps = {
  fontSize: { base: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
  color: "black",
};

export const supportQRStyles: FlexProps = {
  justify: "center",
  align: "center",
  background: "white",
  w: "inherit",
  border: "2px solid black",
};

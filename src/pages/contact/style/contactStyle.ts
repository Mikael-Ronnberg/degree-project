import {
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
  pt: "2rem",
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
  //   w: { base: "95vw", lg: "95vw" },
  w: "100vw",
  background: "brand.yellow",
  border: "2px solid black",
};

export const formContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  p: "2rem",
  w: { base: "95vw", lg: "95vw" },
  background: "white",
  outline: "2px solid black",
};

export const headingContainerStyles: FlexProps = {
  outline: "2px solid black",
  justify: "center",
  align: "center",
  w: { base: "95vw", lg: "95vw" },
  background: "white",
};

export const formHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", sm: "2rem", md: "2.6rem", lg: "3.5rem" },
};

export const contactFormInputStyles: InputProps = {
  w: { base: "20rem", sm: "20rem", md: "26rem", lg: "35rem" },
  border: "2px solid black",
  rounded: "sm",
};

export const contactFormTextareaStyles: TextareaProps = {
  w: { base: "20rem", sm: "20rem", md: "26rem", lg: "35rem" },
  border: "2px solid black",
  rounded: "sm",
};

export const supportWrapperStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  //   w: { base: "95vw", lg: "95vw" },
  w: "100vw",
  background: "brand.green",
  border: "2px solid black",
};

export const supportContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  p: "2rem",
  w: { base: "95vw", lg: "95vw" },
  //   background: "white",
};

export const supportTextStyles: TextProps = {
  fontSize: { base: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
  color: "black",
};

export const supportQRStyles: FlexProps = {
  justify: "center",
  align: "center",
  background: "white",
  w: "100vw",
  border: "2px solid black",
};

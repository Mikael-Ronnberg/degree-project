import {
  BoxProps,
  FlexProps,
  HeadingProps,
  ModalContentProps,
  ModalHeaderProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const eventPageStyles: FlexProps = {
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

export const eventHeadingBox: BoxProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "white",
  border: "solid 2px black",
  py: { base: "1rem", md: "2rem", lg: "2.2rem" },
  px: { base: "1.3rem", md: "2.8rem", lg: "2.2rem" },
  justifySelf: "flex-start",
};

export const eventHeadingStyles: HeadingProps = {
  fontSize: { base: "4rem", md: "4.2rem", lg: "4.6rem" },
  textAlign: "center",
};

export const eventContainerStyles: FlexProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  justify: "center",
  align: "center",
  direction: "column",
  gap: "3rem",
};

export const eventCardContainerStyles: FlexProps = {
  w: { base: "90vw", md: "85vw", lg: "80vw", xl: "1100px" },
  justify: "space-between",
  align: "stretch",
  background: "white",
  outline: "2px solid black",
  h: "auto",
};

export const eventCardRedBoxStyles: StackProps = {
  w: { base: "20vw", md: "25vw", lg: "20vw" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "brand.red",
  outline: "2px solid black",
  p: "2rem",
  h: "inherit",
};

export const eventCardDateStyles: TextProps = {
  fontWeight: "bold",
  fontSize: { base: "1.1rem", md: "1.3rem", lg: "1.6rem" },
  px: { base: "3rem", md: "4rem" },
};

export const eventCardWhiteBoxStyles: StackProps = {
  w: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "2rem",
};

export const eventCardHeadingStyles: TextProps = {
  fontWeight: "bold",
  fontSize: { base: "1.7rem", md: "2rem", lg: "2.1rem" },
};

export const eventCardDescSyles: TextProps = {
  fontSize: { base: "1.1rem", md: "1.2rem", lg: "1.3rem" },
};

export const eventModalContentStyles: ModalContentProps = {
  border: "solid 2px black",
  m: { sm: "5rem", md: "10rem", lg: "16rem" },
  rounded: "sm",
};

export const eventModalHeaderStyles: ModalHeaderProps = {
  fontWeight: "bold",
  fontSize: { base: "1.7rem", md: "2rem", lg: "2.1rem" },
  outline: "solid black 2px",
};

export const eventModalContainerStyles: StackProps = {
  display: "flex",
  justifyContent: "center",
  align: "stretch",
};

export const eventModalRedStackStyles: StackProps = {
  gap: "3rem",
  background: "brand.red",
  p: "2rem",
};

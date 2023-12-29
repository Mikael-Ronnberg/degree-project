import { FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";

export const notFoundPageStyles: FlexProps = {
  align: "center",
  justify: "center",
  direction: "column",
  backgroundColor: "brand.purple",
  minH: "100vh",
  w: "100vw",
  py: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
};

export const notFoundContainerStyles: FlexProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  minH: "100vh",
  border: "solid black 2px",
  justify: "center",
  background: "white",
  align: "center",
  direction: "column",
  gap: "10rem",
};

export const notFoundHeadingStyles: HeadingProps = {
  fontSize: { base: "3rem", md: "3.5rem", lg: "4rem" },
};

export const notFoundTextStyles: TextProps = {
  fontSize: { base: "1.2rem", md: "1.5rem", lg: "1.8rem" },
  px: "2rem",
  textAlign: "center",
};

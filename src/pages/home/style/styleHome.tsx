import { FlexProps, TextProps } from "@chakra-ui/react";

export const homePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: "2rem",
  w: "100vw",
  minH: "100vh",
};

export const introContainerStyle: FlexProps = {
  background: "brand.blue",
  w: { sm: "100vw", md: "90vw" },
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
  gap: "3rem",
};

export const introWhiteBoxStyles: FlexProps = {
  border: "solid black 2px",
  w: { sm: "100vw", md: "90vw" },
  h: "auto",
  background: "white",
  justify: "center",
  align: "center",
  px: { sm: "1rem", md: "1.2rem", lg: "2.2rem" },
  py: "1rem",
};

export const introWhiteTextStyles: TextProps = {
  textAlign: "center",
  color: "black",
  fontSize: { sm: "1rem", md: "1.1rem", lg: "1.5rem" },
  fontWeight: "bold",
};

export const litterContainerStyles: FlexProps = {
  background: "brand.blue",
  w: { sm: "100vw", md: "90vw" },
  minH: "100vh",
  justify: "center",
  align: "center",
  direction: "column",
  gap: "3rem",
};

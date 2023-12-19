import { FlexProps, TextProps } from "@chakra-ui/react";

export const adminPageStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "center",
  h: "100vh",
  w: "100vw",
  backgroundColor: "grey",
};

export const loginContainerStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "center",
  h: "50vh",
  w: { sm: "90vw", lg: "70vh" },
  backgroundColor: "white",
  border: "2px solid black",
  p: "3rem",
};

export const oneLocationStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "flexStart",
  h: "auto",
  w: { sm: "90vw", lg: "70vh" },
  backgroundColor: "white",
  border: "1px solid black",
  p: "2rem",
  m: "2rem",
};

export const oneLocationTextStyle: TextProps = {
  m: "0.5rem",
};

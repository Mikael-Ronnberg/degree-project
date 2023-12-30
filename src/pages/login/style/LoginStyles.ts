import { FlexProps } from "@chakra-ui/react";

export const loginPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: "100vw",
  h: "100vh",
  background: "grey",
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

import {
  FlexProps,
  ListItemProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const adminPageStyles: FlexProps = {
  direction: "row",
  justify: "space-between",
  align: "center",
  h: "auto",
  w: "100vw",
  backgroundColor: "grey",
};

export const sideBarStyles: StackProps = {
  w: { s: "10vw", l: "15vw" },
  h: "100vh",
  border: "1px solid black",
  background: "white",
  m: "2rem",
  p: "1rem",
};

export const sideBarListStyle: ListItemProps = {
  p: "1.5rem",
  fontSize: { s: "1rem", l: "1.2rem" },
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

export const oneLocationStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "flexStart",
  h: "auto",
  w: { sm: "50vw", lg: "65vw" },
  backgroundColor: "white",
  border: "1px solid black",
  p: "2rem",
  m: "2rem",
};

export const oneLocationTextStyle: TextProps = {
  m: "0.5rem",
};

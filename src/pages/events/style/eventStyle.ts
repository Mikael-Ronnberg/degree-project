import {
  BoxProps,
  FlexProps,
  HeadingProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const eventPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: "5rem",
  w: "100vw",
  gap: "2rem",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const eventHeadingBox: BoxProps = {
  background: "white",
  border: "solid 2px black",
};

export const eventHeadingStyles: HeadingProps = {
  fontSize: "2rem",
};

export const eventContainerStyles: FlexProps = {
  gap: "3rem",
};

export const eventCardContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
};

export const eventCardRedBoxStyles: StackProps = {
  background: "brand.red",
};

export const eventCardDateStyles: TextProps = {
  fontWeight: "bold",
};

export const eventCardWhiteBoxStyles: StackProps = {
  background: "white",
};

export const eventCardHeadingStyles: TextProps = {
  fontWeight: "bold",
};

export const eventCardDescSyles: TextProps = {
  fontSize: "1rem",
};

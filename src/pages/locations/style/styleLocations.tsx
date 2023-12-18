import {
  BoxProps,
  FlexProps,
  InputProps,
  TextareaProps,
} from "@chakra-ui/react";

export const pageContainerStyles: FlexProps = {
  w: "100vw",
  h: "200vh",
  justify: "center",
  align: "center",
  direction: "column",
};

export const mapBoxStyles: BoxProps = {
  border: "black 2px solid",
  w: "60vw",
  h: "60vh",
};

export const mapContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: "90vw",
  h: "80vh",
  border: "black 2px solid",
  direction: "column",
};

export const formContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: "90vw",
  h: "80vh",
  border: "black 2px solid",
  direction: "row",
};

export const formContentStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: "90vw",
  h: "80vh",
  border: "black 2px solid",
  direction: "column",
};

export const inputStyles: InputProps = {
  variant: "outline",
  rounded: "sm",
  w: "60vw",
  m: "1rem",
};

export const textareaStyles: TextareaProps = {
  variant: "outline",
  rounded: "sm",
  w: "60vw",
  h: "40vh",
  m: "1rem",
};

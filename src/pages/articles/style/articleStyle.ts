import {
  FlexProps,
  HeadingProps,
  ImageProps,
  TextProps,
} from "@chakra-ui/react";

export const articlePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: "5rem",
  w: "100vw",
  gap: "5rem",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const articleContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  w: "90vw",
  h: "auto",
};

export const articleCardStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  w: "80vw",
  border: "2px solid black",
};

export const articleImageStyles: ImageProps = {
  w: "",
};

export const articleCategoryStyles: TextProps = {
  w: "",
};

export const articleDateStyles: TextProps = {
  w: "",
};

export const articleHeadingStyles: HeadingProps = {
  fontSize: "",
};

export const articleSubHeadingStyles: TextProps = {
  fontSize: "",
};

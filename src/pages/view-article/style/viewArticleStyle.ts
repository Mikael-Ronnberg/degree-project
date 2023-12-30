import {
  FlexProps,
  HeadingProps,
  ImageProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const viewArticlePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: { base: "5rem", sm: "5.5rem", md: "6rem", lg: "8rem" },
  w: "100vw",
  gap: "5rem",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const viewArticleContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  w: { base: "100vw", md: "95vw" },
  maxW: "1500px",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const headerSectionVStackStyles: StackProps = {
  spacing: "2rem",
};

export const headerSectionHStackStyles: StackProps = {
  w: "20vw",
  justify: "space-between",
};

export const headerSectionHeadingStyles: HeadingProps = {
  fontSize: "2.5rem",
  letterSpacing: "0.1rem",
};

export const headerSectionCategoryStyles: TextProps = {
  minW: "5rem",
  m: "0.5rem",
  background: "brand.pink",
  borderRadius: "50px",
  textAlign: "center",
  px: "0.7rem",
  fontSize: { base: "1rem", md: "0.7rem", lg: "0.8rem" },
  fontWeight: "bold",
};

export const headerSectionImageStyles: ImageProps = {
  objectFit: "contain",
};

export const headerSectionDateStyles: TextProps = {
  fontSize: { base: "1rem", md: "0.7rem", lg: "0.8rem" },
};

export const textSectionStackStyles: StackProps = {
  spacing: "2rem",
};

export const textSectionBoldStyles: TextProps = {
  fontWeight: "bold",
};

export const textSectionNormalStyles: TextProps = {
  w: "",
};

export const imageSectionStackStyles: StackProps = {
  spacing: "2rem",
};

export const imageSectionTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "0.7rem", lg: "0.8rem" },
};

export const authorSectionStackStyles: StackProps = {
  spacing: "2rem",
};

export const authorSectionTextStyles: TextProps = {
  fontWeight: "bold",
};

export const authorSectionCategoryStyles: TextProps = {
  minW: "5rem",
  m: "0.5rem",
  background: "brand.pink",
  borderRadius: "50px",
  textAlign: "center",
  px: "0.7rem",
  fontSize: { base: "1rem", md: "0.7rem", lg: "0.8rem" },
  fontWeight: "bold",
};

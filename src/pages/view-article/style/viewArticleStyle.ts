import {
  BoxProps,
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
  background: "linear-gradient(to bottom, #fcfcfc, #e2e8fa)",
  pt: { base: "5rem", md: "6rem", lg: "8rem" },
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
  maxW: "1280px",
  minH: "100vh",
  border: "2px solid black",
  overflow: "hidden",
  mb: "2rem",
};

export const headerSectionVStackStyles: StackProps = {
  w: { base: "95vw", md: "90vw", xl: "1100px" },
  spacing: "2rem",
};

export const headerSectionFlexStyles: FlexProps = {
  w: { base: "100vw", md: "90vw", lg: "900px", xl: "1000px" },
  align: "center",
  justify: "space-between",
  py: { base: "1rem" },
  px: { base: "0.5rem", md: "1.5rem", lg: "0.2rem" },
};

export const headerSectionHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.3rem", lg: "2.5rem" },
  letterSpacing: "0.1rem",
  pt: { base: "2rem", md: "2.5rem", lg: "3rem" },
  px: { base: "0.7rem", md: "0.8rem", lg: "1rem" },
};

export const headerSectionCategoryStyles: TextProps = {
  minW: "5rem",
  background: "brand.pink",
  borderRadius: "50px",
  textAlign: "center",
  px: "0.7rem",
  fontSize: { base: "0.8rem", md: "0.7rem", lg: "0.9rem" },
  fontWeight: "bold",
};

export const headerSectionImageStyles: ImageProps = {
  w: { base: "100vw", md: "800px", lg: "900px", xl: "1000px" },
  h: { base: "", md: "400px", lg: "500px", xl: "550px" },
  objectFit: "cover",
  loading: "lazy",
  mb: "2rem",
};

export const headerSectionDateStyles: TextProps = {
  fontSize: { base: "0.8rem", md: "0.7rem", lg: "0.9rem" },
};

export const textSectionStackStyles: StackProps = {
  spacing: "2rem",
  w: { base: "95vw", md: "90vw", xl: "1100px" },
};

export const textSectionStyles: TextProps = {
  w: { xl: "1000px" },
  fontSize: { base: "1rem", md: "1.1rem", lg: "1.2rem" },
  py: { base: "0.5rem", md: "0.8rem", lg: "0.9rem" },
  px: { base: "0.8rem", md: "0.4rem", lg: "0.9rem" },
};

export const imageSectionStackStyles: StackProps = {
  w: { base: "100vw", md: "95vw", xl: "1100px" },
  spacing: "0rem",
  py: { base: "1rem" },
};

export const imageSectionStyles: ImageProps = {
  w: { base: "100v", md: "800px", lg: "900px", xl: "1000px" },
  h: { base: "", md: "400px", lg: "500px", xl: "550px" },
  py: { base: "0.2rem" },
  objectFit: "cover",
  loading: "lazy",
};

export const imageSectionTextStyles: TextProps = {
  w: { base: "100vw", md: " 90vw", lg: "900px", xl: "1000px" },
  fontSize: { base: "0.7rem", lg: "0.8rem" },
  fontStyle: "italic",
  py: { base: "0.2rem" },
  px: { base: "1rem" },
};

export const authorSectionBoxStyles: BoxProps = {
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "center",
  flexDirection: "column",
  gap: "2rem",
  w: { base: "95vw", md: "90vw", xl: "1000px" },
  py: { base: "1rem" },
  px: { base: "1rem" },
};

export const authorSectionTextStyles: TextProps = {
  fontSize: { base: "0.8rem", lg: "1rem" },
};

export const authorSectionCategoryStyles: TextProps = {
  minW: "5rem",
  textAlign: "center",
  fontSize: { base: "0.8rem", lg: "1rem" },
  fontWeight: "bold",
};

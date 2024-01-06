import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  ImageProps,
  TextProps,
} from "@chakra-ui/react";

export const articlePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "linear-gradient(to bottom, #fcfcfc, #e2e8fa)",
  pt: { base: "6rem", md: "5.5rem", lg: "7.5rem" },
  w: "100vw",
  gap: "5rem",
  minH: "auto",
  overflow: "hidden",
};

export const articleContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  w: { base: "100vw", md: "95vw" },
  maxW: "1280px",
  minH: "auto",
  border: "2px solid black",
  mb: "2rem",
  overflow: "hidden",
};

export const articleHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.3rem", lg: "2.7rem" },
  letterSpacing: "0.1rem",
  py: { base: "1.7rem", md: "3rem", lg: "4rem" },
};

export const articleCardGridStyles: GridProps = {
  templateColumns: { base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
  w: { base: "100vw", md: "95vw" },
  maxW: "1200px",
  border: "2px solid black",
  h: "auto",
};

export const articleTextItemStyles: GridItemProps = {
  display: "flex",
  justifyContent: "stretch",
  alignItems: "stretch",
  h: "auto",
  p: "1rem",
};

export const articleTextFlexStyles: FlexProps = {
  w: "100%",
  align: "center",
  justify: "space-between",
};

export const articleCardImageBoxStyles: BoxProps = {
  outline: "2px solid black",
  display: "flex",
  alignItems: "fit-content",
  justifyContent: "center",
  overflow: "hidden",
};

export const articleCardImageStyles: ImageProps = {
  w: { base: "100vw", md: "600px", lg: "900px", xl: "1000px" },
  h: { base: "250px", md: "300px", lg: "400px" },
  objectPosition: "center",
  objectFit: "cover",
  loading: "lazy",
};

export const articleCardCategoryStyles: TextProps = {
  minW: "5rem",
  m: "0.5rem",
  background: "brand.pink",
  borderRadius: "50px",
  textAlign: "center",
  px: "0.7rem",
  fontSize: { base: "0.6rem", md: "0.7rem", lg: "0.8rem" },
  fontWeight: "bold",
};

export const articleCardDateStyles: TextProps = {
  fontSize: { base: "0.6rem", md: "0.7rem", lg: "0.8rem" },
};

export const articleCardHeadingStyles: HeadingProps = {
  fontSize: { base: "1.4rem", md: "1.2rem", lg: "2rem" },
  m: "0.5rem",
};

export const articleCardSubHeadingStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.2em", lg: "1.3rem" },
  m: "0.5rem",
};

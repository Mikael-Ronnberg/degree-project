import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  TextProps,
} from "@chakra-ui/react";

export const eventPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "brand.green",
  pt: { base: "6rem", md: "5.5rem", lg: "7.5rem" },
  w: "100vw",
  gap: "2rem",
  minH: "100vh",
  overflow: "hidden",
  pb: { base: "2rem", lg: "2.3rem" },
  border: "2px solid black",
};

export const eventHeadingBox: BoxProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "white",
  border: "solid 2px black",
  py: { base: "1rem", md: "2rem", lg: "2.2rem" },
  px: { base: "1.3rem", md: "2.8rem", lg: "1rem" },
  justifySelf: "flex-start",
};

export const eventHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "3rem", lg: "4.3rem" },
  textAlign: "center",
};

export const eventContainerStyles: FlexProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
};

export const eventCardContainerStyles: GridProps = {
  templateColumns: { base: "repeat(1, 1fr)", md: "25% 75%" },
  w: { base: "100vw", md: "95vw", lg: "80vw", xl: "1100px" },
  border: "2px solid black",
  background: "white",
  h: "auto",
};

export const eventCardRedItemStyles: GridItemProps = {
  display: "flex",
  flexDirection: { base: "row", md: "column" },
  w: "auto",
  justifyContent: { base: "space-between", md: "center" },
  h: "h",
  gap: "1rem",
  alignItems: "center",
  outline: "2px solid black",
  background: "brand.red",
  p: { base: "1rem", md: "2rem" },
  px: { base: "2rem", md: "4rem" },
};

export const eventCardDateStyles: TextProps = {
  fontWeight: "bold",
  fontSize: { base: "1.6em", md: "1.3rem", lg: "1.6rem" },
};

export const eventCardWhiteItemStyles: GridItemProps = {
  w: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: "2rem",
  h: "auto",
};

export const eventCardHeadingStyles: TextProps = {
  fontWeight: "bold",
  fontSize: { base: "1.7rem", md: "2rem", lg: "2.1rem" },
};

export const eventCardDescSyles: TextProps = {
  fontSize: { base: "1.1rem", md: "1.2rem", lg: "1.3rem" },
};

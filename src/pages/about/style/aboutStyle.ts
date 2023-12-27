import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  TextProps,
} from "@chakra-ui/react";

import { theme } from "./../../../theme";

export const aboutPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: `linear-gradient(to bottom,white, ${theme.colors.brand.purple})`,
  pt: { base: "4rem", lg: "6rem" },
  w: "100vw",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const introGridStyles: GridProps = {
  w: { base: "100vw", md: "95vw" },
  background: "white",
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" },
  h: "auto",
};

export const introItemStyles: GridItemProps = {
  outline: "1px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const introHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", sm: "2rem", md: "2.6rem", lg: "3.5rem" },
};

export const introTextStyles: TextProps = {
  outline: "1px black solid",
  background: "brand.green",
  fontSize: { base: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
};

export const snorkelGridStyles: GridProps = {
  background: "white",
  outline: "1px black solid",
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
};

export const snorkelHeadingItemStyles: GridItemProps = {
  outline: "1px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const snorkelItemStyles: GridItemProps = {
  background: "brand.darkPink",
  outline: "1px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const snorkelBoxStyles: BoxProps = {
  outline: "1px black solid",
};

export const snorkelHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", sm: "2rem", md: "2.6rem", lg: "3.5rem" },
};

export const infoGridStyles: GridProps = {
  background: "white",
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
};

export const infoHeadingItemStyles: GridItemProps = {
  background: "brand.yellow",
  outline: "1px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const infoTextItemStyles: GridItemProps = {
  outline: "1px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  p: "1rem",
};

export const infoHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", sm: "2rem", md: "2.6rem", lg: "3.5rem" },
  color: "white",
};

export const infoTextStyles: TextProps = {
  fontWeight: "bold",
  fontSize: { base: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
  pb: { base: "3rem", lg: "" },
};

export const contactGridStyles: GridProps = {
  w: { base: "90vw", md: "80vw" },
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
};

export const contactItemStyles: GridItemProps = {
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  p: "1rem",
};

export const contactTextStyles: TextProps = {
  color: "white",
  fontWeight: "bold",
  fontSize: { base: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
  pb: { base: "3rem", lg: "" },
};

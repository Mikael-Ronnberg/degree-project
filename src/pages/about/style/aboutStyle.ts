import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const aboutPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "linear-gradient(to bottom,white, #e2e8fa)",
  pt: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
  w: "100vw",
  minH: "100vh",
  pb: "2rem",
};

export const introGridStyles: GridProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "white",
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(1, 1fr)" },
  h: "auto",
};

export const introItemStyles: GridItemProps = {
  outline: "2px black solid",
  display: "flex",
  h: "inherit",
  alignContent: "stretch",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const introHeadingStyles: HeadingProps = {
  fontSize: { base: "2.6rem", md: "3rem", lg: "3.5rem" },
  py: { base: "0.7rem" },
};

export const introTextStyles: TextProps = {
  fontSize: { base: "1.1rem", md: "1.2rem", lg: "1.3rem" },
  fontWeight: "bold",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const snorkelGridStyles: GridProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "white",
  outline: "1px black solid",
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
};

export const snorkelHeadingItemStyles: GridItemProps = {
  outline: "2px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "stretch",
  alignItems: "stretch",
  h: "auto",
};

export const snorkelItemStyles: GridItemProps = {
  background: "brand.darkPink",
  outline: "2px black solid",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  py: { base: "1.2rem", md: "2.3rem", lg: "1.8rem" },
};

export const snorkelBoxStyles: BoxProps = {
  outline: "1px black solid",
};

export const snorkelHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.2rem", lg: "2.5rem" },
  textAlign: "center",
  py: { base: "0.7rem", md: "0.9rem", lg: "1.8rem" },
  px: { base: "0.7rem", md: "0.9rem" },
};

export const goalGridStyles: GridProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
  h: "auto",
};

export const infoGridStyles: GridProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
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
  outline: { base: "1px black solid", md: "" },
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const infoHeadingStyles: HeadingProps = {
  fontSize: { base: "2.8rem", md: "3.4rem", lg: "3.5rem" },
  color: "white",
  py: { base: "2rem", md: "3.4rem" },
  px: { base: "0.7rem", md: "0.2rem" },
};

export const infoTextStyles: TextProps = {
  fontWeight: "bold",
  fontSize: { base: "1.2rem", md: "1.3rem", lg: "1.4rem" },
  py: { base: "2rem", md: "3.4rem" },
  px: { base: "0.9rem", md: "1.4rem", lg: "2rem" },
  pb: { base: "3rem", lg: "" },
};

export const blueContainerStackStyles: StackProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "brand.blue",
  h: "auto",
};

export const contactGridStyles: GridProps = {
  position: "relative",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" },
  top: "-20",
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
  fontSize: { base: "1.1rem", md: "1.3rem", lg: "1.4rem" },
  py: { base: "2rem", md: "3.4rem" },
  px: { base: "0.9rem", md: "1.4rem", lg: "2rem" },
  pb: { base: "3rem", lg: "" },
};

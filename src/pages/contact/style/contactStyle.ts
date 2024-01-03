import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  InputProps,
  StackProps,
  TextProps,
  TextareaProps,
} from "@chakra-ui/react";

export const contactPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
  pb: { base: "2rem", md: "2.5rem", lg: "3rem" },
  w: "100vw",
  gap: "2rem",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const formWrapperStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const formGridStyles: GridProps = {
  gridTemplate: "repeat(2, 1fr)",
};

export const formGriditemYellowCurveStyles: GridItemProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  display: "flex",
  justifyContent: "center",
  background: "url(/svg/yellowCurve.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "contain",
  h: "auto",
  p: "1rem",
};
export const formGriditemYellowBGStyles: GridItemProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "brand.yellow",
  h: "auto",
  border: "1px solid black",
  borderTop: "none",
  p: "1rem",
  mx: { base: "none", lg: "-.5px" },
  position: "relative",
  top: "-3",
};

export const formStackStyles: StackProps = {
  background: "white",
  w: { base: "95vw", md: "80vw", xl: "1000px" },
  h: "auto",
  outline: "2px solid black",
  p: "2rem",
  spacing: "2rem",
};

export const headingBoxStyles: BoxProps = {
  outline: "2px solid black",
  h: "auto",
  maxW: { base: "95vw", md: "80vw", lg: "1000px" },
  background: "white",
};

export const formHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.2rem", lg: "3rem" },
  textAlign: "center",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const contactFormInputStyles: InputProps = {
  w: { base: "90vw", md: "70vw", xl: "850px" },
  border: "2px solid black",
  rounded: "sm",
};

export const contactFormTextareaStyles: TextareaProps = {
  w: { base: "90vw", md: "70vw", xl: "850px" },
  border: "2px solid black",
  rounded: "sm",
};

export const purpleWaveStackStyles: StackProps = {
  w: { base: "100vw" },
  spacing: "10vh",
  minH: "50vh",
  border: "2px solid black",
  borderBottom: "none",
  background: "brand.pink",
  backgroundImage: "url(/svg/purpleWaves.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "fit",
  py: { base: "2rem", md: "2.3rem", lg: "2.4rem" },
};

export const pinkTextStyles: TextProps = {
  fontSize: { base: "3rem", md: "3.4rem", lg: "3.5rem" },
};

export const purpleBoxStyles: BoxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  h: "20vh",
  w: { base: "90vw", sm: "90vw", md: "75vw", xl: "950px" },
};

export const purpleTextStyles: TextProps = {
  color: "white",
  textAlign: "center",
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
};

export const supportWrapperStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
};

export const supportGridStyles: GridProps = {
  gridTemplate: "repeat(2, 1fr)",
};

export const supportGridItemGreenBGStyles: GridItemProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  background: "brand.green",
  h: "auto",
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
  borderTop: "1px solid black",
  p: "1rem",
  position: "relative",
  top: "3",
};

export const supportGridItemGreenCurveStyles: GridItemProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "url(/svg/greenCurve.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "contain",
  minH: "185px",
  p: "1rem",
};

export const supportTextBoxStyles: BoxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "white",
  border: "2px black solid",
  h: "auto",
  w: { base: "90vw", sm: "90vw", md: "75vw", xl: "950px" },
  py: { base: "0.7rem", md: "1.7rem" },
  px: { base: "1rem", md: "2.3rem" },
  mb: "2rem",
};

export const supportHeadingStyles: HeadingProps = {
  fontSize: { base: "1.4rem", md: "1.5rem", lg: "1.6rem" },
  py: { base: "0.8rem", md: "1.7rem" },
  color: "black",
  textAlign: "center",
};

export const supportTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  color: "black",
  textAlign: "center",
  py: { base: "0.8rem", md: "1.2rem" },
};

export const supportImageBoxStyles: BoxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  h: "auto",
  background: "white",
  border: "2px black solid",
  w: { base: "90vw", sm: "90vw", md: "75vw", xl: "950px" },
};

export const supportSocialsBoxStyles: BoxProps = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  background: "white",
  border: "2px black solid",
  p: "1rem",
  h: "auto",
  w: { base: "90vw", sm: "90vw", md: "75vw", xl: "950px" },
};

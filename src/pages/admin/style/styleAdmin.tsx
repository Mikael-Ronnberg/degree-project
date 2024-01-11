import {
  BoxProps,
  CardProps,
  FlexProps,
  FormLabelProps,
  GridProps,
  HeadingProps,
  ImageProps,
  InputProps,
  ModalContentProps,
  ModalHeaderProps,
  StackProps,
  TextProps,
  TextareaProps,
} from "@chakra-ui/react";

export const adminPageStyles: FlexProps = {
  align: "center",
  justify: "center",
  direction: "column",
  backgroundColor: "grey",
  minH: "100vh",
  w: "100vw",
  py: { base: "4rem", md: "5.5rem", lg: "6rem" },
};

export const adminBoardGridStyles: GridProps = {
  w: "auto",
  h: "auto",
  templateColumns: {
    base: "100%",
    md: "50% 50%",
    xl: "33.3% 33.3% 33.3%",
  },
  p: "1rem",
};

//admincontainers

export const adminStackContainer: StackProps = {
  h: "100vh",
  w: { s: "90vw", l: "85vw" },
  backgroundColor: "grey",
};

export const adminContainerFlexStyles: FlexProps = {
  direction: "column",
  justify: "space-around",
  align: "center",
  mt: "2rem",
  w: { base: "90vw", md: "95vw", xl: "1280px" },
  minH: "85vh",
  background: "white",
  border: "solid 2px black",
  px: "1rem",
};

export const adminCardStyles: FlexProps = {
  direction: "column",
  justify: "center",
  align: "center",
  h: "auto",
  w: { base: "95vw", md: "95vw", lg: "65vw" },
  backgroundColor: "white",
  border: "1px solid black",
  p: "2rem",
  m: "2rem",
};

export const adminBoardCardStyles: CardProps = {
  w: { base: "auto", md: "auto", lg: "auto", xl: "auto" },
  h: "auto",
  minH: "30vh",
  justify: "center",
  align: "center",
  border: "black solid 2px",
  background: "white",
  py: "1rem",
  rounded: "sm",
};

export const adminTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  textAlign: "center",
  px: "1rem",
};

export const adminHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.2rem", lg: "3rem" },
  py: "2rem",
  textAlign: "center",
};

export const generalCardGridStyles: GridProps = {
  w: { sm: "90vw", lg: "65vw" },
  templateColumns: { base: "50% 50%" },
  gap: "0.5rem",
};

export const subImageTextCardStyles: TextProps = {
  fontSize: "0.7rem",
};

export const mainImageCardStyles: ImageProps = {
  w: "80vw",
};

export const subImageCardStyles: ImageProps = {
  w: "60vw",
};

export const ourMapContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { base: "90vw", lg: "65vw" },
  h: "80vh",
  gap: "10rem",
  border: "black 1px solid",
  direction: "column",
  background: "white",
  mt: "3rem",
  p: "2rem",
};

export const ourMapBoxStyles: BoxProps = {
  border: "black 1px solid",
  w: { base: "80vw", lg: "55vw" },
  h: "55vh",
  zIndex: "1",
};

export const createContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { base: "95vw", lg: "65vw" },
  h: "80vh",
  gap: "10rem",
  border: "black 1px solid",
  direction: "column",
  background: "white",
  mt: "3rem",
  p: "2rem",
};

export const createHeadingStyles: HeadingProps = {
  fontSize: { base: "2.5rem", md: "2.8rem", lg: "3rem" },
};

export const formFlexStyles: FlexProps = {
  justify: "center",
  align: "center",
  w: { base: "87vw", lg: "65vw" },
  gap: "1rem",
  h: "auto",
  border: "black 2px solid",
  direction: "column",
  background: "white",
  py: "1rem",
  mb: "1rem",
};

export const inputFormStyles: InputProps = {
  w: { base: "80vw", md: "60vw", xl: "700px" },
  h: "60px",
  mx: { base: "0rem", md: "2rem" },
  mb: "2rem",
  border: "2px solid black",
  rounded: "sm",
  _hover: {
    borderColor: "black",
  },
  _focus: {
    transform: "translateY(-2px)",
    boxShadow: "-4px 4px 0px 0px",
    border: "2px black solid",
  },
};

export const textareaFormStyles: TextareaProps = {
  w: { base: "80vw", md: "60vw", xl: "700px" },
  h: "150px",
  mx: { base: "0rem", md: "2rem" },
  border: "2px solid black",
  rounded: "sm",
  _hover: {
    borderColor: "black",
  },
  _focus: {
    transform: "translateY(-2px)",
    boxShadow: "-4px 4px 0px 0px",
    border: "2px black solid",
  },
};

export const formLabelStyles: FormLabelProps = {
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  textAlign: "center",
  pt: "1rem",
  pb: "0",
};

export const modalStyles: ModalContentProps = {
  maxW: { base: "90vw", md: "95Vw", xl: "1280px" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pb: "2rem",
  rounded: "sm",
};

export const modalHeaderStyles: ModalHeaderProps = {
  fontSize: { base: "1.5rem", md: "1.7rem", lg: "3rem" },
  py: "1rem",
  mx: "1rem",
  textAlign: "center",
};

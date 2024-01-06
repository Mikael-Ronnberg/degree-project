import {
  BoxProps,
  CheckboxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  InputProps,
  ListItemProps,
  TextProps,
  TextareaProps,
} from "@chakra-ui/react";

export const locationPageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "linear-gradient(to top,#67D8C0 , #0F769F)",
  pt: { base: "5rem", md: "5.5rem", lg: "7.5rem" },
  w: "100vw",
  gap: "0rem",
  minH: "100vh",
  overflow: "hidden",
  pb: { base: "2rem", lg: "2.3rem" },
};

export const mapHeadingBoxStyles: BoxProps = {
  w: { base: "100vw", xl: "1280px" },
  background: "white",
  border: "2px solid black",
  py: { base: "1.5rem", md: "0.8rem" },
};

export const mapHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.4rem", lg: "3rem" },
  textAlign: "center",
  px: { base: "1rem", md: "2.3rem" },
  pt: { base: "0.3rem", md: "1rem", lg: "2rem" },
};

export const mapHeadingTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  textAlign: "center",
  fontWeight: "bold",
  px: { base: "1rem", md: "2.3rem" },
  py: { base: "1rem", md: "3rem", lg: "4rem" },
};

export const mapContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  w: { base: "95vw", md: "100vw", xl: "1280px" },
  h: "auto",
  overflow: "hidden",
  pb: "0rem",
  borderRight: "black 2px solid",
  borderLeft: "black 2px solid",
};

export const mapContainerGridStyles: GridProps = {
  w: { base: "95vw", md: "100vw", xl: "1280px" },
  templateColumns: { base: "repeat(1, 1fr)", md: "50% 50%" },
  h: "fit-content",
};

export const mapItemStyles: GridItemProps = {
  zIndex: "2",
  w: { base: "95vw", md: "auto" },
  h: { base: "50vh", md: "auto" },
  outline: "2px solid black",
};

export const mapSearchGridItemSyles: GridItemProps = {
  pt: "2rem",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  flexDirection: "column",
  borderTop: { base: "black 2px solid", md: "none" },
  borderRight: "black 2px solid",
  borderLeft: "black 2px solid",
  background: "brand.pink",
  minH: { base: "40vh", md: "50vh", lg: "700px" },
  h: "fit-content",
  zIndex: "4",
};

export const searchInputStyles: InputProps = {
  variant: "outline",
  border: "2px solid black",
  background: "white",
  placeholder: "Sök Plats",
  w: { base: "80vw", md: "40vw", xl: "500px" },
  h: "60px",
  rounded: "sm",
  m: "1rem",
  _hover: {
    borderColor: "black",
  },
  _focus: {
    transform: "translateY(-2px)",
    boxShadow: "-4px 4px 0px 0px",
    border: "2px black solid",
  },
};

export const searchDropdownStyles: BoxProps = {
  w: { base: "92vw", md: "46vw", xl: "500px" },
  maxH: { base: "40vh" },
  p: "1rem",
  overflow: "scroll",
  bg: "brand.pink",
  zIndex: "1",
};

export const searchListItemStyles: ListItemProps = {
  h: "auto",
  outline: "2px solid black",
  bg: "white",
  py: "1rem",
  my: "0.5rem",
  px: "0.8rem",
  cursor: "pointer",
};

export const formContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  h: "auto",
};

export const formContentStyles: FlexProps = {
  justify: "flex-start",
  align: "center",
  w: { base: "95vw", md: "100vw", xl: "1280px" },
  background: "brand.green",
  h: "auto",
  pb: "2rem",
  pt: "2rem",
  direction: "column",
};

export const inputStyles: InputProps = {
  variant: "outline",
  background: "white",
  rounded: "sm",
  border: "black 2px solid",
  w: { base: "80vw", md: "80vw", lg: "70vw", xl: "800px" },
  h: "60px",
  m: "1rem",
  _hover: {
    borderColor: "black",
  },
  _focus: {
    transform: "translateY(-2px)",
    boxShadow: "-4px 4px 0px 0px",
    border: "2px black solid",
  },
};

export const textareaStyles: TextareaProps = {
  variant: "outline",
  rounded: "sm",
  border: "black 2px solid",
  background: "white",
  w: { base: "80vw", md: "80vw", lg: "70vw", xl: "800px" },
  h: "40vh",
  m: "1rem",
  _hover: {
    borderColor: "black",
  },
  _focus: {
    transform: "translateY(-2px)",
    boxShadow: "-4px 4px 0px 0px",
    border: "2px black solid",
  },
};

export const mapCheckboxStyles: CheckboxProps = {
  size: "lg",
  rounded: "sm",
  colorScheme: "grey",
  iconColor: "black",
  iconSize: "1.3rem",
  sx: {
    ".chakra-checkbox__control": {
      bg: "white", //
      borderWidth: "2px",
      borderColor: "black",
    },
    ".chakra-checkbox__control[data-checked]": {
      bg: "white",
      borderColor: "black", //
    },
  },
};

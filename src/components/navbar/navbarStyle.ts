import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  ModalHeaderProps,
  TextProps,
} from "@chakra-ui/react";

export const mobileNavContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "1rem",
  py: "0.5rem",
  borderBottom: "2px",
  borderColor: "black",
  display: { base: "flex", lg: "none" },
};

export const desktopNavStyles: GridProps = {
  templateColumns: "repeat(6, 1fr)",
  borderBottom: "2px black solid",
  display: { base: "none", lg: "grid" },
};

export const desktopNavSectionStyles: GridItemProps = {
  outline: "1px black solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "1rem",
  _hover: {
    bg: "brand.blue",
    color: "white",
  },
};

export const drawerHeaderStyles: ModalHeaderProps = {
  border: "2px black solid",
  h: "auto",
  p: "2rem",
};

export const mobileMenuStyles: GridProps = {
  templateColumns: "repeat(1, 1fr)",
  outline: "2px solid black",
  h: "auto",
  gap: "0",
};

export const mobileMenuSectionStyles: GridItemProps = {
  outline: "1px black solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  h: "15vh",
  p: "1rem",
  _hover: {
    bg: "brand.blue",
    color: "white",
  },
};

export const desktopTextStyles: TextProps = {
  fontSize: "1rem",
  fontWeight: "bold",
};

export const mobileTextStyles: TextProps = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  color: "black",
  mb: "1rem",
  zIndex: 10,
};

import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  TextProps,
} from "@chakra-ui/react";

export const mobileNavContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "0.5rem",
  borderBottom: "2px",
  borderColor: "black",
  display: { base: "flex", lg: "none" },
};

export const desktopNavStyles: GridProps = {
  templateColumns: "repeat(6, 1fr)",
  // px: "2rem",
  // py: "0.5rem",
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

export const desktopTextStyles: TextProps = {
  fontSize: "1.5rem",
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

// export const logoSectionStyles: StackProps = {
//   direction: "row",
//   gap: 6,
//   flex: 2,
//   alignItems: "center",
// };

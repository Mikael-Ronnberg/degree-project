import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const mobileNavContainerStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "0.5rem",
  borderBottom: "2px",
  borderColor: "black",
  display: { base: "flex", lg: "none" },
};

export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "0.5rem",
  borderBottomWidth: "2px",
  borderColor: "black",
  display: { base: "none", lg: "flex" },
};

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  color: "black",
  mb: "1rem",
  zIndex: 10,
};

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  flex: 1,
  alignItems: "center",
};

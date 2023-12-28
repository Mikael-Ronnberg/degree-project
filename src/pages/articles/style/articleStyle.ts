import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  ImageProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const articlePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: "5rem",
  w: "100vw",
  gap: "5rem",
  minH: "100vh",
  overflow: "hidden",
  m: "auto",
};

export const articleContainerStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  w: { base: "100vw", md: "95vw" },
  maxW: "1500px",
  border: "2px solid black",
  h: "auto",
};

export const articleCardGridStyles: GridProps = {
  templateColumns: { base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
  w: "80vw",
  maxW: "1200px",
  border: "2px solid black",
  h: "auto",
};

export const articleImgItemStyles: GridItemProps = {
  alignItems: "center",
  h: "auto",
  p: "1rem",
};
export const articleTextItemStyles: GridItemProps = {
  w: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  h: "auto",
  p: "1rem",
};

export const textStackStyles: StackProps = {
  maxW: { base: "60vw", md: "78vw", lg: "" },
};

export const articleCardImageBoxStyles: BoxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: { base: "auto", md: "30vw", lg: "350px" },
  h: { base: "250px", md: "30vh", lg: "350px" },
  overflow: "hidden",
};

export const articleCardImageStyles: ImageProps = {
  sizes: "(max-width: 480px) 300px, 350px",
  objectFit: "contain",
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
  w: "",
  fontSize: { base: "0.6rem", md: "0.7rem", lg: "0.8rem" },
};

export const articleCardHeadingStyles: HeadingProps = {
  fontSize: "",
  m: "0.5rem",
};

export const articleCardSubHeadingStyles: TextProps = {
  fontSize: "1rem",
};

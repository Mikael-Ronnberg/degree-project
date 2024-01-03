import {
  BoxProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  ModalContentProps,
  StackProps,
  TextProps,
  keyframes,
} from "@chakra-ui/react";

export const homePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "linear-gradient(to top, #fcfcfc, #e2e8fa)",
  pt: { base: "3rem", lg: "5rem" },
  w: "100vw",
  minH: "100vh",
  overflow: "hidden",
};

export const heroContainerStyles: BoxProps = {
  display: "flex",
  h: "666px",
  w: "100vw",
  maxW: "2080px",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "linear-gradient(to top, white, #6f8fee)",
  backgroundImage: "url(/svg/Background.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflow: "hidden",
  border: "2px solid black",
};

export const introContainerStyle: FlexProps = {
  background: "brand.blue",
  w: { base: "100vw" },
  maxW: "2080px",
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
  gap: "2rem",
  borderRight: "2px solid black",
  borderLeft: "2px solid black",
  pb: { base: "4rem", md: "5rem" },
  // px: { base: "1rem", md: "2.3rem" },
};

export const introWelcomeStyles: FlexProps = {
  outline: "solid black 2px",
  w: "100vw",
  maxW: "2080px",
  h: "auto",
  background: "white",
  justify: "center",
  align: "center",
  px: { sm: "1rem", md: "1.2rem", lg: "2.2rem" },
  py: "1rem",
};

export const introWelcomeTextStyles: TextProps = {
  textAlign: "center",
  color: "black",
  fontSize: { base: "2.5rem", md: "3.2rem", lg: "3.3rem" },
  fontWeight: "bold",
};

export const introBlueFlexStyles: FlexProps = {
  background: "brand.blue",
  w: "100vw",
  maxW: "2080px",
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
};

export const introWhiteStackStyles: StackProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "auto",
  border: "2px solid black",
  background: "white",
};

export const introStackHeadingStyles: BoxProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "auto",
  outline: "2px solid black",
  background: "white",
};

export const introGridStyles: GridProps = {
  templateColumns: { base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "auto",
  minH: "50vh",
};

export const introTextGridItemStyles: GridItemProps = {
  background: "white",
  h: "auto",
  outline: "2px solid black",
};

export const introGridHeadingStyles: HeadingProps = {
  background: "brand.darkPink",
  textAlign: "center",
  fontSize: { base: "2rem", md: "2.2rem", lg: "2.4rem" },
  outline: "2px solid black",
  color: "white",
  px: { base: "1rem", md: "0.5rem", lg: "2.2rem" },
  py: "1rem",
};

export const introTextStyles: TextProps = {
  textAlign: { base: "center" },
  color: "black",
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  fontWeight: "bold",
  px: { base: "1rem", md: "0.5rem", lg: "2.2rem" },
  py: { base: "1.5rem", md: "2.5rem", lg: "3.5rem" },
};

export const introEarthGridItemStyles: GridItemProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#2fadf1",
  h: "auto",
  outline: "2px solid black",
  py: { base: "2rem", md: "1rem" },
};

export const aboutPinkCurveStyles: BoxProps = {
  w: { base: "100vw" },
  minH: "88px",
  backgroundImage: "url(/svg/pinkCurveBig.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "fit",
  position: "relative",
  top: "-40px",
};

export const aboutContainerStackStyles: StackProps = {
  background: "brand.pink",
  spacing: "2rem",
  w: "100vw",
  maxW: "2080px",
  position: "relative",
  top: "-88px",
  pt: "5rem",
  pb: "5rem",
  border: "2px solid black",
  borderTop: "none",
};

export const litterContainerStyles: FlexProps = {
  background: "brand.blue",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "auto",
  border: "solid black 2px",
  borderBottom: "none",
  justify: "center",
  align: "center",
  mt: "2rem",
  direction: "column",
  overflow: "hidden",
};

export const litterHeadingStyles: HeadingProps = {
  color: "white",
  textAlign: "center",
  fontSize: { base: "1.7rem", md: "2rem", lg: "2.2rem" },
  px: { base: "1rem", md: "1.5em", lg: "2.2rem" },
  py: { base: "2rem", md: "2.5em", lg: "3.5rem" },
};

export const litterIconsStyles: GridProps = {
  templateColumns: "repeat(2, 1fr)",
  gap: "10rem",
  mt: "2rem",
  sx: {
    "& > :last-child": {
      gridColumn: "1 / -1",
      justifySelf: "center",
    },
  },
};

export const litterModalStyles: ModalContentProps = {
  background: "brand.pink",
  border: "solid 2px black",
  w: { base: "95vw", md: "80vw" },
  maxW: "1300px",
  rounded: "sm",
};

export const litterModalHeadingStyles: HeadingProps = {
  fontSize: { base: "2rem", md: "2.3em", lg: "2.4rem" },
  px: { base: "0.4rem", md: "0.5rem", lg: "1rem" },
  py: { base: "0.3rem", md: "0.4rem", lg: "1rem" },
};

export const litterModalTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.1em", lg: "1.3rem" },
  px: { base: "1rem", md: "1.5em", lg: "2.2rem" },
  py: { base: "2rem", md: "2.5em", lg: "3.5rem" },
  w: { base: "90vw", md: "70vw" },
  maxW: "1000px",
};

export const litterCardStyles: FlexProps = {
  // maxW: { base: "60vw", lg: "75vw" },
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
  p: "2rem",
};

export const joinContainerStackStyles: StackProps = {
  background: "#e3b059",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  border: "2px solid black",
  borderTop: "none",
  mb: "2rem",
};

export const joinTextFlexStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  direction: { base: "column" },
  w: { base: "100vw", xl: "1400px" },
  outline: "2px solid black",
  background: "#fdf3cf",
  m: "0.5rem",
};

export const joinTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  px: { base: "2rem" },
  py: { base: "2rem" },
};

export const tireAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
45% { transform: rotate(45deg) translateX(50px) translateY(50px); }
74% { transform: translateX(-25px) translateY(-25px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const glassAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
43% { transform: rotate(-45deg) translateX(25px) translateY(-50px); }
70% { transform: translateX(-25px) translateY(-25px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const metalAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
45% { transform: rotate(-45deg) translateX(-25px) translateY(25px); }
78% { transform: translateX(25px) translateY(-25px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const plasticAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
55% { transform: rotate(45deg) translateX(25px) translateY(-25px); }
78% { transform: translateX(-25px) translateY(-25px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const animalAnimation = keyframes`
  0% { transform: rotate(0deg) translate(-50px, 0); }
  10% { transform: rotate(45deg) }
  20% { transform: translate(50px, -75px); } 
  50% { transform: rotate(0deg) translate(75px, 0px); } 
  60% { transform: rotate(-45deg)  } 
  70% { transform: translate(-50px, -75px); }
  100% { transform: rotate(0deg) translate(-75px, 0px); } 
`;

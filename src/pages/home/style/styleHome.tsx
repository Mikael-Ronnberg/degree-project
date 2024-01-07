import {
  BoxProps,
  CardBodyProps,
  FlexProps,
  GridItemProps,
  GridProps,
  HeadingProps,
  ImageProps,
  ModalContentProps,
  StackProps,
  TextProps,
  keyframes,
} from "@chakra-ui/react";

import { SwiperOptions } from "swiper/types";
import { Autoplay, Navigation } from "swiper/modules";
import { CSSProperties } from "react";

export const homePageStyles: FlexProps = {
  w: "100vw",
  minH: "100vh",
  justify: "center",
  align: "center",
  direction: "column",
  background: "linear-gradient(to top, #fcfcfc, #e2e8fa)",
  pt: { base: "3rem", lg: "5rem" },
  border: "2px solid black",
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
  pb: { base: "3rem", md: "4rem" },
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
  mt: "3rem",
  mb: "2rem",
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
  w: { base: "90vw", md: "95vw" },
  maxW: "1280px",
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
  color: "black",
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
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
  minH: "70px",
  backgroundImage: "url(/svg/curves/pinkCurveBig.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "fit",
  position: "relative",
  top: "-34px",
};

export const aboutImageStyles: ImageProps = {
  pl: { base: "0rem", lg: "2rem" },
  src: "/svg/sunrise.svg",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  h: { base: "170px", md: "280px", lg: "auto" },
  w: { base: "200px", md: "310vw", lg: "auto" },
};

export const aboutFlexContainerStyles: FlexProps = {
  h: "auto",
  justify: "center",
  align: "center",
  direction: { base: "column", lg: "row" },
  backgroundColor: "brand.pink",
  w: "100vw",
  maxW: "2080px",
  position: "relative",
  top: "-50px",
  pb: "1em",
  border: "2px solid black",
  borderTop: "none",
};

export const aboutTextStyles: TextProps = {
  maxW: { base: "95vw", md: "80vw", lg: "1000px" },
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  px: { base: "1rem", md: "0.5rem", lg: "2.2rem" },
  py: { base: "0.5rem", md: "0.7rem" },
};

export const eventSlideSettings: SwiperOptions = {
  modules: [Navigation, Autoplay],
  spaceBetween: 10,
  slidesPerView: "auto",
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

export const eventSlideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

export const eventCardBodyStyles: CardBodyProps = {
  minH: { base: "20vh", md: "25vh" },
};

export const litterContainerStyles: FlexProps = {
  background: "brand.blue",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  h: "auto",
  border: "solid black 2px",
  borderBottom: "none",
  justify: "center",
  align: "center",
  direction: "column",
  overflow: "hidden",
};

export const litterHeadingStyles: HeadingProps = {
  color: "white",
  textAlign: "center",
  fontSize: { base: "1.7rem", md: "2rem", lg: "2.2rem" },
  px: { base: "1rem", md: "1.5em", lg: "2.2rem" },
  py: { base: "3rem", md: "2.5em", lg: "3.5rem" },
};

export const litterIconsStyles: GridProps = {
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  minH: { base: "40vh", md: "50vh", lg: "60vh" },
  templateColumns: "50% 50%",
  px: { base: "0rem", md: "3rem", lg: "3rem" },
  gap: { base: "0rem", md: "3rem", lg: "3rem" },
  mt: "2rem",
  sx: {
    "& > :last-child": {
      gridColumn: "1 / -1",
      justifySelf: "center",
    },
  },
};

export const litterGridItemStyles: GridItemProps = {
  m: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
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
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
  p: "2rem",
};

export const joinFlexStyles: FlexProps = {
  align: "center",
  direction: "column",
  h: "auto",
  w: { base: "100vw", md: "95vw", xl: "1280px" },
  border: "2px solid black",
  borderTop: "none",
  background: "#e3b059",
  pb: "2rem",
  mb: "2rem",
};

export const joinStackStyles: StackProps = {
  background: "#fdf3cf",
  w: "100vw",
  h: "auto",
  maxW: { xl: "1400px" },
  border: "2px solid black",
  pb: "2rem",
};

export const joinHeadingStyles: HeadingProps = {
  fontSize: { base: "1.3rem", md: "1.4rem", lg: "2rem" },
  pt: "1.5rem",
  px: { base: "2rem" },
};

export const joinTextStyles: TextProps = {
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  px: { base: "2rem" },
  py: { base: "2rem" },
};

export const tireAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
25% { transform: rotate(45deg) translateX(30px) translateY(30px); }
74% { transform: translateX(-15px) translateY(-15px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const glassAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
33% { transform: rotate(-45deg) translateX(30px) translateY(-30px); }
70% { transform: translateX(-15px) translateY(-15px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const metalAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
45% { transform: rotate(-45deg) translateX(-30px) translateY(30px); }
720% { transform: translateX(15px) translateY(-15px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const plasticAnimation = keyframes`
0% { transform: rotate(0deg) translateX(0px) translateY(0px); }
55% { transform: rotate(45deg) translateX(30px) translateY(-30px); }
88% { transform: translateX(-15px) translateY(-15px);}
100% {transform: rotate(0deg) translateX(0px) translateY(0px);}
`;
export const animalAnimation = keyframes`
  0% { transform: rotate(0deg) translate(-50px, 0); }
  10% { transform: rotate(45deg) }
  20% { transform: translate(50px, -25px); } 
  50% { transform: rotate(0deg) translate(25px, 0px); } 
  60% { transform: rotate(-45deg)  } 
  70% { transform: translate(-50px, -25px); }
  100% { transform: rotate(0deg) translate(-25px, 0px); } 
`;

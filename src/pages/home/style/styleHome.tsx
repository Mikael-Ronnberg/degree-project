import {
  BoxProps,
  FlexProps,
  GridProps,
  ModalContentProps,
  TextProps,
  keyframes,
} from "@chakra-ui/react";

export const homePageStyles: FlexProps = {
  justify: "center",
  align: "center",
  direction: "column",
  background: "white",
  pt: { base: "3rem", lg: "5rem" },
  w: "100vw",
  minH: "100vh",
  overflow: "hidden",
};

export const heroContainerStyles: BoxProps = {
  display: "flex",
  h: "666px",
  w: "100vw",
  alignContent: "center",
  justifyContent: "center",
  background: "linear-gradient(to top,white, #eff3ff)",
  backgroundImage: "url(/svg/Background.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflow: "hidden",
  outline: "2px solid black",
};

export const heroBgBoxStyles: BoxProps = {
  as: "svg",
  height: "801px",
  width: "auto",
};

export const heroIconBoxStyles: BoxProps = {
  as: "svg",
  position: "absolute",
  top: "18%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const sandWaveBoxStyles: BoxProps = {
  w: { base: "100vw" },
  background: "#e3b059",
  h: "30vh",
};

export const introContainerStyle: FlexProps = {
  background: "brand.blue",
  w: { base: "100vw", md: "95vw" },
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
  gap: "5rem",
  borderRight: "2px solid black",
  borderLeft: "2px solid black",
};

export const introWhiteBoxStyles: FlexProps = {
  outline: "solid black 2px",
  w: "100vw",
  maxW: "2061px",
  h: "auto",
  background: "white",
  justify: "center",
  align: "center",
  px: { sm: "1rem", md: "1.2rem", lg: "2.2rem" },
  py: "1rem",
};

export const introWhiteTextStyles: TextProps = {
  textAlign: "center",
  color: "black",
  fontSize: { base: "1rem", md: "1.2rem", lg: "1.3rem" },
  fontWeight: "bold",
};

export const litterContainerStyles: FlexProps = {
  background: "brand.blue",
  w: { sm: "100vw", md: "95vw" },
  minH: "100vh",
  borderRight: "solid black 2px",
  borderLeft: "solid black 2px",
  justify: "center",
  align: "center",
  direction: "column",
  gap: "3rem",
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
  m: { sm: "5rem", md: "10rem", lg: "20rem" },
  rounded: "sm",
};

export const litterCardStyles: FlexProps = {
  // maxW: { base: "60vw", lg: "75vw" },
  h: "auto",
  justify: "center",
  align: "center",
  direction: "column",
  p: "2rem",
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

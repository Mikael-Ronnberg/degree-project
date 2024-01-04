import { Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { homePageStyles } from "./style/styleHome";

import "./style/style.css";
import CookieConsent from "react-cookie-consent";
import { AboutContainer } from "./feature/AboutContainer";
import { Marquee } from "./feature/Marquee";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <IntroContainer />
        <AboutContainer />
        <Marquee />
        <LitterContainer />

        <CookieConsent
          location="bottom"
          buttonText="Godkänn"
          cookieName="SvepaBottenCookie"
          style={{
            background: "#1E42D4",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.1rem",
          }}
          buttonStyle={{
            color: "#000000",
            fontSize: "1.1rem",
            border: "2px, black, solid",
            background: "white",
            borderRadius: "20px",
            width: "15rem",
          }}
          expires={150}
        >
          Den här sidan avnänder cookies 🍪 för att optimera
          användarvänligheten. Kakor är gott!
        </CookieConsent>
      </Flex>
    </>
  );
};

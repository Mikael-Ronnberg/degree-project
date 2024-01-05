import { Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { homePageStyles } from "./style/styleHome";
import CookieConsent from "react-cookie-consent";
import { AboutContainer } from "./feature/AboutContainer";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <IntroContainer />
        <AboutContainer />
        <LitterContainer />

        <CookieConsent
          location="bottom"
          buttonText="Godkänn"
          cookieName="SvepaBottenCookie"
          style={{
            background: "#EAA83A",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.1rem",
            color: "black",
          }}
          buttonStyle={{
            color: "#000000",
            fontSize: "1.1rem",
            border: "2px black solid",
            background: "white",
            borderRadius: "20px",

            width: "15rem",
          }}
          expires={150}
        >
          Genom att fortsätta använda denna webbplats godkänner du användandet
          av cookies 🍪 Kakor är gott!
        </CookieConsent>
      </Flex>
    </>
  );
};

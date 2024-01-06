import { Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { homePageStyles } from "./style/styleHome";
import CookieConsent from "react-cookie-consent";
import { AboutContainer } from "./feature/AboutContainer";
import { JoinContainer } from "./feature/JoinContainer";

export const Home = () => {
  return (
    <>
      <Flex {...homePageStyles}>
        <Hero />
        <IntroContainer />
        <AboutContainer />
        <LitterContainer />
        <JoinContainer />
        <CookieConsent
          location="bottom"
          buttonText="Godkänn"
          cookieName="SvepaBottenCookie"
          style={{
            background: "#EAA83A",
            maxWidth: "100vw",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.1rem",
            color: "black",
            paddingBottom: "1rem",
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
          av cookies. 🍪 är gott!
        </CookieConsent>
      </Flex>
    </>
  );
};

import { Flex } from "@chakra-ui/react";
import { Hero } from "./feature/Hero";
import { LitterContainer } from "./feature/LitterContainer";
import { IntroContainer } from "./feature/IntroContainer";
import { homePageStyles } from "./style/styleHome";

import "./style/style.css";
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
          buttonText="I understand"
          cookieName="SvepaBottenCookie"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </Flex>
    </>
  );
};

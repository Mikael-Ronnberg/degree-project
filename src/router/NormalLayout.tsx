import { ReactNode } from "react";
import { Navbar } from "../components/navbar/NavBar";
import { normalNavItems } from "../constants/normalNavLinks";
import { ScrollToTop } from "../components/scrollToTop/ScrollToTop";

interface NormalLayoutProp {
  children: ReactNode;
}

export const NormalLayout = ({ children }: NormalLayoutProp) => (
  <>
    <Navbar navItems={normalNavItems} />
    <ScrollToTop />
    {children}
  </>
);

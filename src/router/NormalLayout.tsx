import { ReactNode } from "react";
import { Navbar } from "../components/navbar/NavBar";
import { normalNavItems } from "../helpers/normalHelpers";

interface NormalLayoutProp {
  children: ReactNode;
}

export const NormalLayout = ({ children }: NormalLayoutProp) => (
  <>
    <Navbar navItems={normalNavItems} />
    {children}
  </>
);

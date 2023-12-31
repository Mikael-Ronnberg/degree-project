import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Navbar } from "../components/navbar/NavBar";
import { adminNavItems } from "../constants/adminNavLinks";
import { ScrollToTop } from "../components/scrollToTop/ScrollToTop";

interface RequireAuthLayoutProp {
  children: ReactNode;
}

export const RequireAuthLayout = ({ children }: RequireAuthLayoutProp) => {
  const { currentUser } = useAuthStore();

  return currentUser ? (
    <>
      <Navbar navItems={adminNavItems} navType={"admin"} />
      <ScrollToTop />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

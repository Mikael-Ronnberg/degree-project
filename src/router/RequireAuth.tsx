import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface AuthProp {
  children: ReactNode;
}

export const RequireAuth = ({ children }: AuthProp) => {
  const { currentUser } = useAuthStore();

  return currentUser ? children : <Navigate to="/login" />;
};

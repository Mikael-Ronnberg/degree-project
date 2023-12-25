import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../config/firebase";
import { HStack } from "@chakra-ui/react";
import { useAuthStore } from "../../../store/useAuthStore";
import { Navigate } from "react-router-dom";

export const AuthDetails = () => {
  const { currentUser, setCurrentUser } = useAuthStore();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      <HStack>
        {currentUser ? (
          <>
            <Navigate to="/admin" replace />
          </>
        ) : (
          <>
            <p>Utloggad</p>
          </>
        )}
      </HStack>
    </>
  );
};

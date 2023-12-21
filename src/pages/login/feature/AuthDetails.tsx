import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../config/firebase";
import { HStack } from "@chakra-ui/react";
import { useAuthStore } from "../../../store/authStore";
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

  // const userSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Sign out successful");
  //     })
  //     .catch((error) => console.log(error));
  // };

  // <Button onClick={userSignOut}>Logga Ut</Button>
  // console.log(currentUser);

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

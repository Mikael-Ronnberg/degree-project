import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { SubmitUserResponse, SubmitUserValues } from "../model/AdminInterfaces";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Totals } from "../model/GlobalInterfaces";

const ourLocationCollectionRef = collection(db, "ourLocations");

export const getCount = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.size;
};

export const fetchAndAggregateData = (
  onDataReceived: (totals: Totals) => void
) => {
  const unsubscribe = onSnapshot(
    ourLocationCollectionRef,
    (querySnapshot) => {
      let totalPlastic = 0;
      let totalMetal = 0;
      let totalGlass = 0;
      let totalOther = 0;
      let totalAnimals = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        totalPlastic += Number(data.plastic) || 0;
        totalMetal += Number(data.metal) || 0;
        totalGlass += Number(data.glass) || 0;
        totalOther += Number(data.other) || 0;
        totalAnimals += Number(data.animals) || 0;
      });

      onDataReceived({
        totalPlastic,
        totalMetal,
        totalGlass,
        totalOther,
        totalAnimals,
      });
    },
    (error) => {
      console.error("Error listening to documents: ", error);
    }
  );

  return unsubscribe;
};

export const submitUser = async (
  user: SubmitUserValues
): Promise<SubmitUserResponse> => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    await setDoc(doc(db, "users", res.user.uid), {
      ...user,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }
};

export const userSignOut = () => {
  try {
    signOut(auth).then(() => {
      console.log("Sign out successful");
    });
  } catch (error) {
    console.log(error);
  }
};

import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { SubmitUserResponse, SubmitUserValues } from "../model/AdminInterfaces";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const getCount = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.size;
};

export const fetchAndAggregateData = async () => {
  try {
    const ourLocationCollectionRef = collection(db, "ourLocations");

    const querySnapshot = await getDocs(ourLocationCollectionRef);

    let totalPlastic = 0;
    let totalMetal = 0;
    let totalGlass = 0;
    let totalOther = 0;
    let totalAnimals = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      totalPlastic += data.plastic ?? 0;
      totalMetal += data.metal ?? 0;
      totalGlass += data.glass ?? 0;
      totalOther += data.other ?? 0;
      totalAnimals += data.animals ?? 0;
    });

    return {
      totalPlastic,
      totalMetal,
      totalGlass,
      totalOther,
      totalAnimals,
    };
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return {
      totalPlastic: 0,
      totalMetal: 0,
      totalGlass: 0,
      totalOther: 0,
      totalAnimals: 0,
    };
  }
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

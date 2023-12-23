import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../config/firebase";
import {
  ArticleResponse,
  CreateArticleFormValues,
  CreateEventFormValues,
  CreateOurLocationFormValues,
  EventResponse,
  OurLocationResponse,
  SubmitUserResponse,
  SubmitUserValues,
  TransformedArticleResponse,
  TransformedEventResponse,
  TransformedOurLocationResponse,
} from "../model/AdminInterfaces";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ourLocationCollectionRef = collection(db, "ourLocations");
const eventCollectionRef = collection(db, "events");
const articleCollectionRef = collection(db, "articles");
// const userCollectionRef = collection(db, "users");

export const submitOurLocation = async (
  location: CreateOurLocationFormValues
) => {
  try {
    await addDoc(ourLocationCollectionRef, {
      ...location,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getOurLocations = async (): Promise<
  TransformedOurLocationResponse[]
> => {
  try {
    const data = await getDocs(ourLocationCollectionRef);
    const filteredData: TransformedOurLocationResponse[] = data.docs.map(
      (doc) => {
        const docData = doc.data() as OurLocationResponse;
        const createdAtTimestamp = docData.createdAt;
        const createdAtDate = createdAtTimestamp.toDate();
        const readableDate = createdAtDate.toLocaleString();

        return {
          ...docData,
          createdAt: readableDate,
          id: doc.id,
        };
      }
    );

    return filteredData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteOurLocation = async (locationId: string) => {
  const locationDoc = doc(db, "ourLocations", locationId);
  await deleteDoc(locationDoc);
};

export const updateOurLocation = async (
  location: Omit<TransformedOurLocationResponse, "createdAt">
) => {
  try {
    const locationDoc = doc(db, "ourLocations", location.id);
    await updateDoc(locationDoc, { ...location });
  } catch (error) {
    console.error(error);
    throw error;
  }
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

export const submitEvent = async (event: CreateEventFormValues) => {
  try {
    await addDoc(eventCollectionRef, {
      ...event,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEvents = async (): Promise<TransformedEventResponse[]> => {
  try {
    const data = await getDocs(eventCollectionRef);
    const filteredData: TransformedEventResponse[] = data.docs.map((doc) => {
      const docData = doc.data() as EventResponse;
      const createdAtTimestamp = docData.createdAt;
      const createdAtDate = createdAtTimestamp.toDate();
      const readableDate = createdAtDate.toLocaleString();

      return {
        ...docData,
        createdAt: readableDate,
        id: doc.id,
      };
    });

    return filteredData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateEvent = async (
  event: Omit<TransformedEventResponse, "createdAt">
) => {
  try {
    const eventDoc = doc(db, "events", event.id);
    await updateDoc(eventDoc, { ...event });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteEvent = async (eventId: string) => {
  const eventDoc = doc(db, "events", eventId);
  await deleteDoc(eventDoc);
};

export const submitArticle = async (article: CreateArticleFormValues) => {
  try {
    await addDoc(articleCollectionRef, {
      ...article,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getArticles = async (): Promise<TransformedArticleResponse[]> => {
  try {
    const data = await getDocs(articleCollectionRef);
    const filteredData: TransformedArticleResponse[] = data.docs.map((doc) => {
      const docData = doc.data() as ArticleResponse;
      const createdAtTimestamp = docData.createdAt;
      const createdAtDate = createdAtTimestamp.toDate();
      const readableDate = createdAtDate.toLocaleString();

      return {
        ...docData,
        createdAt: readableDate,
        id: doc.id,
      };
    });

    return filteredData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteArticle = async (articleId: string) => {
  const articleDoc = doc(db, "articles", articleId);
  await deleteDoc(articleDoc);
};

export const updateArticle = async (
  article: Omit<TransformedArticleResponse, "createdAt">
) => {
  try {
    const articleDoc = doc(db, "articles", article.id);
    await updateDoc(articleDoc, { ...article });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadFile = async (file: File | null): Promise<string> => {
  if (file) {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask;
    return getDownloadURL(uploadTask.snapshot.ref);
  }
  return "";
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

import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import {
  CreateEventFormValues,
  EventResponse,
  OurLocationFormValues,
  OurLocationResponse,
  TransformedEventResponse,
  TransformedOurLocationResponse,
} from "../model/AdminInterfaces";

const ourLocationCollectionRef = collection(db, "ourLocations");
const eventCollectionRef = collection(db, "events");

export const submitOurLocation = async (location: OurLocationFormValues) => {
  try {
    await addDoc(ourLocationCollectionRef, {
      ...location,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
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
  const locationDoc = doc(db, "ourLocations", location.id);
  await updateDoc(locationDoc, { ...location });
};

export const submitEvent = async (event: CreateEventFormValues) => {
  try {
    await addDoc(eventCollectionRef, {
      ...event,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
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

export const deleteEvent = async (eventId: string) => {
  const eventDoc = doc(db, "events", eventId);
  await deleteDoc(eventDoc);
};

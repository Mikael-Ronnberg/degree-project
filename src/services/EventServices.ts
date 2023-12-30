import {
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  CreateEventFormValues,
  TransformedEventResponse,
  EventResponse,
} from "../model/AdminInterfaces";

const eventCollectionRef = collection(db, "events");

export const submitEvent = async (event: CreateEventFormValues) => {
  try {
    await addDoc(eventCollectionRef, {
      ...event,
      createdAt: serverTimestamp(),
    }).then((docRef) => console.log(docRef.id));
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

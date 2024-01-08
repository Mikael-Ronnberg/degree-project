import {
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  CreateEventFormValues,
  TransformedEventResponse,
} from "../model/EventsInterfaces";

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

export const getEvents = (
  setEvents: (events: TransformedEventResponse[]) => void
): (() => void) => {
  const eventsQuery = query(eventCollectionRef, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(eventsQuery, (snapshot) => {
    const eventsData: TransformedEventResponse[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      const createdAtTimestamp = data.createdAt;
      const createdAtDate = createdAtTimestamp.toDate();
      const readableDate = createdAtDate.toLocaleString();

      return {
        id: doc.id,
        createdAt: readableDate,
        heading: data.heading,
        date: data.date,
        description: data.description,
      };
    });

    setEvents(eventsData);
  });

  return unsubscribe;
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

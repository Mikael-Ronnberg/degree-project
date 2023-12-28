import { Timestamp } from "firebase/firestore";

export interface CreateEventFormValues {
  heading: string;
  date: string;
  description: string;
}

export interface EventResponse {
  id: string;
  heading: string;
  date: string;
  description: string;
  createdAt: Timestamp;
}

export interface TransformedEventResponse
  extends Omit<EventResponse, "createdAt"> {
  createdAt: string;
}

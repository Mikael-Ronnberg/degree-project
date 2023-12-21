import { Timestamp } from "firebase/firestore";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface OurLocationFormValues {
  locationName: string;
  date: string;
  description: string;
  plastic: number;
  metal: number;
  glass: number;
  other: number;
  animals: number;
  lat: number;
  lng: number;
}

export interface OurLocationResponse {
  id: string;
  locationName: string;
  date: string;
  description: string;
  plastic: number;
  metal: number;
  glass: number;
  other: number;
  animals: number;
  lat: number;
  lng: number;
  createdAt: Timestamp;
}

export interface TransformedOurLocationResponse
  extends Omit<OurLocationResponse, "createdAt"> {
  createdAt: string;
}

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

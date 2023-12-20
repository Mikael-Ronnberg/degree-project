import { Timestamp } from "firebase/firestore";

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

import { Timestamp } from "firebase/firestore";

export interface SubLocation {
  address: {
    city: string;
    municipality: string;
    county: string;
    country: string;
  };
  addresstype: string;
  boundingbox: string[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}

export interface LocationCoords {
  lat: number;
  lng: number;
}

export interface SubLocationsFormValues {
  name: string;
  email: string;
  message: string;
  lat: number;
  lng: number;
}

export interface SubLocationResponse {
  id: string;
  name: string;
  email: string;
  message: string;
  lat: number;
  lng: number;
  createdAt: Timestamp;
}

export interface TransformedSubLocationResponse
  extends Omit<SubLocationResponse, "createdAt"> {
  createdAt: string;
}

export interface CreateOurLocationFormValues {
  locationName: string;
  date: string;
  description: string;
  plastic: number | undefined;
  metal: number | undefined;
  glass: number | undefined;
  other: number | undefined;
  animals: number | undefined;
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

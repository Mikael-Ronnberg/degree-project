import { Timestamp } from "firebase/firestore";

export interface LocationObj {
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

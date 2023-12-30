import { db } from "../config/firebase";
import {
  CreateOurLocationFormValues,
  OurLocationResponse,
  TransformedOurLocationResponse,
} from "../model/LocationsInterfaces";
import {
  SubLocation,
  SubLocationResponse,
  SubLocationsFormValues,
  TransformedSubLocationResponse,
} from "../model/LocationsInterfaces";

import {
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const NOMATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const locationCollectionRef = collection(db, "locations");
const ourLocationCollectionRef = collection(db, "ourLocations");

export const fetchLocations = async (
  searchInput: string
): Promise<SubLocation[]> => {
  try {
    const params = new URLSearchParams({
      q: searchInput,
      format: "json",
      addressdetails: "1",
      polygon_geojson: "0",
    });

    const response = await fetch(`${NOMATIM_BASE_URL}${params.toString()}`);
    const results = await response.json();

    return results;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};

export const submitLocation = async (location: SubLocationsFormValues) => {
  try {
    await addDoc(locationCollectionRef, {
      ...location,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSubLocations = async (): Promise<
  TransformedSubLocationResponse[]
> => {
  try {
    const data = await getDocs(locationCollectionRef);
    const filteredData: TransformedSubLocationResponse[] = data.docs.map(
      (doc) => {
        const docData = doc.data() as SubLocationResponse;
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

export const deleteSubLocation = async (locationId: string) => {
  const locationDoc = doc(db, "locations", locationId);
  await deleteDoc(locationDoc);
};

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

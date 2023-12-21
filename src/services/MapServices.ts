import { db } from "../config/firebase";
import {
  LocationObj,
  LocationResponse,
  LocationsFormValues,
  TransformedLocationResponse,
} from "../model/LocationsInterfaces";

import {
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const NOMATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const locationCollectionRef = collection(db, "locations");

export const fetchLocations = async (
  searchInput: string
): Promise<LocationObj[]> => {
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

export const submitLocation = async (location: LocationsFormValues) => {
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
  TransformedLocationResponse[]
> => {
  try {
    const data = await getDocs(locationCollectionRef);
    const filteredData: TransformedLocationResponse[] = data.docs.map((doc) => {
      const docData = doc.data() as LocationResponse;
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

export const deleteSubLocation = async (locationId: string) => {
  const locationDoc = doc(db, "locations", locationId);
  await deleteDoc(locationDoc);
};

import { db } from "../config/firebase";
import {
  CreateOurLocationFormValues,
  TransformedOurLocationResponse,
} from "../model/LocationsInterfaces";
import {
  SubLocation,
  SubLocationsFormValues,
  TransformedSubLocationResponse,
} from "../model/LocationsInterfaces";

import {
  addDoc,
  deleteDoc,
  doc,
  collection,
  serverTimestamp,
  updateDoc,
  onSnapshot,
  orderBy,
  query,
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

export const getSubLocations = (
  setSubLocations: (subLocations: TransformedSubLocationResponse[]) => void
): (() => void) => {
  const subLocationsQuery = query(
    locationCollectionRef,
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(subLocationsQuery, (snapshot) => {
    const subLocationsData: TransformedSubLocationResponse[] =
      snapshot.docs.map((doc) => {
        const data = doc.data();
        const createdAtTimestamp = data.createdAt;
        const createdAtDate = createdAtTimestamp.toDate();
        const readableDate = createdAtDate.toLocaleString();

        return {
          id: doc.id,
          createdAt: readableDate,

          name: data.name,
          email: data.email,
          message: data.message,
          lat: data.lat,
          lng: data.lng,
        };
      });

    setSubLocations(subLocationsData);
  });

  return unsubscribe;
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

export const getOurLocations = (
  setOurLocations: (ourLocations: TransformedOurLocationResponse[]) => void
): (() => void) => {
  const ourLocationsQuery = query(
    ourLocationCollectionRef,
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(ourLocationsQuery, (snapshot) => {
    const ourLocationsData: TransformedOurLocationResponse[] =
      snapshot.docs.map((doc) => {
        const data = doc.data();
        const createdAtTimestamp = data.createdAt;
        const createdAtDate = createdAtTimestamp.toDate();
        const readableDate = createdAtDate.toLocaleString();

        return {
          id: doc.id,
          createdAt: readableDate,
          locationName: data.locationName,
          date: data.date,
          description: data.description,
          plastic: data.plastic,
          metal: data.metal,
          glass: data.glass,
          other: data.other,
          animals: data.animals,
          lat: data.lat,
          lng: data.lng,
        };
      });

    setOurLocations(ourLocationsData);
  });

  return unsubscribe;
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

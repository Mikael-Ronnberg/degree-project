import { create } from "zustand";
import { TransformedSubLocationResponse } from "../model/LocationsInterfaces";

interface SubLocationState {
  subLocations: TransformedSubLocationResponse[];
  setSubLocations: (subLocations: TransformedSubLocationResponse[]) => void;
  setSingleSubLocation: (subLocation: TransformedSubLocationResponse) => void;
  deleteSingleSubLocation: (subLocationId: string) => void;
  updateSubLocationStore: (
    updatedSubLocation: TransformedSubLocationResponse
  ) => void;
}

export const useSubLocationsStore = create<SubLocationState>((set) => ({
  subLocations: [],
  setSubLocations: (subLocations) => set({ subLocations }),
  setSingleSubLocation: (subLocation) =>
    set((state) => ({ subLocations: [...state.subLocations, subLocation] })),
  deleteSingleSubLocation: (subLocationId) =>
    set((state) => ({
      subLocations: state.subLocations.filter(
        (subLocation) => subLocation.id !== subLocationId
      ),
    })),
  updateSubLocationStore: (updatedSubLocation) =>
    set((state) => ({
      subLocations: state.subLocations.map((subLocation) =>
        subLocation.id === updatedSubLocation.id
          ? { ...updatedSubLocation }
          : subLocation
      ),
    })),
}));

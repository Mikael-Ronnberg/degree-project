import { create } from "zustand";
import { TransformedOurLocationResponse } from "../model/LocationsInterfaces";

interface OurLocationsState {
  ourLocations: TransformedOurLocationResponse[];
  showLocation: boolean;
  setOurLocations: (ourLocations: TransformedOurLocationResponse[]) => void;
  setSingleOurLocation: (ourLocation: TransformedOurLocationResponse) => void;
  setShowLocations: (showLocation: boolean) => void;
  deleteSingleOurLocation: (ourLocationId: string) => void;
  updateOurLocationsStore: (
    updatedOurLocation: TransformedOurLocationResponse
  ) => void;
}

export const useOurLocationsStore = create<OurLocationsState>((set) => ({
  ourLocations: [],
  showLocation: false,
  setOurLocations: (ourLocations) => set({ ourLocations }),
  setSingleOurLocation: (ourLocation) =>
    set((state) => ({ ourLocations: [...state.ourLocations, ourLocation] })),
  setShowLocations: (showLocation) => set({ showLocation }),
  deleteSingleOurLocation: (ourLocationId) =>
    set((state) => ({
      ourLocations: state.ourLocations.filter(
        (ourLocation) => ourLocation.id !== ourLocationId
      ),
    })),
  updateOurLocationsStore: (updatedOurLocation) =>
    set((state) => ({
      ourLocations: state.ourLocations.map((ourLocation) =>
        ourLocation.id === updatedOurLocation.id
          ? { ...updatedOurLocation }
          : ourLocation
      ),
    })),
}));

import { create } from "zustand";
import { LocationCoords, SubLocation } from "../model/LocationsInterfaces";

interface LocationState {
  selectLocation: SubLocation | null;
  listLocations: SubLocation[];
  pinLocation: LocationCoords | null;
  formSubmitted: boolean;

  setListLocations: (locations: SubLocation[]) => void;
  setSelectLocation: (location: SubLocation | null) => void;
  setPinLocation: (location: LocationCoords | null) => void;
  setFormSubmitted: (submitted: boolean) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  selectLocation: null,
  // {
  //   address: {
  //     city: "",
  //     municipality: "",
  //     county: "",
  //     country: "",
  //   },
  //   addresstype: "",
  //   boundingbox: [""],
  //   class: "",
  //   display_name: "",
  //   importance: 0,
  //   lat: "",
  //   lon: "",
  //   name: "",
  //   osm_id: 0,
  //   osm_type: "",
  //   place_id: 0,
  //   place_rank: 0,
  //   type: "",
  // }
  listLocations: [],
  pinLocation: null,
  formSubmitted: false,

  setListLocations: (locations) => set({ listLocations: locations }),
  setPinLocation: (location) => set({ pinLocation: location }),
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
  setSelectLocation: (location) => set({ selectLocation: location }),
}));

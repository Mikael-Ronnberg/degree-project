import { create } from "zustand";
import { LocationCoords, LocationObj } from "../model/LocationsInterfaces";

interface LocationState {
  selectLocation: LocationObj;
  listLocations: LocationObj[];
  pinLocation: LocationCoords | null;
  formSubmitted: boolean;

  setListLocations: (locations: LocationObj[]) => void;
  setSelectLocation: (location: LocationObj) => void;
  setPinLocation: (location: LocationCoords | null) => void;
  setFormSubmitted: (submitted: boolean) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  selectLocation: {
    address: {
      city: "",
      municipality: "",
      county: "",
      country: "",
    },
    addresstype: "",
    boundingbox: [""],
    class: "",
    display_name: "",
    importance: 0,
    lat: "",
    lon: "",
    name: "",
    osm_id: 0,
    osm_type: "",
    place_id: 0,
    place_rank: 0,
    type: "",
  },
  listLocations: [],
  pinLocation: null,
  formSubmitted: false,

  setListLocations: (locations) => set({ listLocations: locations }),
  setPinLocation: (location) => set({ pinLocation: location }),
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
  setSelectLocation: (location) => set({ selectLocation: location }),
}));

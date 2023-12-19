import { create } from "zustand";
import { ILocation, ILocationObj } from "../pages/locations/model/Interfaces";

interface LocationState {
  selectLocation: ILocationObj;
  listLocations: ILocationObj[];
  pinLocation: ILocation | null;
  formSubmitted: boolean;

  setListLocations: (locations: ILocationObj[]) => void;
  setSelectLocation: (location: ILocationObj) => void;
  setPinLocation: (location: ILocation | null) => void;
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

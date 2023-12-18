import { create } from "zustand";
import { ILocation, ILocationObj } from "../model/Interfaces";

interface LocationState {
  selectLocation: ILocationObj;
  pinLocation: ILocation | null;
  formSubmitted: boolean;
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
  pinLocation: null,
  formSubmitted: false,

  setPinLocation: (location) => set({ pinLocation: location }),
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),
  setSelectLocation: (locationObject) =>
    set({ selectLocation: locationObject }),
}));

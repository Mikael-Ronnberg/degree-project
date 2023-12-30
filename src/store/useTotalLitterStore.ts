import { create } from "zustand";
import { Totals } from "../model/GlobalInterfaces";

interface TotalLitterState {
  totals: Totals;
  setTotals: (totals: Totals) => void;
}

export const useTotalLitterStore = create<TotalLitterState>((set) => ({
  totals: {
    totalPlastic: 0,
    totalMetal: 0,
    totalGlass: 0,
    totalOther: 0,
    totalAnimals: 0,
  },
  setTotals: (totals) => set({ totals: totals }),
}));

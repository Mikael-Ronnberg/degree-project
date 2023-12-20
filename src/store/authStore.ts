import { create } from "zustand";

interface AuthState {
  currentUser: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: false,
  login: () => set({ currentUser: true }),
  logout: () => set({ currentUser: false }),
}));

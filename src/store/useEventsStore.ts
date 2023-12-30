import { create } from "zustand";
import { TransformedEventResponse } from "../model/EventsInterfaces";

interface EventState {
  events: TransformedEventResponse[];
  setEvents: (events: TransformedEventResponse[]) => void;
  setSingleEvent: (event: TransformedEventResponse) => void;
  deleteSingleEvent: (eventId: string) => void;
  updateEventStore: (updatedEvent: TransformedEventResponse) => void;
}

export const useEventsStore = create<EventState>((set) => ({
  events: [],
  loadedPages: new Set(),
  setEvents: (events) => set({ events }),
  setSingleEvent: (event) =>
    set((state) => ({ events: [...state.events, event] })),
  deleteSingleEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
    })),
  updateEventStore: (updatedEvent) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === updatedEvent.id ? { ...updatedEvent } : event
      ),
    })),
}));

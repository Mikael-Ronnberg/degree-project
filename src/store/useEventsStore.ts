import { create } from "zustand";
import { TransformedEventResponse } from "../model/AdminInterfaces";

interface EventState {
  events: TransformedEventResponse[];
  setEvents: (events: TransformedEventResponse[]) => void;
  deleteEvent: (eventId: string) => void;
  updateEventStore: (updatedEvent: TransformedEventResponse) => void;
}

export const useEventsStore = create<EventState>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  deleteEvent: (eventId) =>
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

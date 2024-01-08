import { Flex, Box, Heading } from "@chakra-ui/react";
import {
  eventContainerStyles,
  eventHeadingBox,
  eventHeadingStyles,
  eventPageStyles,
} from "./style/eventStyle";
import { useEventsStore } from "../../store/useEventsStore";
import { useEffect } from "react";
import { getEvents } from "../../services/EventServices";
import { EventCard } from "./feature/EventCard";
import { Footer } from "./feature/Footer";
import { sortEventsByDate } from "../../helpers/globalHelpers";

export const Events = () => {
  const { events, setEvents } = useEventsStore();

  useEffect(() => {
    const unsubscribe = getEvents(setEvents);

    return () => unsubscribe();
  }, []);

  const sortedEvents = sortEventsByDate(events);

  return (
    <>
      <Flex {...eventPageStyles}>
        <Box {...eventHeadingBox}>
          <Heading {...eventHeadingStyles}>Kommande Händelser</Heading>
        </Box>
        <Flex {...eventContainerStyles}>
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

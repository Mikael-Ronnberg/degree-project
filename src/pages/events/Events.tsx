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

export const Events = () => {
  const { events, setEvents } = useEventsStore();

  useEffect(() => {
    const fetchEvents = async () => {
      if (events.length === 0) {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      }
    };

    fetchEvents();
  });

  return (
    <>
      <Flex {...eventPageStyles}>
        <Box {...eventHeadingBox}>
          <Heading {...eventHeadingStyles}>Kommande Händelser</Heading>
        </Box>
        <Flex {...eventContainerStyles}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

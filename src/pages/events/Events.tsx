import { Flex, Box, Heading } from "@chakra-ui/react";
import {
  eventContainerStyles,
  eventHeadingBox,
  eventHeadingStyles,
  eventPageStyles,
} from "./style/eventStyle";
import { useEventsStore } from "../../store/useEventsStore";
import { useEffect, useState } from "react";
import { getEvents } from "../../services/EventServices";
import { EventCard } from "./feature/EventCard";
import { Footer } from "./feature/Footer";
import { sortEventsByDate } from "../../helpers/globalHelpers";
import { TransformedEventResponse } from "../../model/EventsInterfaces";

export const Events = () => {
  const { events, setEvents } = useEventsStore();
  const [showEvents, setShowEvents] = useState<TransformedEventResponse[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res: TransformedEventResponse[] = await getEvents();
      const sortedEvents = sortEventsByDate(res);

      setEvents(sortedEvents);
      setShowEvents(sortedEvents.slice(0, 10));
    };

    if (events.length === 0) {
      fetchEvents();
    } else {
      const sortedEvents = sortEventsByDate(events);
      setShowEvents(sortedEvents.slice(0, 10));
    }
  }, [events, setEvents]);

  return (
    <>
      <Flex {...eventPageStyles}>
        <Box {...eventHeadingBox}>
          <Heading {...eventHeadingStyles}>Kommande Händelser</Heading>
        </Box>
        <Flex {...eventContainerStyles}>
          {showEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

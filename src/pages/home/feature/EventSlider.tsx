import { Box, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEventsStore } from "../../../store/useEventsStore";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { getEvents } from "../../../services/EventServices";
import { eventSlideSettings, eventSlideStyles } from "../style/styleHome";
import { EventSlideCard } from "./EventSlideCard";
import { SwiperButtons } from "../../../components/buttons/SwiperButtons";
import { sortEventsByDate } from "../../../helpers/globalHelpers";
import { GreyButton } from "../../../components/buttons/GreyButton";

export const EventSlider = () => {
  const { events, setEvents } = useEventsStore();
  const [slideEvents, setSlideEvents] = useState<TransformedEventResponse[]>(
    []
  );

  useEffect(() => {
    const fetchEvents = async () => {
      const res: TransformedEventResponse[] = await getEvents();
      const sortedEvents = sortEventsByDate(res);

      setEvents(sortedEvents);
      setSlideEvents(sortedEvents.slice(0, 10));
    };

    if (events.length === 0) {
      fetchEvents();
    } else {
      const sortedEvents = sortEventsByDate(events);
      setSlideEvents(sortedEvents.slice(0, 10));
    }
  }, [events, setEvents]);

  return (
    <>
      <Box
        w={{ base: "100vw" }}
        mx="auto"
        p={{ base: "1rem", lg: "2rem" }}
        background="#d6e9fb"
        border="2px solid black"
        mb="3rem"
      >
        <VStack my={{ base: "2rem", md: "3rem", lg: "4rem" }} spacing="2rem">
          <Heading
            textAlign="center"
            pb={{ base: "0rem", md: "0.5rem", lg: "1.5rem" }}
            px="1rem"
            fontSize={{ base: "1.5rem", md: "2rem", lg: "2.3rem" }}
          >
            Kika in våra kommande händelser
          </Heading>
          <GreyButton linkTo="/events" buttonText="Kommande Händelser" />
        </VStack>
        <Swiper {...eventSlideSettings}>
          {slideEvents.map((event) => (
            <SwiperSlide key={event.id} style={eventSlideStyles}>
              <EventSlideCard event={event} />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Box>
    </>
  );
};

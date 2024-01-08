import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EventCard } from "./feature/EventCard";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { useEventsStore } from "../../store/useEventsStore";
import { greySmallButtonStyles } from "../../components/buttons/style/buttonStyles";
import { getEvents } from "../../services/EventServices";
import { sortEventsByDate } from "../../helpers/globalHelpers";

const ITEMS_PER_PAGE = 3;

export const OurEvents = () => {
  const { events, setEvents } = useEventsStore();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const unsubscribe = getEvents(setEvents);

    return () => unsubscribe();
  }, []);

  const sortedEvents = sortEventsByDate(events);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = sortedEvents.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Flex {...adminPageStyles}>
        <VStack>
          {currentItems.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <HStack spacing="2rem" mb="2rem" mt="2rem">
            {currentPage > 1 && (
              <Button
                {...greySmallButtonStyles}
                onClick={() => paginate(currentPage - 1)}
              >
                Föregående
              </Button>
            )}
            {indexOfLastItem < events.length && (
              <Button
                {...greySmallButtonStyles}
                onClick={() => paginate(currentPage + 1)}
              >
                Nästa
              </Button>
            )}
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

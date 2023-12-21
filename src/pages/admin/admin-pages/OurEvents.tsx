import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { adminPageStyles } from "../style/styleAdmin";
import { Navbar } from "../../../components/navbar/NavBar";
import { adminNavItems } from "../../../helpers/helpers";
import { TransformedEventResponse } from "../model/AdminInterfaces";
import { useEffect, useState } from "react";
import { EventCard } from "../feature/EventCard";
import { getEvents } from "../services/AdminServices";

const ITEMS_PER_PAGE = 3;

export const OurEvents = () => {
  const [events, setEvents] = useState<TransformedEventResponse[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const sortedEvents = [...currentItems].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <>
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <VStack>
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <HStack spacing="2rem" mb="2rem" mt="2rem">
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Föregående
            </Button>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= events.length}
            >
              Nästa
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

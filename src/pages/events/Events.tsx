import {
  Flex,
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  eventContainerStyles,
  eventHeadingBox,
  eventHeadingStyles,
  eventModalContainerStyles,
  eventModalContentStyles,
  eventModalHeaderStyles,
  eventModalRedStackStyles,
  eventPageStyles,
} from "./style/eventStyle";
import { useEventsStore } from "../../store/useEventsStore";
import { useEffect, useState } from "react";
import { getEvents } from "../../services/EventServices";
import { EventCard } from "./feature/EventCard";
import { modalCloseButtonStyles } from "../../components/buttons/style/buttonStyles";
import { TransformedEventResponse } from "../../model/EventsInterfaces";
import { Calendar } from "../../components/icons/Calendar";

export const Events = () => {
  const { events, setEvents } = useEventsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState<TransformedEventResponse | null>(
    null
  );

  useEffect(() => {
    const fetchEvents = async () => {
      if (events.length === 0) {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      }
    };

    fetchEvents();
  });

  const openModal = (event: TransformedEventResponse) => {
    setModalEvent(event);
    setIsModalOpen(true);
  };

  return (
    <>
      <Flex {...eventPageStyles}>
        <Box {...eventHeadingBox}>
          <Heading {...eventHeadingStyles}>Kommande Händelser</Heading>
        </Box>
        <Flex {...eventContainerStyles}>
          {events.map((event) => (
            <Box
              key={event.id}
              onClick={() => openModal(event)}
              cursor="pointer"
            >
              <EventCard event={event} />
            </Box>
          ))}
        </Flex>
      </Flex>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="l"
      >
        <ModalOverlay />
        <ModalContent {...eventModalContentStyles}>
          <ModalHeader {...eventModalHeaderStyles}>
            {modalEvent?.heading}
            <ModalCloseButton p="4rem" {...modalCloseButtonStyles} />
          </ModalHeader>
          <ModalBody>
            <VStack {...eventModalContainerStyles}>
              <HStack {...eventModalRedStackStyles}>
                <Calendar />
                <Text>{modalEvent?.date}</Text>
              </HStack>
              <Text>{modalEvent?.description}</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

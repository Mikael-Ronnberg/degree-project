import { Flex, HStack, Button, Text, Heading } from "@chakra-ui/react";
import {
  adminCardStyles,
  adminCardTextStyles,
} from "../../admin/style/styleAdmin";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { deleteEvent } from "../../../services/EventServices";
import { UpdateEventModal } from "./UpdateEventModal";
import { useEventsStore } from "../../../store/useEventsStore";

interface EventCardProps {
  event: TransformedEventResponse;
}

export const EventCard = ({ event }: EventCardProps) => {
  const { deleteSingleEvent } = useEventsStore();
  return (
    <>
      <Flex {...adminCardStyles}>
        <HStack spacing="2rem">
          <Heading>{event.heading}</Heading>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Datum:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{event.date}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Information om händelsen:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{event.description}</Text>
        </HStack>

        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Skapad: </Text>
          <Text>{event.createdAt}</Text>
        </HStack>
        <HStack>
          <UpdateEventModal formValues={event} />
          <Button
            onClick={() => {
              deleteEvent(event.id), deleteSingleEvent(event.id);
            }}
          >
            Ta Bort Händelsen!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};
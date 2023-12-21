import { Flex, HStack, Button, Text, Heading } from "@chakra-ui/react";
import {
  subLocationCardStyles,
  subLocationTextStyles,
} from "../../admin/style/styleAdmin";
import { TransformedEventResponse } from "../../../model/AdminInterfaces";
import { deleteEvent } from "../../../services/AdminServices";

interface EventCardProps {
  event: TransformedEventResponse;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <Flex key={event.id} {...subLocationCardStyles}>
        <HStack spacing="2rem">
          <Heading>{event.heading}</Heading>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Datum:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{event.date}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Information om händelsen:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{event.description}</Text>
        </HStack>

        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Skapad: </Text>
          <Text>{event.createdAt}</Text>
        </HStack>
        <HStack>
          {/* <EditEventModal formValues={event} /> */}
          <Button onClick={() => deleteEvent(event.id)}>
            Ta Bort Händelsen!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

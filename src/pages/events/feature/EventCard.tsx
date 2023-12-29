import { Flex, VStack, Text } from "@chakra-ui/react";
import {
  eventCardContainerStyles,
  eventCardDateStyles,
  eventCardDescSyles,
  eventCardHeadingStyles,
  eventCardRedBoxStyles,
  eventCardWhiteBoxStyles,
} from "../style/eventStyle";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { Calendar } from "../../../components/icons/Calendar";

interface EventCard {
  event: TransformedEventResponse;
}

export const EventCard = ({ event }: EventCard) => {
  return (
    <>
      <Flex {...eventCardContainerStyles}>
        <VStack {...eventCardRedBoxStyles}>
          <Calendar />
          <Text {...eventCardDateStyles}>{event.date}</Text>
        </VStack>
        <VStack {...eventCardWhiteBoxStyles}>
          <Text {...eventCardHeadingStyles}>{event.heading}</Text>
          <Text {...eventCardDescSyles}>{event.description}</Text>
        </VStack>
      </Flex>
    </>
  );
};

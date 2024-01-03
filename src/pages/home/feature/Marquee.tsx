import { Text, keyframes, Flex, VStack } from "@chakra-ui/react";

import { useEventsStore } from "../../../store/useEventsStore";
import { useEffect, useState } from "react";
import { getEvents } from "../../../services/EventServices";
import {
  convertDateFormat,
  getSubstring,
} from "../../../helpers/globalHelpers";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";

const rtlMove = keyframes`
  0% { transform: translateX(100%) }
  100% { transform: translateX(-100%)  }
`;

export const Marquee = () => {
  const [marqueeEvents, setMarqueeEvents] = useState<
    TransformedEventResponse[]
  >([]);
  const { events, setEvents } = useEventsStore();

  useEffect(() => {
    const fetchEvents = async () => {
      if (events.length === 0) {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents);
      }
    };

    const firstFourEvents = events.slice(0, 4);
    setMarqueeEvents(firstFourEvents);

    fetchEvents();
  }, [marqueeEvents]);

  return (
    <Flex
      w="1280px"
      justify="flex-end"
      border="5px solid black"
      borderRadius="20px"
      mb="2rem"
      overflow="hidden"
      background="brand.purple"
      backgroundImage="url(/svg/Line.svg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      p="1rem"
    >
      <Flex
        w="1200px"
        justify="space-evenly"
        animation={`${rtlMove} 18s linear infinite`}
      >
        {marqueeEvents.map((event, i) => (
          <Flex
            key={i}
            align="center"
            justify="center"
            direction="column"
            backgroundImage="url(/svg/calendarBG.svg)"
            backgroundPosition="center"
            backgroundSize="cover"
            w="200px"
            h="200px"
            mx="3rem"
            // border="2px solid black"
            // overflow="hidden"
          >
            <VStack spacing="1rem">
              <Text textAlign="center" fontSize="0.8rem" fontWeight="bold">
                {convertDateFormat(event.date)}
              </Text>
              <Text
                textAlign="center"
                fontSize="0.9rem"
                fontWeight="bold"
                p="1rem"
                w="180px"
                minH="75px"
              >
                {getSubstring(event.heading, 20)}
              </Text>
            </VStack>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

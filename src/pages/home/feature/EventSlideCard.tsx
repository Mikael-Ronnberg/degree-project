import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { Calendar } from "../../../components/icons/Calendar";
import {
  convertDateFormat,
  getSubstring,
} from "../../../helpers/globalHelpers";

interface EventSlideCard {
  event: TransformedEventResponse;
}

export const EventSlideCard = ({ event }: EventSlideCard) => {
  return (
    <>
      <Card
        w="xs"
        border="2px solid black"
        pos="relative"
        m="0.5rem"
        rounded="sm"
        background="brand.green"
        transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "-4px 4px 0px 0px black",
        }}
      >
        <CardHeader outline="2px solid black" background="brand.red">
          <HStack spacing={{ base: "10rem", md: "7rem" }}>
            <Calendar />
            <Text
              fontWeight="bolder"
              fontSize={{ base: "1rem", md: "1.2rem", lg: "1.3rem" }}
            >
              {convertDateFormat(event.date)}
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <VStack w="auto" minH={{ base: "10vh", md: "20vh" }} spacing="2rem">
            <Heading
              fontSize={{ base: "1rem", md: "1.2rem", lg: "1.3rem" }}
              textAlign="center"
            >
              {getSubstring(event.heading, 20)}
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1.1rem", lg: "1.2rem" }}
              textAlign="center"
            >
              {getSubstring(event.description, 50)}
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

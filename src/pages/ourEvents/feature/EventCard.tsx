import { Flex, HStack, Button, Text, Heading, Grid } from "@chakra-ui/react";
import {
  adminCardStyles,
  adminHeadingStyles,
  adminTextStyles,
  generalCardGridStyles,
} from "../../admin/style/styleAdmin";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { deleteEvent } from "../../../services/EventServices";
import { UpdateEventModal } from "./UpdateEventModal";
import { useEventsStore } from "../../../store/useEventsStore";
import { greySmallButtonStyles } from "../../../components/buttons/style/buttonStyles";

interface EventCardProps {
  event: TransformedEventResponse;
}

export const EventCard = ({ event }: EventCardProps) => {
  const { deleteSingleEvent } = useEventsStore();
  return (
    <>
      <Flex {...adminCardStyles}>
        <Heading {...adminHeadingStyles}>{event.heading}</Heading>
        <Grid {...generalCardGridStyles}>
          <Text
            {...adminTextStyles}
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Datum:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {event.date}
          </Text>
          <Text
            {...adminTextStyles}
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Information om händelsen:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {event.description}
          </Text>
          <Text
            {...adminTextStyles}
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Skapad:{" "}
          </Text>
          <Text textAlign="left" pl="1.5rem">
            {event.createdAt}
          </Text>
        </Grid>

        <HStack spacing="1rem" mt="1.5rem">
          <Button
            onClick={() => {
              deleteEvent(event.id), deleteSingleEvent(event.id);
            }}
            {...greySmallButtonStyles}
            background="brand.red"
          >
            Ta Bort Händelsen!
          </Button>
          <UpdateEventModal formValues={event} />
        </HStack>
      </Flex>
    </>
  );
};

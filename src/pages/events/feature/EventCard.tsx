import { Text, GridItem, Grid } from "@chakra-ui/react";
import {
  eventCardContainerStyles,
  eventCardDateStyles,
  eventCardDescSyles,
  eventCardHeadingStyles,
  eventCardRedItemStyles,
  eventCardWhiteItemStyles,
} from "../style/eventStyle";
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { Calendar } from "../../../components/icons/Calendar";
import { convertDateFormat } from "../../../helpers/globalHelpers";

interface EventCard {
  event: TransformedEventResponse;
}

export const EventCard = ({ event }: EventCard) => {
  return (
    <>
      <Grid {...eventCardContainerStyles}>
        <GridItem {...eventCardRedItemStyles}>
          <Calendar />
          <Text {...eventCardDateStyles}>{convertDateFormat(event.date)}</Text>
        </GridItem>
        <GridItem {...eventCardWhiteItemStyles}>
          <Text {...eventCardHeadingStyles}>{event.heading}</Text>
          <Text {...eventCardDescSyles}>{event.description}</Text>
        </GridItem>
      </Grid>
    </>
  );
};

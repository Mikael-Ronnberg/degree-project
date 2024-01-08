import {
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { TransformedOurLocationResponse } from "../../../model/LocationsInterfaces";
import { deleteOurLocation } from "../../../services/MapServices";
import { UpdateOurLocationModal } from "./UpdateOurLocationModal";
import {
  adminCardStyles,
  adminHeadingStyles,
  adminTextStyles,
  generalCardGridStyles,
} from "../../admin/style/styleAdmin";
import { greySmallButtonStyles } from "../../../components/buttons/style/buttonStyles";

interface OurLocationCardProps {
  location: TransformedOurLocationResponse;
}

export const OurLocationCard = ({ location }: OurLocationCardProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <>
      <Flex {...adminCardStyles}>
        <Heading {...adminHeadingStyles} mb="1rem">
          {location.locationName}
        </Heading>
        <Grid {...generalCardGridStyles}>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Datum:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.date}
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Information om denna plats:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.description}
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Plast:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.plastic} kg
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Metall:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.metal} kg
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Glas :
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.glass} kg
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Övrigt:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.other} kg
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Individer invasiva arter:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.animals} st
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Skapad:
          </Text>
          <Text {...adminTextStyles} textAlign="left" pl="1.5rem">
            {location.createdAt}
          </Text>
        </Grid>

        <Text {...adminTextStyles} py="1rem">
          <Link href={googleMapsUrl} isExternal color="brand.blue">
            Öppna platsen i Google Maps
          </Link>
        </Text>

        <HStack spacing="1rem" mt="1.5rem">
          <Button
            onClick={() => deleteOurLocation(location.id)}
            {...greySmallButtonStyles}
            background="brand.red"
          >
            Ta Bort Platsen!
          </Button>
          <UpdateOurLocationModal formValues={location} />
        </HStack>
      </Flex>
    </>
  );
};

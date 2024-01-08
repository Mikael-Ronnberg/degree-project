import { Flex, Button, Text, Link, Grid, VStack } from "@chakra-ui/react";
import { deleteSubLocation } from "../../../services/MapServices";
import { TransformedSubLocationResponse } from "../../../model/LocationsInterfaces";
import {
  adminCardStyles,
  adminTextStyles,
  generalCardGridStyles,
} from "../../admin/style/styleAdmin";
import { greySmallButtonStyles } from "../../../components/buttons/style/buttonStyles";

interface SubLocationCardProps {
  location: TransformedSubLocationResponse;
}

export const SubLocationCard = ({ location }: SubLocationCardProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <>
      <Flex key={location.id} {...adminCardStyles}>
        <Grid {...generalCardGridStyles}>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Namn:
          </Text>
          <Text
            {...adminTextStyles}
            {...adminTextStyles}
            textAlign="left"
            pl="1.5rem"
          >
            {location.name}
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Email:
          </Text>
          <Text
            {...adminTextStyles}
            {...adminTextStyles}
            textAlign="left"
            pl="1.5rem"
          >
            {location.email}
          </Text>
          <Text
            {...adminTextStyles}
            fontWeight="bold"
            textAlign="left"
            pl="1.5rem"
          >
            Meddelande:
          </Text>
          <Text
            {...adminTextStyles}
            {...adminTextStyles}
            textAlign="left"
            pl="1.5rem"
          >
            {location.message}
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
        <VStack spacing="2rem" pt="1rem">
          <Text>
            <Link href={googleMapsUrl} isExternal color="brand.blue">
              Öppna platsen i Google Maps
            </Link>
          </Text>

          <Button
            onClick={() => deleteSubLocation(location.id)}
            {...greySmallButtonStyles}
            background="brand.red"
          >
            Ta Bort Tipset
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

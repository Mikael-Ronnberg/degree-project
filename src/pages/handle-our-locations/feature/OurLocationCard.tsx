import { Flex, HStack, Button, Text, Link } from "@chakra-ui/react";
import { TransformedOurLocationResponse } from "../../../model/LocationsInterfaces";
import { deleteOurLocation } from "../../../services/MapServices";
import { UpdateOurLocationModal } from "./UpdateOurLocationModal";
import {
  adminCardStyles,
  adminCardTextStyles,
} from "../../admin/style/styleAdmin";

interface OurLocationCardProps {
  location: TransformedOurLocationResponse;
}

export const OurLocationCard = ({ location }: OurLocationCardProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <>
      <Flex {...adminCardStyles}>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Namn på platsen:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{location.locationName}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Datum:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{location.date}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Information om denna plats:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{location.description}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Plast i kg: </Text>
          <Text>{location.plastic}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Metall i kg: </Text>
          <Text>{location.metal}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Glas i kg: </Text>
          <Text>{location.glass}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Övrigt i kg: </Text>
          <Text>{location.other}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>
            Antal individer av invasiva arter:{" "}
          </Text>
          <Text>{location.animals}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>
            <Link href={googleMapsUrl} isExternal color="brand.blue">
              Öppna platsen i Google Maps
            </Link>
          </Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Skapad: </Text>
          <Text>{location.createdAt}</Text>
        </HStack>
        <HStack>
          <UpdateOurLocationModal formValues={location} />
          <Button onClick={() => deleteOurLocation(location.id)}>
            Ta Bort Platsen!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};
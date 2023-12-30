import { Flex, HStack, Button, Text, Link } from "@chakra-ui/react";
import { deleteSubLocation } from "../../../services/MapServices";
import { TransformedSubLocationResponse } from "../../../model/LocationsInterfaces";
import {
  adminCardStyles,
  adminCardTextStyles,
} from "../../admin/style/styleAdmin";

interface SubLocationCardProps {
  location: TransformedSubLocationResponse;
}

export const SubLocationCard = ({ location }: SubLocationCardProps) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <>
      <Flex key={location.id} {...adminCardStyles}>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Namn:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{location.name}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Email:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{location.email}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            Meddelande:{" "}
          </Text>
          <Text {...adminCardTextStyles}>{location.message}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text>
            <Link href={googleMapsUrl} isExternal color="brand.blue">
              Öppna platsen i Google Maps
            </Link>
          </Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Skapad: </Text>
          <Text>{location.createdAt}</Text>
        </HStack>

        <Button onClick={() => deleteSubLocation(location.id)}>
          Ta Bort Tipset
        </Button>
      </Flex>
    </>
  );
};

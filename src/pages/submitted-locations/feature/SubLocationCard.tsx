import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import { deleteSubLocation } from "../../../services/MapServices";
import { TransformedLocationResponse } from "../../../model/LocationsInterfaces";
import {
  adminCardStyles,
  adminCardTextStyles,
} from "../../admin/style/styleAdmin";

interface SubLocationCardProps {
  location: TransformedLocationResponse;
}

export const SubLocationCard = ({ location }: SubLocationCardProps) => {
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
          <Text {...adminCardTextStyles}>Lattitud: </Text>
          <Text>{location.lat}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Longitud: </Text>
          <Text>{location.lng}</Text>
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

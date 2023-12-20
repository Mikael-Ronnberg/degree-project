import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import { deleteSubLocation } from "../../../services/MapServices";
import {
  subLocationCardStyles,
  subLocationTextStyles,
} from "../style/styleAdmin";
import { TransformedLocationResponse } from "../../locations/model/Interfaces";

interface SubLocCardProps {
  location: TransformedLocationResponse;
}

export const SubLocCard = ({ location }: SubLocCardProps) => {
  return (
    <>
      <Flex key={location.id} {...subLocationCardStyles}>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Namn:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{location.name}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Email:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{location.email}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Meddelande:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{location.message}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Lattitud: </Text>
          <Text>{location.lat}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Longitud: </Text>
          <Text>{location.lng}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Skapad: </Text>
          <Text>{location.createdAt}</Text>
        </HStack>
        <Button onClick={() => deleteSubLocation(location.id)}>
          Ta Bord Tipset
        </Button>
      </Flex>
    </>
  );
};

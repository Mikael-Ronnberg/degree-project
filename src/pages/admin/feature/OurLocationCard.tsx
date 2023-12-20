import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import {
  subLocationCardStyles,
  subLocationTextStyles,
} from "../style/styleAdmin";
import { TransformedOurLocationResponse } from "../model/adminInterfaces";
import { deleteOurLocation } from "../../../services/MapServices";

interface OurLocationCardProps {
  location: TransformedOurLocationResponse;
}

export const OurLocationCard = ({ location }: OurLocationCardProps) => {
  return (
    <>
      <Flex key={location.id} {...subLocationCardStyles}>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Namn på platsen:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{location.locationName}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Datum:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{location.date}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles} fontWeight="bold">
            Information on denna plats:{" "}
          </Text>
          <Text {...subLocationTextStyles}>{location.description}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Plast i kg: </Text>
          <Text>{location.plastic}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Metall i kg: </Text>
          <Text>{location.metal}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Glas i kg: </Text>
          <Text>{location.glass}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>Övrigt i kg: </Text>
          <Text>{location.other}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...subLocationTextStyles}>
            Antal individer av invasiva arter:{" "}
          </Text>
          <Text>{location.animals}</Text>
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
        <HStack>
          <Button onClick={() => deleteOurLocation(location.id)}>
            Uppdatera
          </Button>
          <Button onClick={() => deleteOurLocation(location.id)}>
            Ta Bort Platsen!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import { deleteSubLocation } from "../../../services/MapServices";
import { oneLocationStyles, oneLocationTextStyle } from "../style/styleAdmin";
import { TransformedLocationResponse } from "../../locations/model/Interfaces";

interface SubLocCardProps {
  location: TransformedLocationResponse;
}

export const SubLocCard = ({ location }: SubLocCardProps) => {
  return (
    <>
      <Flex key={location.id} {...oneLocationStyles}>
        <HStack spacing="2rem">
          <Text {...oneLocationTextStyle} fontWeight="bold">
            Namn:{" "}
          </Text>
          <Text {...oneLocationTextStyle}>{location.name}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...oneLocationTextStyle} fontWeight="bold">
            Email:{" "}
          </Text>
          <Text {...oneLocationTextStyle}>{location.email}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...oneLocationTextStyle} fontWeight="bold">
            Meddelande:{" "}
          </Text>
          <Text {...oneLocationTextStyle}>{location.message}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...oneLocationTextStyle}>Lattitud: </Text>
          <Text>{location.lat}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...oneLocationTextStyle}>Longitud: </Text>
          <Text>{location.lng}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...oneLocationTextStyle}>Skapad: </Text>
          <Text>{location.createdAt}</Text>
        </HStack>
        <Button onClick={() => deleteSubLocation(location.id)}>
          Ta Bord Tipset
        </Button>
      </Flex>
    </>
  );
};

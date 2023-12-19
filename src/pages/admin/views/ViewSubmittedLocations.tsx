import { useState, useEffect } from "react";
import { Flex, VStack, Text, HStack } from "@chakra-ui/react";
import { oneLocationStyles, oneLocationTextStyle } from "../style/styleAdmin";
import { getSubLocations } from "../../../services/MapServices";
import { TransformedLocationResponse } from "../../locations/model/Interfaces";

export const ViewSubmittedLocations = () => {
  const [subLocations, setSubLocations] = useState<
    TransformedLocationResponse[]
  >([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getSubLocations();
      setSubLocations(locations);
    };

    fetchLocations();
  }, []);

  console.log(subLocations);
  return (
    <>
      <VStack>
        {subLocations.map((location) => (
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
          </Flex>
        ))}
      </VStack>
    </>
  );
};

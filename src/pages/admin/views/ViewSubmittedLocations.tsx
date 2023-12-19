import { useState, useEffect } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { Flex, VStack, Text, HStack } from "@chakra-ui/react";
import { oneLocationStyles, oneLocationTextStyle } from "../style/styleAdmin";

interface locationResponse {
  id: string;
  name: string;
  email: string;
  message: string;
  lat: number;
  lng: number;
}

export const ViewSubmittedLocations = () => {
  const [subLocations, setSubLocations] = useState<locationResponse[]>([]);

  const locationCollectionRef = collection(db, "locations");

  useEffect(() => {
    const getSubLocations = async () => {
      try {
        const data = await getDocs(locationCollectionRef);
        const filteredData: locationResponse[] = data.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as locationResponse)
        );

        setSubLocations(filteredData);
        // console.log(subLocations);
      } catch (error) {
        console.error(error);
      }
    };

    getSubLocations();
  }, []);

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
              <Text {...oneLocationTextStyle}>Lattitud:</Text>
              <Text>{location.lat}</Text>
            </HStack>
            <HStack spacing="2rem">
              <Text {...oneLocationTextStyle}>Longitud:</Text>
              <Text>{location.lng}</Text>
            </HStack>
          </Flex>
        ))}
      </VStack>
    </>
  );
};

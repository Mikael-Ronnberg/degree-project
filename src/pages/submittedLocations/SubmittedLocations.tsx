import { useState, useEffect } from "react";
import { Flex, VStack, Button, HStack } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { getSubLocations } from "../../services/MapServices";

import { SubLocationCard } from "./feature/SubLocationCard";
import { useSubLocationsStore } from "../../store/useSubLocationsStore";
import { greySmallButtonStyles } from "../../components/buttons/style/buttonStyles";

const ITEMS_PER_PAGE = 3;

export const SubmittedLocations = () => {
  const { subLocations, setSubLocations } = useSubLocationsStore();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const unsubscribe = getSubLocations(setSubLocations);

    return () => unsubscribe();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = subLocations.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const sortedLocations = [...currentItems].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <>
      <Flex {...adminPageStyles}>
        <VStack>
          {sortedLocations.map((location) => (
            <SubLocationCard key={location.id} location={location} />
          ))}
          <HStack spacing="2rem" mb="2rem" mt="2rem">
            {currentPage > 1 && (
              <Button
                {...greySmallButtonStyles}
                onClick={() => paginate(currentPage - 1)}
              >
                Föregående
              </Button>
            )}
            {indexOfLastItem < subLocations.length && (
              <Button
                {...greySmallButtonStyles}
                onClick={() => paginate(currentPage + 1)}
              >
                Nästa
              </Button>
            )}
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

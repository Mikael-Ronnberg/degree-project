import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { useEffect, useState } from "react";
import { OurLocationCard } from "./feature/OurLocationCard";
import { getOurLocations } from "../../services/MapServices";
import { useOurLocationsStore } from "../../store/useOurLocationsStore";
import { greySmallButtonStyles } from "../../components/buttons/style/buttonStyles";

const ITEMS_PER_PAGE = 3;

export const HandleOurLocations = () => {
  const { ourLocations, setOurLocations } = useOurLocationsStore();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const unsubscribe = getOurLocations(setOurLocations);

    return () => unsubscribe();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = ourLocations.slice(indexOfFirstItem, indexOfLastItem);

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
            <OurLocationCard key={location.id} location={location} />
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
            {indexOfLastItem < ourLocations.length && (
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

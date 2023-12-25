import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { useEffect, useState } from "react";
import { OurLocationCard } from "./feature/OurLocationCard";
import { getOurLocations } from "../../services/AdminServices";
import { useOurLocationsStore } from "../../store/useOurLocationsStore";

const ITEMS_PER_PAGE = 3;

export const HandleOurLocations = () => {
  const { ourLocations, setOurLocations } = useOurLocationsStore();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      if (ourLocations.length === 0) {
        const locations = await getOurLocations();
        setOurLocations(locations);
      }
    };

    fetchLocations();
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
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Föregående
            </Button>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= ourLocations.length}
            >
              Nästa
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

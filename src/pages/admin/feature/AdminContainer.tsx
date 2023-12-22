import { Flex, Box, Text } from "@chakra-ui/react";
import { adminContainerStyles } from "../style/styleAdmin";
import { useEffect, useState } from "react";
import { fetchAndAggregateData } from "../../../services/AdminServices";

export const AdminContainer = () => {
  const [totals, setTotals] = useState({
    totalPlastic: 0,
    totalMetal: 0,
    totalGlass: 0,
    totalOther: 0,
    totalAnimals: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const aggregatedTotals = await fetchAndAggregateData();
      setTotals(aggregatedTotals);
    };

    fetchData();
  }, []);
  return (
    <>
      <Flex {...adminContainerStyles}>
        <Flex
          w="90vw"
          justify="center"
          align="center"
          h="auto"
          background="white"
          border="solid 2px black"
        >
          <Box>
            <Text>Totalt Plast: {totals.totalPlastic}</Text>
            <Text>Totalt Metall: {totals.totalMetal}</Text>
            <Text>Totalt Glas: {totals.totalGlass}</Text>
            <Text>Totalt Annat: {totals.totalOther}</Text>
            <Text>
              Totalt antal individer (invasiva arter): {totals.totalAnimals}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

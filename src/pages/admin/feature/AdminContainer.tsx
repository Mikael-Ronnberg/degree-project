import { Flex, Box, Text } from "@chakra-ui/react";
import { adminContainerStyles } from "../style/styleAdmin";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";

const fetchAndAggregateData = async () => {
  try {
    const ourLocationCollectionRef = collection(db, "ourLocations");

    const querySnapshot = await getDocs(ourLocationCollectionRef);

    let totalPlastic = 0;
    let totalMetal = 0;
    let totalGlass = 0;
    let totalOther = 0;
    let totalAnimals = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Document data:", data);
      totalPlastic += data.plastic ?? 0;
      totalMetal += data.metal ?? 0;
      totalGlass += data.glass ?? 0;
      totalOther += data.other ?? 0;
      totalAnimals += data.animals ?? 0;
    });

    return {
      totalPlastic,
      totalMetal,
      totalGlass,
      totalOther,
      totalAnimals,
    };
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return {
      totalPlastic: 0,
      totalMetal: 0,
      totalGlass: 0,
      totalOther: 0,
      totalAnimals: 0,
    };
  }
};

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

import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTotalLitterStore } from "../../../store/useTotalLitterStore";
import { fetchAndAggregateData } from "../../../services/AdminServices";
import { TempDisplayTotal } from "../../../model/GlobalInterfaces";
import { totalsDisplay } from "../../../helpers/totalsHelpers";
import { litterCardStyles } from "../style/styleHome";

interface LitterCardProps {
  type: string;
}

export const LitterCard = ({ type }: LitterCardProps) => {
  const { totals, setTotals } = useTotalLitterStore();
  const [tempDisplay, setTempDisplay] = useState<TempDisplayTotal>();

  useEffect(() => {
    const fetchData = async () => {
      // const isDataFetched = Object.values(totals).some(value => value !== 0);

      // if (!isDataFetched) {
      // }
      const totalRes = await fetchAndAggregateData();
      setTotals(totalRes);

      for (let i = 0; i < totalsDisplay.length; i++) {
        if (totalsDisplay[i].label === type) {
          setTempDisplay(totalsDisplay[i]);
        }
      }
    };
    fetchData();
  });

  const getTypeAmount = (type: string) => {
    switch (type) {
      case "other":
        return totals.totalOther;
      case "glass":
        return totals.totalGlass;
      case "metal":
        return totals.totalMetal;
      case "plastic":
        return totals.totalPlastic;
      case "animal":
        return totals.totalAnimals;
      default:
        return 0;
    }
  };

  return (
    <>
      {tempDisplay && (
        <Flex {...litterCardStyles}>
          <Heading p="1rem">{tempDisplay.heading}</Heading>
          <Text p="1rem">{tempDisplay.description}</Text>
          <VStack>
            <Text fontWeight="bold">Vi har tagit hand om: {""}</Text>
            <Text>
              {getTypeAmount(type)} {type === "animal" ? "st" : "kg"}
            </Text>
          </VStack>
        </Flex>
      )}
    </>
  );
};

import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTotalLitterStore } from "../../../store/useTotalLitterStore";
import { fetchAndAggregateData } from "../../../services/AdminServices";
import { TempDisplayTotal } from "../../../model/GlobalInterfaces";
import {
  litterCardStyles,
  litterModalHeadingStyles,
  litterModalTextStyles,
} from "../style/styleHome";
import { totalsDisplay } from "../../../constants/totals";
import { Tire } from "../../../components/icons/Tire";
import { Plastic } from "../../../components/icons/Plastic";
import { Animal } from "../../../components/icons/Animal";
import { Glass } from "../../../components/icons/Glass";
import { Metal } from "../../../components/icons/Metal";

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
      const foundDisplay = totalsDisplay.find((item) => item.label === type);
      if (foundDisplay) {
        setTempDisplay(foundDisplay);
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
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "other":
        return <Tire />;
      case "glass":
        return <Glass />;
      case "metal":
        return <Metal />;
      case "plastic":
        return <Plastic />;
      case "animal":
        return <Animal />;
      default:
        return 0;
    }
  };

  return (
    <>
      {tempDisplay && (
        <Flex {...litterCardStyles}>
          <HStack spacing={{ base: "4rem", md: "5rem" }}>
            <Heading {...litterModalHeadingStyles}>
              {tempDisplay.heading}
            </Heading>
            {getTypeIcon(type)}
          </HStack>
          <Text {...litterModalTextStyles}>{tempDisplay.description}</Text>
          <VStack>
            <Heading {...litterModalHeadingStyles}>
              Vi har tagit hand om: {""}
            </Heading>
            <Heading {...litterModalHeadingStyles} color="brand.red">
              {getTypeAmount(type)} {type === "animal" ? "st" : "kg"}
            </Heading>
          </VStack>
        </Flex>
      )}
    </>
  );
};

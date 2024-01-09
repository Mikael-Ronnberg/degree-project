import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useTotalLitterStore } from "../../../store/useTotalLitterStore";
import { totalsDisplay } from "../../../constants/totals";
import { Tire } from "../../../components/icons/Tire";
import { Animal } from "../../../components/icons/Animal";
import { Glass } from "../../../components/icons/Glass";
import { Metal } from "../../../components/icons/Metal";
import { Plastic } from "../../../components/icons/Plastic";
import {
  litterCardStyles,
  litterModalHeadingStyles,
  litterModalTextStyles,
} from "../style/styleHome";

interface LitterCardProps {
  type: string;
}

export const LitterCard = ({ type }: LitterCardProps) => {
  const { totals } = useTotalLitterStore();

  const displayObject = totalsDisplay.find((item) => item.label === type);

  const typeDetails = () => {
    let amount;
    let icon;
    switch (type) {
      case "other":
        amount = totals.totalOther;
        icon = <Tire />;
        break;
      case "glass":
        amount = totals.totalGlass;
        icon = <Glass />;
        break;
      case "metal":
        amount = totals.totalMetal;
        icon = <Metal />;
        break;
      case "plastic":
        amount = totals.totalPlastic;
        icon = <Plastic />;
        break;
      case "animal":
        amount = totals.totalAnimals;
        icon = <Animal />;
        break;
      default:
        amount = 0;
        icon = null;
    }
    return { amount, icon };
  };

  const { amount, icon } = typeDetails();

  return (
    <>
      {displayObject && (
        <Flex {...litterCardStyles}>
          <HStack spacing={{ base: "4rem", md: "5rem" }}>
            <Heading {...litterModalHeadingStyles}>
              {displayObject.heading}
            </Heading>
            {icon}
          </HStack>
          <Text {...litterModalTextStyles}>{displayObject.description}</Text>
          <VStack>
            <Heading {...litterModalHeadingStyles}>
              Vi har tagit hand om: {""}
            </Heading>
            <Heading {...litterModalHeadingStyles} color="brand.red">
              {amount} {type === "animal" ? "st" : "kg"}
            </Heading>
          </VStack>
        </Flex>
      )}
    </>
  );
};

import { VStack, Heading, HStack, Text, Image } from "@chakra-ui/react";
import {
  headerSectionCategoryStyles,
  headerSectionDateStyles,
  headerSectionHStackStyles,
  headerSectionHeadingStyles,
  headerSectionImageStyles,
  headerSectionVStackStyles,
} from "../style/viewArticleStyle";

interface HeaderSectionProps {
  mainHeading: string;
  category: string;
  date: string;
  mainImg: string;
  mainImgName: string;
}

export const HeaderSection = ({
  mainHeading,
  category,
  date,
  mainImg,
  mainImgName,
}: HeaderSectionProps) => {
  return (
    <>
      <VStack {...headerSectionVStackStyles}>
        <Heading {...headerSectionHeadingStyles}>{mainHeading}</Heading>
        <HStack {...headerSectionHStackStyles}>
          <Text {...headerSectionCategoryStyles}>{category}</Text>
          <Text {...headerSectionDateStyles}>{date}</Text>
        </HStack>
      </VStack>
      <Image src={mainImg} alt={mainImgName} {...headerSectionImageStyles} />
    </>
  );
};

import { VStack, Heading, Flex, Text, Image } from "@chakra-ui/react";
import {
  headerSectionCategoryStyles,
  headerSectionDateStyles,
  headerSectionFlexStyles,
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
        <Flex {...headerSectionFlexStyles}>
          <Text {...headerSectionCategoryStyles}>{category}</Text>
          <Text {...headerSectionDateStyles}>{date}</Text>
        </Flex>
      </VStack>
      <Image src={mainImg} alt={mainImgName} {...headerSectionImageStyles} />
    </>
  );
};

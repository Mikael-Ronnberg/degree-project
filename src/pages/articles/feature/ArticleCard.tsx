import { Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import {
  articleCardStyles,
  articleCategoryStyles,
  articleDateStyles,
  articleHeadingStyles,
  articleImageStyles,
  articleSubHeadingStyles,
} from "../style/articleStyle";

interface ArticleCardProps {
  mainImg: string;
  mainImgName: string;
  category: string;
  date: string;
  mainHeading: string;
  subHeading1: string;
}

export const ArticleCard = ({
  mainImg,
  mainImgName,
  category,
  date,
  mainHeading,
  subHeading1,
}: ArticleCardProps) => {
  return (
    <>
      <Flex {...articleCardStyles}>
        <Image src={mainImg} alt={mainImgName} {...articleImageStyles} />
        <HStack>
          <Text {...articleCategoryStyles}>{category}</Text>
          <Text {...articleDateStyles}>{date}</Text>
        </HStack>
        <Heading {...articleHeadingStyles}>{mainHeading}</Heading>
        <Text {...articleSubHeadingStyles}>{subHeading1}</Text>
      </Flex>
    </>
  );
};

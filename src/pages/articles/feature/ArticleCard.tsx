import {
  Grid,
  GridItem,
  Heading,
  Box,
  Image,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import {
  articleCardCategoryStyles,
  articleCardDateStyles,
  articleCardGridStyles,
  articleCardHeadingStyles,
  articleCardImageStyles,
  articleCardSubHeadingStyles,
  articleCardImageBoxStyles,
  articleTextItemStyles,
  articleTextFlexStyles,
} from "../style/articleStyle";
import { getSubstring } from "../../../helpers/globalHelpers";

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
      <Grid {...articleCardGridStyles}>
        <GridItem>
          <Box {...articleCardImageBoxStyles}>
            <Image
              src={mainImg}
              alt={mainImgName}
              {...articleCardImageStyles}
            />
          </Box>
        </GridItem>
        <GridItem {...articleTextItemStyles}>
          <VStack>
            <Flex {...articleTextFlexStyles}>
              <Text {...articleCardCategoryStyles}>#{category}</Text>
              <Text {...articleCardDateStyles}>{date}</Text>
            </Flex>
            <VStack spacing={{ base: "0rem", md: "2rem", lg: "4rem" }}>
              <Heading {...articleCardHeadingStyles}>
                {getSubstring(mainHeading, 50)}
              </Heading>
              <Text {...articleCardSubHeadingStyles}>
                {getSubstring(subHeading1, 120)}
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

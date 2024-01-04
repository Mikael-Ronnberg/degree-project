import { Text, Box, HStack } from "@chakra-ui/react";
import {
  authorSectionBoxStyles,
  authorSectionCategoryStyles,
  authorSectionTextStyles,
} from "../style/viewArticleStyle";

interface AuthorSectionProps {
  author: string;
  category: string;
}

export const AuthorSection = ({ author, category }: AuthorSectionProps) => {
  return (
    <>
      <Box {...authorSectionBoxStyles}>
        <HStack>
          <Text {...authorSectionTextStyles}>Skriven av: {""}</Text>
          <Text fontWeight="bold" {...authorSectionTextStyles}>
            {author}
          </Text>
        </HStack>
        <Box
          m="0.5rem"
          background="brand.pink"
          borderRadius="50px"
          px="1rem"
          w="fit-content"
        >
          <Text {...authorSectionCategoryStyles}># {category}</Text>
        </Box>
      </Box>
    </>
  );
};

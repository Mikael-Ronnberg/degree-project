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
        <HStack px="1rem">
          <Text {...authorSectionTextStyles}>Författare: {""}</Text>
          <Text fontWeight="bold" {...authorSectionTextStyles}>
            {author}
          </Text>
        </HStack>
        <Box
          background="brand.pink"
          borderRadius="50px"
          ml="1rem"
          px="1rem"
          w="fit-content"
        >
          <Text {...authorSectionCategoryStyles}>#{category}</Text>
        </Box>
      </Box>
    </>
  );
};

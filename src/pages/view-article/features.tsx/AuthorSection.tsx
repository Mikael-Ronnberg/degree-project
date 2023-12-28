import { VStack, Text } from "@chakra-ui/react";
import {
  authorSectionCategoryStyles,
  authorSectionStackStyles,
  authorSectionTextStyles,
} from "../style/viewArticleStyle";

interface AuthorSectionProps {
  author: string;
  category: string;
}

export const AuthorSection = ({ author, category }: AuthorSectionProps) => {
  return (
    <>
      <VStack {...authorSectionStackStyles}>
        <Text {...authorSectionTextStyles}>{author}</Text>
        <Text {...authorSectionCategoryStyles}>{category}</Text>
      </VStack>
    </>
  );
};

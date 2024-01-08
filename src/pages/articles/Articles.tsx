import { Button, Flex, Heading, VStack, Box, HStack } from "@chakra-ui/react";
import {
  articleContainerStyles,
  articleHeadingStyles,
  articlePageStyles,
} from "./style/articleStyle";
import { ArticleCard } from "./feature/ArticleCard";
import { useArticlesStore } from "../../store/useArticlesStore";
import { useEffect, useState } from "react";
import { getArticles } from "../../services/ArticleServices";
import { Link } from "react-router-dom";
import { greySmallButtonStyles } from "../../components/buttons/style/buttonStyles";
import { SmallWave } from "../../components/waves/SmallWave";

const ITEMS_PER_PAGE = 5;

export const Articles = () => {
  const { articles, setArticles } = useArticlesStore();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const unsubscribe = getArticles(setArticles);

    return () => unsubscribe();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const sortedArticles = [...currentItems].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <>
      <Flex {...articlePageStyles}>
        <Flex {...articleContainerStyles}>
          <Heading {...articleHeadingStyles}>Läs våra artiklar</Heading>
          <VStack spacing="1rem" pb="2rem">
            {sortedArticles.map((article, index) => (
              <Link
                key={index}
                to={`/viewArticle/${article.id}/${encodeURIComponent(
                  article.mainHeading
                )}`}
              >
                <ArticleCard {...article} />
              </Link>
            ))}
          </VStack>

          <Box position="relative" top="2">
            <SmallWave color="#01D589" />
          </Box>
          <Box
            w="1285px"
            background="brand.green"
            h="18vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <HStack spacing="2rem" mb="2rem" mt="2rem">
              {currentPage > 1 && (
                <Button
                  {...greySmallButtonStyles}
                  onClick={() => paginate(currentPage - 1)}
                >
                  Föregående
                </Button>
              )}
              {indexOfLastItem < articles.length && (
                <Button
                  {...greySmallButtonStyles}
                  onClick={() => paginate(currentPage + 1)}
                >
                  Nästa
                </Button>
              )}
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import {
  articleContainerStyles,
  articlePageStyles,
} from "./style/articleStyle";
import { ArticleCard } from "./feature/ArticleCard";
import { useArticlesStore } from "../../store/useArticlesStore";
import { useEffect, useState } from "react";
import { getArticles } from "../../services/articleServices";

export const Articles = () => {
  const { articles, setArticles } = useArticlesStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      if (articles.length === 0 || hasMore) {
        const fetchedArticles = await getArticles(currentPage, 10);
        if (fetchedArticles.length < 10) {
          setHasMore(false);
        }
        setArticles([...articles, ...fetchedArticles]);
        setCurrentPage(currentPage + 1);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const loadMoreArticles = () => {
    if (hasMore) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Flex {...articlePageStyles}>
        <Flex {...articleContainerStyles}>
          <Heading>Alla Artiklar</Heading>
          <VStack spacing="1rem">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </VStack>
          {hasMore && <Button onClick={loadMoreArticles}>Visa Fler</Button>}
        </Flex>
      </Flex>
    </>
  );
};

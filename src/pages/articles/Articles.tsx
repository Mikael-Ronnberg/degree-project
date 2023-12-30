import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import {
  articleContainerStyles,
  articlePageStyles,
} from "./style/articleStyle";
import { ArticleCard } from "./feature/ArticleCard";
import { useArticlesStore } from "../../store/useArticlesStore";
import { useEffect, useState } from "react";
import { getArticles } from "../../services/ArticleServices";
import { Link } from "react-router-dom";

export const Articles = () => {
  const { articles, setArticles, markPageAsLoaded, isPageLoaded } =
    useArticlesStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!isPageLoaded(currentPage)) {
        const fetchedArticles = await getArticles(currentPage, 10);
        if (fetchedArticles.length < 10) {
          setHasMore(false);
        }
        setArticles([...articles, ...fetchedArticles]);
        markPageAsLoaded(currentPage);
      }
    };

    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, articles, markPageAsLoaded, isPageLoaded]);

  const loadMoreArticles = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <Flex {...articlePageStyles}>
        <Flex {...articleContainerStyles}>
          <Heading m="1rem">Alla Artiklar</Heading>
          <VStack spacing="1rem">
            {articles.map((article, index) => (
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
          {hasMore && <Button onClick={loadMoreArticles}>Visa Fler</Button>}
        </Flex>
      </Flex>
    </>
  );
};

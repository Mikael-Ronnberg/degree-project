import { Button, Flex, Heading, VStack, Text, Box } from "@chakra-ui/react";
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
import { greyButtonStyles } from "../../components/buttons/style/buttonStyles";
import { SmallWave } from "../../components/waves/SmallWave";

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
          <VStack>
            <Heading {...articleHeadingStyles}>Alla Artiklar</Heading>
            <Text></Text>
          </VStack>
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

          <Box position="relative" top="2">
            <SmallWave color="#01D589" />
          </Box>
          <Box
            w="1285px"
            background="brand.green"
            h="20vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {hasMore && (
              <Button onClick={loadMoreArticles} {...greyButtonStyles}>
                Visa Fler
              </Button>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

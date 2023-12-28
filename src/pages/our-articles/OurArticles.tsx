import { useState, useEffect } from "react";
import { Flex, VStack, Button, HStack } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { OurArticleCard } from "./feature/OurArticleCard";
import { useArticlesStore } from "../../store/useArticlesStore";
import { getArticles } from "../../services/articleServices";

const ITEMS_PER_PAGE = 1;

export const OurArticles = () => {
  const { articles, setArticles } = useArticlesStore();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getArticles(currentPage, ITEMS_PER_PAGE);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Flex {...adminPageStyles}>
        <VStack>
          {articles.map((article) => (
            <OurArticleCard key={article.id} article={article} />
          ))}
          <HStack spacing="2rem" mb="2rem" mt="2rem">
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Föregående
            </Button>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={articles.length < ITEMS_PER_PAGE}
            >
              Nästa
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

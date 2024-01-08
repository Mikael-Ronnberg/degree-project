import { useState, useEffect } from "react";
import { Flex, VStack, Button, HStack } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { OurArticleCard } from "./feature/OurArticleCard";
import { useArticlesStore } from "../../store/useArticlesStore";
import { getArticles } from "../../services/ArticleServices";
import { greySmallButtonStyles } from "../../components/buttons/style/buttonStyles";

const ITEMS_PER_PAGE = 1;

export const OurArticles = () => {
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
      <Flex {...adminPageStyles}>
        <VStack>
          {sortedArticles.map((article) => (
            <OurArticleCard key={article.id} article={article} />
          ))}
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
        </VStack>
      </Flex>
    </>
  );
};

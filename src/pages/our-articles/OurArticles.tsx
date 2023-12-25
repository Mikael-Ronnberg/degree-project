import { useState, useEffect } from "react";
import { Flex, VStack, Button, HStack } from "@chakra-ui/react";
import { adminPageStyles } from "../admin/style/styleAdmin";
import { Navbar } from "../../components/navbar/NavBar";
import { adminNavItems } from "../../helpers/AdminHelpers";
import { OurArticleCard } from "./feature/OurArticleCard";
import { getArticles } from "../../services/AdminServices";
import { useArticlesStore } from "../../store/useArticlesStore";

const ITEMS_PER_PAGE = 1;

export const OurArticles = () => {
  const { articles, setArticles } = useArticlesStore();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      if (articles.length === 0) {
        const articles = await getArticles();
        setArticles(articles);
      }
    };

    fetchArticles();
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
      <Navbar navItems={adminNavItems} />
      <Flex {...adminPageStyles}>
        <VStack>
          {sortedArticles.map((article) => (
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
              disabled={indexOfLastItem >= articles.length}
            >
              Nästa
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

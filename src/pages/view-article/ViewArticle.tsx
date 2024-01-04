import { Flex, Box } from "@chakra-ui/react";
import { useArticlesStore } from "../../store/useArticlesStore";
import { getArticleById } from "../../services/ArticleServices";
import { useState, useEffect } from "react";
import {
  ArticleResponse,
  TransformedArticleResponse,
} from "../../model/ArticlesInterfaces";
import {
  viewArticleContainerStyles,
  viewArticlePageStyles,
} from "./style/viewArticleStyle";
import { NotFound } from "../404/NotFound";
import { TextSection } from "./features.tsx/TextSection";
import { ImageSection } from "./features.tsx/ImageSection";
import { HeaderSection } from "./features.tsx/HeaderSection";
import { AuthorSection } from "./features.tsx/AuthorSection";
import { SmallWave } from "../../components/waves/SmallWave";

interface ViewArticleProps {
  articleName: string;
  id: string;
}

export const ViewArticle = ({ articleName, id }: ViewArticleProps) => {
  const { articles } = useArticlesStore();
  const [displayArticle, setDisplayArticle] = useState<
    TransformedArticleResponse | ArticleResponse
  >();

  useEffect(() => {
    const foundArticle = articles.find(
      (article) => article.id === id && article.mainHeading === articleName
    );

    if (foundArticle) {
      setDisplayArticle(foundArticle);
    } else {
      const fetchArticle = async () => {
        const fetchedArticle = await getArticleById(id);
        if (fetchedArticle) {
          setDisplayArticle(fetchedArticle);
        }
      };

      fetchArticle();
    }
  }, [id, articleName, articles]);

  return (
    <>
      {displayArticle ? (
        <Flex {...viewArticlePageStyles}>
          <Flex {...viewArticleContainerStyles}>
            <HeaderSection
              mainHeading={displayArticle.mainHeading}
              mainImg={displayArticle.mainImg}
              mainImgName={displayArticle.mainImgName}
              category={displayArticle.category}
              date={displayArticle.date}
            />

            <TextSection
              subHeading={displayArticle.subHeading1}
              section={displayArticle.section1}
            />

            <ImageSection
              subImg={displayArticle.subImg1}
              subImgName={displayArticle.subImg1Name}
              subImgDescription={displayArticle.subImgDescription1}
            />

            <TextSection
              section={displayArticle.section2}
              subHeading={displayArticle.subHeading2}
            />

            <ImageSection
              subImg={displayArticle.subImg2}
              subImgName={displayArticle.subImg2Name}
              subImgDescription={displayArticle.subImgDescription2}
            />

            <TextSection
              section={displayArticle.section3}
              subHeading={displayArticle.subHeading3}
            />
            <AuthorSection
              author={displayArticle.author}
              category={displayArticle.category}
            />
            <Box position="relative" top="2">
              <SmallWave color="#01D589" />
            </Box>
            <Box w="1285px" background="brand.green" h="40px" />
          </Flex>
        </Flex>
      ) : (
        <NotFound />
      )}
    </>
  );
};

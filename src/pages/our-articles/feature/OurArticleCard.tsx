import {
  Flex,
  HStack,
  Button,
  Text,
  Heading,
  VStack,
  Image,
} from "@chakra-ui/react";
import { TransformedArticleResponse } from "../../../model/ArticlesInterfaces";
import {
  adminCardStyles,
  adminCardTextStyles,
  mainImageCardStyles,
  subImageCardStyles,
  subImageTextCardStyles,
} from "../../admin/style/styleAdmin";
import { deleteArticle } from "../../../services/ArticleServices";
import { UpdateOurArticleModal } from "./UpdateOurArticleModal";
import { useArticlesStore } from "../../../store/useArticlesStore";

interface OurArticleProps {
  article: TransformedArticleResponse;
}

export const OurArticleCard = ({ article }: OurArticleProps) => {
  const { deleteSingleArticle } = useArticlesStore();
  return (
    <>
      <Flex {...adminCardStyles}>
        <VStack spacing="2rem" w={{ base: "90vw", lg: "65vw" }}>
          <Heading>{article.mainHeading}</Heading>
          <Image
            src={article.mainImg}
            alt={article.mainImgName}
            {...mainImageCardStyles}
          />
        </VStack>
        <VStack spacing="2rem">
          <Text {...adminCardTextStyles}>{article.date}</Text>
          <Text {...adminCardTextStyles}>{article.author}</Text>
        </VStack>
        <VStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            {article.subHeading1}
          </Text>
          <Text {...adminCardTextStyles}>{article.section1}</Text>
        </VStack>

        {article.subImg1 && article.subImg1Name ? (
          <VStack spacing="2rem">
            <Image
              src={article.subImg1}
              alt={article.subImg1Name}
              {...subImageCardStyles}
            />

            {article.subImgDescription1 && (
              <Text {...subImageTextCardStyles}>
                {article.subImgDescription1}
              </Text>
            )}
          </VStack>
        ) : null}

        {article.subHeading2 ? (
          <VStack spacing="2rem">
            <Text {...adminCardTextStyles} fontWeight="bold">
              {article.subHeading2}
            </Text>
            {article.section2 && (
              <Text {...adminCardTextStyles}>{article.section2}</Text>
            )}
          </VStack>
        ) : null}

        {article.subImg2 && article.subImg2Name ? (
          <VStack spacing="2rem">
            <Image src={article.subImg2} alt={article.subImg2Name} />
            {article.subImgDescription2 && (
              <Text {...adminCardTextStyles}>{article.subImgDescription2}</Text>
            )}
          </VStack>
        ) : null}

        {article.subHeading3 ? (
          <VStack spacing="2rem">
            <Text {...adminCardTextStyles} fontWeight="bold">
              {article.subHeading3}
            </Text>
            {article.section3 && (
              <Text {...adminCardTextStyles}>{article.section2}</Text>
            )}
          </VStack>
        ) : null}

        <VStack spacing="2rem">
          <Text {...adminCardTextStyles}>Skapad: </Text>
          <Text>{article.createdAt}</Text>
        </VStack>
        <HStack>
          <UpdateOurArticleModal formValues={article} />
          <Button
            onClick={() => {
              deleteArticle(article.id), deleteSingleArticle(article.id);
            }}
          >
            Ta Bort Artikeln!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

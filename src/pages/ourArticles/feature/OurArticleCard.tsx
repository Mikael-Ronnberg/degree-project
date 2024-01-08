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
  adminHeadingStyles,
  adminTextStyles,
  mainImageCardStyles,
  subImageCardStyles,
  subImageTextCardStyles,
} from "../../admin/style/styleAdmin";
import { deleteArticle } from "../../../services/ArticleServices";
import { UpdateOurArticleModal } from "./UpdateOurArticleModal";
import { useArticlesStore } from "../../../store/useArticlesStore";
import { greySmallButtonStyles } from "../../../components/buttons/style/buttonStyles";

interface OurArticleProps {
  article: TransformedArticleResponse;
}

export const OurArticleCard = ({ article }: OurArticleProps) => {
  const { deleteSingleArticle } = useArticlesStore();
  return (
    <>
      <Flex {...adminCardStyles}>
        <VStack spacing="1rem" py="1rem" w={{ base: "90vw", lg: "65vw" }}>
          <Heading {...adminHeadingStyles}>{article.mainHeading}</Heading>
          <Image
            src={article.mainImg}
            alt={article.mainImgName}
            {...mainImageCardStyles}
            loading="lazy"
          />
        </VStack>

        <VStack spacing="1rem" py="1rem">
          <Text {...adminTextStyles} fontWeight="bold">
            {article.subHeading1}
          </Text>
          <Text {...adminTextStyles}>{article.section1}</Text>
        </VStack>

        {article.subImg1 && article.subImg1Name ? (
          <VStack spacing="1rem" py="1rem">
            <Image
              src={article.subImg1}
              alt={article.subImg1Name}
              {...subImageCardStyles}
              loading="lazy"
            />

            {article.subImgDescription1 && (
              <Text {...subImageTextCardStyles}>
                {article.subImgDescription1}
              </Text>
            )}
          </VStack>
        ) : null}

        {article.subHeading2 ? (
          <VStack spacing="1rem" py="1rem">
            <Text {...adminTextStyles} fontWeight="bold">
              {article.subHeading2}
            </Text>
            {article.section2 && (
              <Text {...adminTextStyles}>{article.section2}</Text>
            )}
          </VStack>
        ) : null}

        {article.subImg2 && article.subImg2Name ? (
          <VStack spacing="2rem">
            <Image
              src={article.subImg2}
              alt={article.subImg2Name}
              loading="lazy"
            />
            {article.subImgDescription2 && (
              <Text {...adminTextStyles}>{article.subImgDescription2}</Text>
            )}
          </VStack>
        ) : null}

        {article.subHeading3 ? (
          <VStack spacing="2rem" py="1rem">
            <Text {...adminTextStyles} fontWeight="bold">
              {article.subHeading3}
            </Text>
            {article.section3 && (
              <Text {...adminTextStyles}>{article.section2}</Text>
            )}
          </VStack>
        ) : null}

        <HStack spacing="2rem" py="1rem">
          <Text {...adminTextStyles} fontWeight="bold">
            Skapad:
          </Text>
          <Text>{article.createdAt}</Text>
        </HStack>
        <HStack spacing="2rem" py="1rem">
          <Text {...adminTextStyles} fontWeight="bold">
            Författare:
          </Text>
          <Text {...adminTextStyles}>{article.author}</Text>
        </HStack>
        <HStack py="2rem" spacing="1rem">
          <UpdateOurArticleModal formValues={article} />
          <Button
            onClick={() => {
              deleteArticle(article.id), deleteSingleArticle(article.id);
            }}
            {...greySmallButtonStyles}
            background="brand.red"
          >
            Ta Bort Artikeln!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

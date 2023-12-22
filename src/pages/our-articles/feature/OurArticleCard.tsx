import {
  Flex,
  HStack,
  Button,
  Text,
  Heading,
  VStack,
  Image,
} from "@chakra-ui/react";
import { TransformedArticleResponse } from "../../../model/AdminInterfaces";
import {
  adminCardStyles,
  adminCardTextStyles,
} from "../../admin/style/styleAdmin";
import { deleteArticle } from "../../../services/AdminServices";

interface OurArticleProps {
  article: TransformedArticleResponse;
}

export const OurArticleCard = ({ article }: OurArticleProps) => {
  return (
    <>
      <Flex key={article.id} {...adminCardStyles}>
        <VStack spacing="2rem">
          <Heading>{article.mainHeading}</Heading>
          <Image ref={article.mainImg} alt={article.mainImgName}>
            {" "}
          </Image>
        </VStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>{article.date}</Text>
          <Text {...adminCardTextStyles}>{article.author}</Text>
        </HStack>
        <HStack spacing="2rem">
          <Text {...adminCardTextStyles} fontWeight="bold">
            {article.subHeading1}
          </Text>
          <Text {...adminCardTextStyles}>{article.section1}</Text>
        </HStack>

        {article.subImg1 && article.subImg1Name ? (
          <VStack spacing="2rem">
            <Image ref={article.subImg1} alt={article.subImg1Name}>
              MÅSTE HA ETT IMAGE NAMN{" "}
            </Image>
            {article.subImgDescription1 && (
              <Text {...adminCardTextStyles}>{article.subImgDescription1}</Text>
            )}
          </VStack>
        ) : null}

        {article.subHeading2 ? (
          <HStack spacing="2rem">
            <Text {...adminCardTextStyles} fontWeight="bold">
              {article.subHeading2}
            </Text>
            {article.section2 && (
              <Text {...adminCardTextStyles}>{article.section2}</Text>
            )}
          </HStack>
        ) : null}

        {article.subImg2 && article.subImg2Name ? (
          <VStack spacing="2rem">
            <Image ref={article.subImg2} alt={article.subImg2Name}>
              MÅSTE HA ETT IMAGE NAMN{" "}
            </Image>
            {article.subImgDescription2 && (
              <Text {...adminCardTextStyles}>{article.subImgDescription2}</Text>
            )}
          </VStack>
        ) : null}

        {article.subHeading3 ? (
          <HStack spacing="2rem">
            <Text {...adminCardTextStyles} fontWeight="bold">
              {article.subHeading3}
            </Text>
            {article.section3 && (
              <Text {...adminCardTextStyles}>{article.section2}</Text>
            )}
          </HStack>
        ) : null}

        <HStack spacing="2rem">
          <Text {...adminCardTextStyles}>Skapad: </Text>
          <Text>{article.createdAt}</Text>
        </HStack>
        <HStack>
          {/* <UpdateEventModal formValues={event} /> */}
          <Button onClick={() => deleteArticle(article.id)}>
            Ta Bort Artikeln!
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

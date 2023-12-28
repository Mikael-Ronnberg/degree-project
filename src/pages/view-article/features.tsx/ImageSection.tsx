import { VStack, Text, Image } from "@chakra-ui/react";
import {
  imageSectionStackStyles,
  imageSectionTextStyles,
} from "../style/viewArticleStyle";

interface ImageSectionProps {
  subImg?: string;
  subImgName?: string;
  subImgDescription?: string;
}

export const ImageSection = ({
  subImg,
  subImgName,
  subImgDescription,
}: ImageSectionProps) => {
  return (
    <>
      {subImg && subImgName ? (
        <VStack {...imageSectionStackStyles}>
          <Image src={subImg} alt={subImgName} />
          {subImgDescription && (
            <Text {...imageSectionTextStyles}>{subImgDescription}</Text>
          )}
        </VStack>
      ) : null}
    </>
  );
};

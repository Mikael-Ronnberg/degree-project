import { VStack, Text } from "@chakra-ui/react";
import {
  textSectionBoldStyles,
  textSectionNormalStyles,
  textSectionStackStyles,
} from "../style/viewArticleStyle";

interface TextSectionProps {
  subHeading?: string;
  section?: string;
}

export const TextSection = ({ subHeading, section }: TextSectionProps) => {
  return (
    <>
      {subHeading ? (
        <VStack {...textSectionStackStyles}>
          <Text {...textSectionBoldStyles}>{subHeading}</Text>
          {section && <Text {...textSectionNormalStyles}>{section}</Text>}
        </VStack>
      ) : null}
    </>
  );
};

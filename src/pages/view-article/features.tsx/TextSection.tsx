import { VStack, Text } from "@chakra-ui/react";
import {
  textSectionStackStyles,
  textSectionStyles,
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
          <Text fontWeight="bold" {...textSectionStyles}>
            {subHeading}
          </Text>
          {section && <Text {...textSectionStyles}>{section}</Text>}
        </VStack>
      ) : null}
    </>
  );
};

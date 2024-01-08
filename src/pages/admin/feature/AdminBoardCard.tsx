import { Heading, Text, Card, CardBody, Flex } from "@chakra-ui/react";
import { RenderData } from "./AdminContainer";
import {
  adminBoardCardStyles,
  adminHeadingStyles,
  adminTextStyles,
} from "../style/styleAdmin";

interface AdminBoardCardProps {
  heading: string;
  renderData: RenderData[];
}

export const AdminBoardCard = ({
  heading,
  renderData,
}: AdminBoardCardProps) => {
  return (
    <>
      <Card {...adminBoardCardStyles}>
        <CardBody>
          <Flex direction="column" gap="2rem" align="center" justify="center">
            <Heading {...adminHeadingStyles}>{heading}</Heading>
            {renderData.map((data, i) => (
              <Text key={i} {...adminTextStyles}>
                Antal {data.label}: {data.data as number}
              </Text>
            ))}
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

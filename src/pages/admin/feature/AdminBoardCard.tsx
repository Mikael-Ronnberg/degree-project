import { Flex, VStack, Heading, Text } from "@chakra-ui/react";
import { RenderData } from "./AdminContainer";

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
      <Flex
        w="30vw"
        h="auto"
        justify="center"
        align="center"
        border="black solid 2px"
        background="white"
        p="10rem"
      >
        <VStack>
          <Heading>{heading}</Heading>
          {renderData.map((data, i) => (
            <Text key={i}>
              Antal {data.label}: {data.data as number}
            </Text>
          ))}
        </VStack>
      </Flex>
    </>
  );
};

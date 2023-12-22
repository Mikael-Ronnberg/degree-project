import { Flex, VStack, Heading, Text } from "@chakra-ui/react";

export interface RenderData {
  label: string;
  data: number;
}

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
        w="20vw"
        h="auto"
        justify="center"
        align="center"
        border="black solid 2px"
        background="white"
      >
        <VStack>
          <Heading>{heading}</Heading>
          {renderData.map((data, i) => (
            <Text key={i}>
              {data.label}: {data.data}
            </Text>
          ))}
        </VStack>
      </Flex>
    </>
  );
};

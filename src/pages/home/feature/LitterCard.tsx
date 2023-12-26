import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

interface LitterCardProps {
  heading: string;
  description: string;
  amount: string;
  type: string;
}

export const LitterCard = ({
  heading,
  description,
  amount,
  type,
}: LitterCardProps) => {
  return (
    <>
      <Flex>
        <Heading>{heading}</Heading>
        <Text>{description}</Text>
        <VStack>
          <Text>Vi har tagit hand om: {""}</Text>
          <Text>
            {amount} {""}
            {type === "weigth" ? "Kg" : "St"}
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

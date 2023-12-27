import { Flex, Text, Image, Box } from "@chakra-ui/react";
import {
  supportContainerStyles,
  supportQRStyles,
  supportWrapperStyles,
} from "../style/contactStyle";

export const SupportContainer = () => {
  return (
    <>
      <Flex {...supportWrapperStyles}>
        <Flex {...supportContainerStyles}>
          <Text>
            Vi tar även emot donationer. Det går bra med Swish men om ni vill
            donera på andra sätt kan ni höra av er till oss. Alla donationer går
            oavkortat in i organisationen igen i form av redskap som behövs för
            vårt ändamål.
          </Text>
          <Flex {...supportQRStyles}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/sb-project-a9f24.appspot.com/o/QR.png?alt=media&token=2899892e-c905-480a-aa90-0f453eb3685c"
              alt="QR Code"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

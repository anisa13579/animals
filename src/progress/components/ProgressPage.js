import { Box, Text, Flex, Center } from "@chakra-ui/react";
import { CheckIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";

const completionStatusTypes = {
  CONFIDENT: "confident",
  NEEDS_MORE_PRACTISE: "needsMorePractise",
  DONT_KNOW: "dontKnow",
};

export default function ProgressPage() {
  return (
    <Box>
      <Text mb={5} fontWeight="bold" fontSize="xl">
        Progress So Far
      </Text>
      <Flex gap="80px">
        <Box>
          <Box pb={5}>
            <Heading>Reading</Heading>
          </Box>
          <Flex direction="column" gap={5}>
            <Row
              label="Item 1"
              completionStatus={completionStatusTypes.CONFIDENT}
            />
            <Row
              label="Item 2"
              completionStatus={completionStatusTypes.NEEDS_MORE_PRACTISE}
            />
            <Row
              label="Item 2"
              completionStatus={completionStatusTypes.DONT_KNOW}
            />
          </Flex>
        </Box>
        <Box>
          <Box pb={5}>
            <Heading>Maths</Heading>
          </Box>
          <Flex direction="column" gap={5}>
            <Row
              label="Item 1"
              completionStatus={completionStatusTypes.CONFIDENT}
            />
            <Row
              label="Item 2"
              completionStatus={completionStatusTypes.NEEDS_MORE_PRACTISE}
            />
            <Row
              label="Item 2"
              completionStatus={completionStatusTypes.DONT_KNOW}
            />
          </Flex>
        </Box>
        <Box>
          <Box pb={5}>
            <Heading>Spelling, Punctuation and Grammer</Heading>
          </Box>
          <Flex direction="column" gap={5}>
            <Row
              label="Item 1"
              completionStatus={completionStatusTypes.CONFIDENT}
            />
            <Row
              label="Item 2"
              completionStatus={completionStatusTypes.NEEDS_MORE_PRACTISE}
            />
            <Row
              label="Item 2"
              completionStatus={completionStatusTypes.DONT_KNOW}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export const Heading = ({ children }) => (
  <Text fontWeight="semibold" fontSize="lg">
    {children}
  </Text>
);

export const Row = ({ label, completionStatus }) => {
  let iconToUse;

  switch (completionStatus) {
    case completionStatusTypes.CONFIDENT:
      iconToUse = <CheckIcon color="green.500" />;
      break;
    case completionStatusTypes.NEEDS_MORE_PRACTISE:
      iconToUse = <AddIcon color="black" />;
      break;
    case completionStatusTypes.DONT_KNOW:
      iconToUse = <CloseIcon color="red.500" />;
      break;
    default:
      iconToUse = null;
  }
  return (
    <Flex>
      <Text w={"150px"}>{label}</Text>
      <Center>{iconToUse}</Center>
    </Flex>
  );
};

import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { Box, Text } from "@chakra-ui/react";
import ProgressPage from "../src/progress/components/ProgressPage";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box p="100px">
        <Box mb={10}>
          <Text fontSize="2xl" fontWeight="bold" color="purple.500">
            Anisa's SATS Practise Website
          </Text>
        </Box>
        <Box>
          <ProgressPage />
        </Box>
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;

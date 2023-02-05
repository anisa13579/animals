import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { Box, Text } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraBaseProvider theme={theme}>
      <Box>
        <Text>Hello</Text>
      </Box>
    </ChakraBaseProvider>
  );
}

export default App;

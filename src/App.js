import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  grid,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './Partials/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;

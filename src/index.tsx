import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  mountNode
);

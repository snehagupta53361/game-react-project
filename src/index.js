import React from 'react';
import ReactDOM from 'react-dom/client';
import {ColorModeScript, ChakraProvider, theme} from "@chakra-ui/react";
import ColorModeSwitcher from './ColorModeSwitcher';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ColorModeScript/>
  <ChakraProvider theme={theme}>
  <ColorModeSwitcher/>
  <App/>
  </ChakraProvider>
  </React.StrictMode>
);


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react";
import RouterSwitch from './components/RouterSwitch';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
    <RouterSwitch>
    </RouterSwitch>
    </NextUIProvider>
  </React.StrictMode>,
)

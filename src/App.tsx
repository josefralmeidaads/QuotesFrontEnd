import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import Routes from './routes/routes';
import theme from './styles/theme';

function App() {
  return (
  <ThemeProvider theme={theme}>   
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
  );
}

export default App;

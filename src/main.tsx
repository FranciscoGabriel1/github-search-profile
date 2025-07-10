import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { UserContextProvider } from '@/context/UserContext';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';
import RouterProvider from './components/Routes';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AnimationProvider } from './context/AnimationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimationProvider>
        <AnimatedBackground>
          <UserContextProvider>
            <RouterProvider />
          </UserContextProvider>
        </AnimatedBackground>
      </AnimationProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

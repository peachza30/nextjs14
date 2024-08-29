"use client"
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material';
import React from 'react';
import theme from './theme';

type Props = {
  children: React.ReactNode;
};

const ThemeRegistry = ({ children }: Props) => {

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
};

export default ThemeRegistry;
import { ThemeOptions, createTheme } from '@mui/material/styles';

export const customLight: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e9e5d9',
      paper: '#eeeeee',
    },
    text: {
      primary: '#393d3f',
      secondary: '#546a7b',
    },
  },
});

export const customDark: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#383838',
      paper: '#444444',
    },
    text: {
      primary: '#f8f2f2',
    },
  },
});

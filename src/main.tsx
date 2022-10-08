import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    common:{
      black:'#000',
      white:'#fff'
    },
    background:{
      paper:'rgba(255, 248, 240, 1)',
      default:'rgba(255, 255, 255, 1)'
    },
    primary:{
      light:'#7986cb',
      main:'rgba(139, 128, 249, 1)',
      dark:'rgba(13, 19, 33, 1)',
      contrastText:'#fff'
    },
    secondary:{
      light:'#ff4081',
      main:'rgba(255, 133, 10, 1)',
      dark:'rgba(136, 22, 0, 1)',
      contrastText:'#fff'
    },
    error:{
      light:'#e57373',
      main:'#f44336',
      dark:'#d32f2f',
      contrastText:'#fff'
    },
    text:{
      primary:'rgba(0, 0, 0, 0.87)',
      secondary:'rgba(0, 0, 0, 0.54)',
      disabled:'rgba(0, 0, 0, 0.38)',
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
)

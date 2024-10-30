import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  typography: {
    h4: {
      fontSize: 25
    }
  },
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#fff',
    },
    success: {
      main: '#6fbf73',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      contrastText: '#fff'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontSize: 14,
          textTransform: 'capitalize'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: '#fff',
          marginRight: 10,
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          backgroundColor: '#78909c',
          borderRadius: 20,
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 20,
          textAlign: 'center',
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: 20
        }
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
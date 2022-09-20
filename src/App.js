import './App.css';
import Main from './Components/Main/Main';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './Components/Header/Header';

const theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display'
  },
  palette: {
    primary: {
      main: '#FDFDFD'
    },
    secondary: {
      main: '#121221'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Main/>
    </ThemeProvider>
  ) 
}

export default App;

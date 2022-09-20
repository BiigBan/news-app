import './App.css';
import Main from './Components/Main/Main';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import Header from './Components/Header/Header';
import { Context } from './Context';
import Footer from './Components/Footer/Footer';

function App() {
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

  const smallPhone = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Context.Provider value={smallPhone}>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer/>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App;

import {NetflixApp} from 'components/NetflixApp'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#111',
    },
    secondary: {
      main: '#000',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NetflixApp />
    </ThemeProvider>
  )
}

export {App}

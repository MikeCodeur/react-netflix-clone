import {NetflixApp} from 'components/NetflixApp'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#E50914',
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback} >
        <NetflixApp />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export {App}

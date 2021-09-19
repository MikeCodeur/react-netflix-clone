import {NetflixApp} from 'components/NetflixApp'
import { ThemeProvider} from '@mui/styles'
import { createTheme, adaptV4Theme } from '@mui/material/styles'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import Error404 from 'components/Error404'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {NetflixById} from 'components/NetflixById'
import {NetflixMovies} from 'components/NetflixMovies'
import {NetflixSeries} from 'components/NetflixSeries'
import {NetflixNews} from 'components/NetflixNews'

const theme = createTheme(adaptV4Theme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#E50914',
    },
  },
  }))

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Switch>
            <Route path="/" exact={true}>
              <NetflixApp />
            </Route>
            <Route path="/tv/:tvId">
              <NetflixById />
            </Route>
            <Route path="/movie/:movieId">
              <NetflixById />
            </Route>
            <Route path="/movies">
              <NetflixMovies />
            </Route>
            <Route path="/series">
              <NetflixSeries />
            </Route>
            <Route path="/news">
              <NetflixNews />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  )
}

export {App}

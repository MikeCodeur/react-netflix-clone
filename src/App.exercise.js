import {NetflixApp} from 'components/NetflixApp'
import { ThemeProvider} from '@mui/styles'
import { createTheme, adaptV4Theme } from '@mui/material/styles'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
// 🐶 importe le composant 'Error404' depuis '/components/Error404'
// 🐶 importe le composant 'NetflixById'
// 🐶 importe -> import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
    // 🐶 wrappe toute l'application avec <Router>
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback} >
        {/* 
          🐶 utilise <Switch> et  </Route> pour determiner les routes
          nous voulons les routes avec les configurations suivantes :
          
          1. path '/' exact -> <NetflixApp />
          2. path '/tv/:tvId' -> <NetflixById />
          3. path '/tv/:movieId' -> <NetflixById />
          4. path '/series' -> <NetflixSeries />
          5. path '/movies' -> <NetflixMovies />
          6. path '/news' -> <NetflixNews />
          7. path '/*' -> <Error404 />
       
        */}
        <NetflixApp />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export {App}

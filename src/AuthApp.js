import {NetflixApp} from 'components/NetflixApp'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import Error404 from 'components/Error404'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {NetflixById} from 'components/NetflixById'
import {NetflixMovies} from 'components/NetflixMovies'
import {NetflixSeries} from 'components/NetflixSeries'
import {NetflixNews} from 'components/NetflixNews'
import {NetflixBookmark} from 'components/NetflixBookmark'

function AuthApp({logout}) {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Switch>
          <Route path="/" exact={true}>
            <NetflixApp logout={logout} />
          </Route>
          <Route path="/tv/:tvId">
            <NetflixById logout={logout} />
          </Route>
          <Route path="/movie/:movieId">
            <NetflixById logout={logout} />
          </Route>
          <Route path="/movies">
            <NetflixMovies logout={logout} />
          </Route>
          <Route path="/series">
            <NetflixSeries logout={logout} />
          </Route>
          <Route path="/news">
            <NetflixNews logout={logout} />
          </Route>
          <Route path="/list">
            <NetflixBookmark logout={logout} />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}

export {AuthApp}

import * as React from 'react'
import './mocks'
import {useAuth} from './context/AuthContext'
import {AppProviders} from './context'
import LoadingFullScreen from './components/LoadingFullScreen'
import {Helmet} from 'react-helmet-async'
const UnauthApp = React.lazy(() => import('./UnauthApp'))
const AuthApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ './AuthApp'),
)

function App() {
  return (
    <AppProviders>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NetFlix Helmet</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppConsumer />
    </AppProviders>
  )
}

const AppConsumer = () => {
  const {authUser} = useAuth()
  console.log('authUser', authUser)
  // const authUser = {
  //   id: '21ad0bd836b90d08f4cf640b4c298e7c',
  //   username: 'bb',
  //   token: 'MjFhZDBiZDgzNmI5MGQwOGY0Y2Y2NDBiNGMyOThlN2M=',
  //useAuth() //
  return (
    <React.Suspense fallback={<LoadingFullScreen />}>
      {authUser ? <AuthApp /> : <UnauthApp />}
    </React.Suspense>
  )
}

export {App}

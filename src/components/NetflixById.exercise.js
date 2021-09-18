import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
// 🐶 supprime 'getRandomType' et 'getRandomId' car nous n'utiliseront plus de films aléatoires
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {makeStyles} from '@material-ui/core/styles'
import {Alert, AlertTitle} from '@material-ui/lab'
import CircularProgress from '@material-ui/core/CircularProgress'
import {useFetchData} from '../utils/hooks'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './Netflix.css'

// 🐶 importe les hooks 'useParams' et 'useLocation' de "react-router-dom"

const useStyles = makeStyles(theme => ({
  alert: {
    width: '50%',
    margin: 'auto',
    marginBotton: '50px',
  },
  progress: {
    marginLeft: '30px',
  },
}))

const NetflixById = () => {
  const classes = useStyles()
  const {data: headerMovie, error, status, execute} = useFetchData()
  // 🐶 utilise le hook 'useParams' pour récuperer les valeurs de 'tvId' et 'movieId'
  // 🐶 utilise le hook 'useLocation' pour récuperer la valeur de 'pathname'
  // cela nous permetra de savoir si l'url est /tv/:tvId ou /movie/:movieId
  // donc de pouvoir determiner le 'type' (TYPE_TV ou TYPE_MOVIE)

  // ⛏️ supprime 'getRandomType()' et met la valeur de type determinée plus haut.
  const [type] = React.useState(getRandomType())

  // 🐶 determine l'id en fonction du type (soit 'tvId' soit 'movieId' )
  const defaultMovieId = getRandomId(type)
  const [queried, setQueried] = React.useState(true)

  React.useEffect(() => {
    if (!queried) {
      return
    }
    execute(clientApi(`${type}/${defaultMovieId}`))
    setQueried(false)
  }, [execute, defaultMovieId, queried, type])

  // 🐶 Utilise à nouveau 'useEffect' pour mettre à jour les 3 states suivants:
  // - 'type'
  // - 'id'
  // - 'queried'
  // ce qui va ensuite déclancher un nouvelle appel API
  // 
  // 🐶 remonte le barre de scrool en haut de la page
  // 🤖 `window.scrollTo({top: 0, behavior: "smooth" })`
  // n'oublie pas les dépendances

  if (status === 'error') {
    // sera catché par ErrorBoundary
    throw new Error(error.message)
  }
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        filter="trending"
        title="Films Netflix"
      />
      <NetflixRow
        wideImage={false}
        watermark={true}
        type={TYPE_TV}
        filter="trending"
        title="Série Netflix"
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="toprated"
        title="Les mieux notés"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_TV}
        filter="genre"
        param="10759"
        title="Action & aventure"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="genre"
        param="53"
        title="Les meilleurs Thriller"
        watermark={false}
        wideImage={false}
      />

      {status === 'error' ? (
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Une erreur est survenue</AlertTitle>
            Detail : {error.message}
          </Alert>
        </div>
      ) : null}

      {status === 'fetching' ? (
        <div className={classes.progress}>
          <CircularProgress />{' '}
        </div>
      ) : null}
      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixById}

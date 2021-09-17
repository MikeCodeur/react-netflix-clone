import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {makeStyles} from '@material-ui/core/styles'
import {Alert, AlertTitle} from '@material-ui/lab'
import CircularProgress from '@material-ui/core/CircularProgress'
import {useFetchData} from '../utils/hooks'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './Netflix.css'

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

const NetflixNews = () => {
  const classes = useStyles()
  const {data: headerMovie, error, status, execute} = useFetchData()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)
  const [queried, setQueried] = React.useState(true)

  React.useEffect(() => {
    if (!queried) {
      return
    }
    execute(clientApi(`${type}/${defaultMovieId}`))
    setQueried(false)
  }, [execute, defaultMovieId, queried, type])

  if (status === 'error') {
    // sera catché par ErrorBoundary
    throw new Error(error.message)
  }
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      {/* 
        🐶 utilise les bons 'props' pour respacter les spécifications de   
        👨‍✈️ Hugo le chef de projet : "A venir"
      */}
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        filter="trending"
        title="Films Netflix"
      />
       {/* 
        🐶 utilise les bons 'props' pour respacter les spécifications de   
        👨‍✈️ Hugo le chef de projet : "Nouveauté"
      */}
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
export {NetflixNews}

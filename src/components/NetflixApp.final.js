import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {makeStyles} from '@mui/styles'
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import './Netflix.css'

const useStyles = makeStyles(theme => ({
  alert: {
    width: '50%',
    margin : 'auto',
    marginBotton:'50px'
  },
  progress: {
    marginLeft : '30px',
  },
}))

const NetflixApp = () => {
  const classes = useStyles()
  const [headerMovie, setHeaderMovie] = React.useState()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)
  const [status, setStatus] = React.useState('idle')

  React.useEffect(() => {
    setStatus('fetching')
    clientApi(`${type}/${defaultMovieId}`)
      .then(response => {
        setHeaderMovie(response)
        setStatus('done')
      })
      .catch(error => {
        setStatus('error')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />

      {status === 'error' ? (
        <div className={classes.alert}>
          <Alert severity="error">
            <AlertTitle>Une erreur est survenue</AlertTitle>
            Réessayez ulterieurement — <strong>Netflix!</strong>
          </Alert>
        </div>
      ) : null}
      
      {status === 'fetching' ? <div className={classes.progress}><CircularProgress />  </div>:  null }
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}

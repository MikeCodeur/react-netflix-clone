import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
// 🐶 importe les composants MUI
// import {Alert, AlertTitle} from '@mui/material'
// import CircularProgress from '@mui/material/CircularProgress';
// 🐶 importe le Hook 'makeStyles' pour te creer un Hook 'useStyles'
// import {makeStyles} from '@mui/styles'
import './Netflix.css'

// 🐶 créé un hook 'useStyles' avec 'makeStyles'
// 📑 https://material-ui.com/styles/basics/#hook-api
// Ce hook aura deux classes :
// 1. alert
//  width: '50%',
//  margin : 'auto',
//  marginBotton:'50px'
//
// 2. progress
//  marginLeft : '30px',

const NetflixApp = () => {
  // 🐶 utilise le hook classes ='useStyles', il sera utilié plus bas
  const [headerMovie, setHeaderMovie] = React.useState()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)
  const [queried, setQueried] = React.useState(true)

  // 🐶 créé un state 'status', avec la valeur par defaut 'idle'
  React.useEffect(() => {
    if (!queried) {
      return
    }
    // 🐶 changer le status en 'fetching'
    clientApi(`${type}/${defaultMovieId}`)
      .then(response => {
        setHeaderMovie(response)
        setQueried(false)
        // 🐶 changer le status en 'done'
      })
      // 🐶 changer le status en 'error' dans le catch
      .catch(error => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queried])
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      {/* 🐶 créé une <div> avec le prop 'className' et passer le style 'alert'  
        - Ajouter ensuite <Alert severity="error"> avec un message d'erreur
        - conditionnner l'affichage de cette <div> au status === 'error'
      */}

      {/* 🐶 créé une <div> avec le prop 'className' et passer le style 'progress'  
        - Ajouter ensuite <CircularProgress />
        - conditionnner l'affichage de cette <div> au status === 'fetching'
        - note : modifier la fonction 'clientAPI' avec sleep(2000) pour simuler un long appel
      */}

      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}

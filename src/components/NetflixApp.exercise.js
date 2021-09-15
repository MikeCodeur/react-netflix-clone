/* eslint-disable no-unused-vars */
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import './Netflix.css'

// 🐶 découpe 'NetflixApp' en 4 composants
const NetflixAppBar = () => {
  // 🐶 déplace ici tout le code de la barre de menu
  return (<></>)
}
const NetflixHeader = () => {
  // 🐶 déplace ici tout le code du header
  return (<></>)
}
const NetFlixFooter = () => {
  // 🐶 déplace ici tout le code du footer
  return (<></>)
}
// 🐶 NetflixRow prendra 2 props : 'title' et 'wideImage'
// 'title' permettra d'afficher le titre d'une ligne : exemple 'Films Netflix'
// 'wideImage' est un boolean qui permet d'afficher un film au format 'large' ou 'poster'
// pour le moment si 'wideImage' = true, on affiche 'images/sample-poster.jpg' sinon 'images/sample.jpg'
const NetflixRow = () => {
    // 🐶 déplace ici tout le code des lignes de films ici
  return (<></>)
}

// 🐶 Dans les prochaine section, ces composants seront déplcés dans des fichier
// pour plus de lisibilité


const NetflixApp = () => {
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })

  React.useEffect(() => {
    const onScroll = e => {
      if (e.target.documentElement.scrollTop >= 100) {
        setAppBarStyle({
          background: '#111',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      } else {
        setAppBarStyle({
          background: 'transparent',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const margin10 = {margin: 10}
  return (
    <div>
      <AppBar style={appBarStyle}>
        <Toolbar>
          <img className="nav__logo" src="/images/netflix-logo.png" alt="" />
          <a href="/">
            <Typography style={margin10} variant="h6">
              Acceuil
            </Typography>
          </a>
          <a href="/series">
            <Typography style={margin10} variant="h6">
              Serie
            </Typography>
          </a>
          <a href="/movies">
            <Typography style={margin10} variant="h6">
              Films
            </Typography>
          </a>
          <a href="/news">
            <Typography style={margin10} variant="h6">
              Nouveautés les plus regardées
            </Typography>
          </a>
          <a href="/list">
            <Typography style={margin10} variant="h6">
              Ma liste
            </Typography>
          </a>
          <img
            style={{marginLeft: 'auto'}}
            className="nav__avatar"
            src="/images/netflix-avatar.png"
            alt=""
          />
        </Toolbar>
      </AppBar>

      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">La casa de papel</h1>
          <div className="banner__buttons">
            <button className="banner__button banner__buttonplay">
              Lecture
            </button>
            <button className="banner__button banner__buttonInfo">
              Ajouter à ma liste
            </button>
          </div>
          <h1 className="synopsis">
            Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne.
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>

      <div className="row">
        <h2>Films Netflix</h2>
        <div className="row__posters">
          <img
            className="row__poster row__posterLarge"
            src="images/sample.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample1.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <h2>Série Netflix</h2>
        <div className="row__posters">
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster1.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster1.jpg"
            alt=""
          />
        </div>
      </div>

      <footer className="footer">2021 - Netflix Clone</footer>
    </div>
  )
}
export {NetflixApp}

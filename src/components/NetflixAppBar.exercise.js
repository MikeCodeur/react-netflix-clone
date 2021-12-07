import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// 🐶 importe 'Link' de 'react-router-dom'

const NetflixAppBar = () => {
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
    <AppBar style={appBarStyle}>
      <Toolbar>
        {/* 🐶 remplace tous les <a> par des link */}
        <img className="nav__logo" src="/images/netflix-logo.png" alt="" />
        <a href="/">
          <Typography style={margin10} variant="h6">
            Acceuil
          </Typography>
        </a>
        <a href="/series">
          <Typography style={margin10} variant="h6">
            Series
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
  )
}

export {NetflixAppBar}

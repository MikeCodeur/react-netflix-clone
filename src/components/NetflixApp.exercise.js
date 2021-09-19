import React from 'react'
// 🐶 Dans cet exercice tu vas devoir créer une Barre de Menu avec MUI (MaterialUi).
// commnce par importer les 3 composants MUI suivants :
//
//import AppBar from '@mui/material/AppBar'
//import Toolbar from '@mui/material/Toolbar'
//import Typography from '@mui/material/Typography'
//import './Netflix.css'

const NetflixApp = () => {
  // 🐶 Créé un objet 'appBarStyle' qui contiendra du du style pour la 'AppBar'
  // - background: 'transparent'
  // - boxShadow: 'none'
  // Ce style permet d'avoir la fond transparent

  // 🐶 Crée un objet 'margin10' qui contiendra du du style espacer les items du menu
  // - margin: 10
  return (
    <div>
      {/* // ⛏️ supprime cette bare de menu, nous utiliseront MUI */}
      <div>
        <img src="images/netflix-logo.png" alt="" height="20" />
        <a href="/">Acceuil</a>
        <a href="/">Séries </a>
        <a href="/">Films </a>
        <a href="/">Nouveautés </a>
        <a href="/">Ma liste </a>
        <img src="images/netflix-avatar.png" alt="" height="20" />
      </div>

      {/* 🐶 Crée une Barre de menu en utilisant <AppBar>
        - Applique lui le style 'appBarStyle'
        Les 7 items de la barre de menu sont : 
        - Le logo Netflix
          🤖 <img className="nav__logo" src="/images/netflix-logo.png" alt="" />
        - Les 5 items du menu 
          🤖 utilise cela pour chaue menu 
          <a href="/le_lien">
            <Typography style={margin10} variant="h6">
              Nom de l'item
            </Typography>
          </a>
        - Le logo Avatar :
          🤖 <img style={{marginLeft: 'auto'}} className="nav__avatar" src="/images/netflix-avatar.png" alt="" />
       */}

      {/* 🐶 Pour les éléments suivants, nous n'utiliseront pas MUI,
      nous utliseront des classes CSS classiques de 'Netflix.css' */}

      {/* 🐶 applique la classe 'banner' sur <header> */}
      <header>
        {/* 🐶 applique la classe 'banner__contents' */}
        <div>
          {/* 🐶 applique la classe 'banner__title' */}
          <h1>La casa de papel</h1>
          {/* 🐶 applique la classe 'banner__buttons' */}
          <div>
            {/* 🐶 applique la classe 'banner__button' et 'banner__buttonplay' */}
            <button>Lecture</button>
            {/* 🐶 applique la classe 'banner__button' et 'banner__buttonInfo' */}
            <button>Ajouter à ma liste</button>
          </div>
          {/* 🐶 applique la classe 'synopsis' */}
          <h1>
            Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne.
          </h1>
        </div>
      </header>

      {/* 🐶 applique la classe 'row' */}
      <div>
        <h2>Films Netflix</h2>
        {/* 🐶 applique la classe 'row__posters' */}
        <div>
          {/* 🐶 Sur toutes les images
          - applique la classe 'row__poster' et 'row__posterLarge' 
          ⛏️ supprime height="250"  */}
          <img src="images/sample.jpg" alt="" height="250" />
          <img src="images/sample1.jpg" alt="" height="250" />
          <img src="images/sample.jpg" alt="" height="250" />
          <img src="images/sample1.jpg" alt="" height="250" />
        </div>
      </div>

      {/* 🐶 applique la classe 'row' */}
      <div>
        <h2>Série Netflix</h2>
        {/* 🐶 applique la classe 'row__posters' */}
        <div>
          {/* 🐶 Sur toutes les images
          - applique la classe 'row__poster' et 'row__posterLarge' 
          ⛏️ supprime height="300"  */}
          <img src="images/sample-poster.jpg" alt="" height="300" />
          <img src="images/sample-poster1.jpg" alt="" height="300" />
          <img src="images/sample-poster.jpg" alt="" height="300" />
          <img src="images/sample-poster1.jpg" alt="" height="300" />
        </div>
      </div>

      {/* 🐶 applique la classe 'footer' */}
      <footer>2021 - Netflix Clone</footer>
    </div>
  )
}
export {NetflixApp}

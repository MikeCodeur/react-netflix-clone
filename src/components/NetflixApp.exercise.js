import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
// 🐶 importe 'axios'
import './Netflix.css'

// 🐶 passe en prop 'movie' qui contiendra les informations d'un film
const NetflixHeader = () => {
  // 🐶 La classe 'banner' contient une image fixe dans 'NetFlix.css' (background-image: url('../assets/images/banner.jpg'))
  // Tu vas devoir changer l'image (donc cette propriété CSS) pour chaque nouveau film.
  // Pour cela tu vas passer par le prop 'style' de <header> est passer l'objet avec les propiétés css.
  // Tu vas donc avoir besoin de 2 choses : 'imageUrl' : l'url de l'image et 'banner' l'objet avec les propriétés CSS
  //
  // 🐶 1. Crée une constante 'imageUrl' qui contient l'url de l'image
  //  - l'image est contenu dans 'backdrop_path' de l'objet 'movie'
  //  - la base de l'url d'image est 'https://image.tmdb.org/t/p/original'
  //
  // 🐶 2. créé l'objet 'banner' avec les propiétés suivantes:
  //
  // backgroundImage: `url('${imageUrl}')`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center center',
  // color: 'white',
  // objectFit: 'contain',
  // height: '448px',
  
  // 🐶 si 'movie' n'est pas défini, retourne un fragment vide 🤖 <></>

  // 🐶 si 'movie' est défini, retourne le header
  return (
    // ⛏️ supprime le prop 'className' et utilise le prop 'style' avec l'objet 'banner'
    <header className="banner">
      <div className="banner__contents">
        {/* 🐶 Utilise la propriété 'title' de 'movie' pour remplacer le titre 'La casa de papel' 
        - Note : utilise 'l'optionnal chaining' pour accéder à title
        📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        
        - Note : Utilise 'Nullish coalescing' pour afficher '...' s'il n'y a pas de données 
        📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
        */}
        <h1 className="banner__title">La casa de papel</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">Lecture</button>
          <button className="banner__button banner__buttonInfo">
            Ajouter à ma liste
          </button>
        </div>
        <h1 className="synopsis">
          {/* 🐶 utilise la propiété 'overview' de 'movie' pour la description
          Utilise 'l'optionnal' chaining et le 'Nullish coalescing'
           */}
          Le Professeur recrute une jeune braqueuse et sept autres criminels en
          vue d'un cambriolage grandiose ciblant la Maison royale de la Monnaie
          d'Espagne.
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

// 🐶 Tu vas devoir gérer le fetch de données avec axios dans 'NetflixApp' 
const NetflixApp = () => {
  // 🐶 Créé un state 'headerMovie'
  // 🐶 Créé une constante 'defaultMovieId' avec un id de film par défaut (399566 par exemple)
  // 🐶 utilise ta cley d'api et langue
  // const apiKey = '4fc7b001e8a107fe1fddc6b41ed0f4af'
  // const lang = 'fr-fr'

  // 🐶 utilise le hook 'useEffect' pour récupérer le film sur cette url
  // `https://api.themoviedb.org/3/movie/${defaultMovieId}?api_key=${apiKey}&language=${lang}`
  //  avec axios :
  // 🤖
  // axios
  //   .get(url)
  //   .then(response => console.log(response))
  //   .catch(error => console.error(error))
  // 🐶 met à jour 'headerMovie' sur la reponse d'axios

  return (
    <div>
      <NetflixAppBar />
      {/* 🐶 passe le prop 'movie' avec la propiété 'data' de 'headerMovie'  */}
      <NetflixHeader />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}

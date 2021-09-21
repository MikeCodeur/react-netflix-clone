import React from 'react'
import {imagePathOriginal, TYPE_MOVIE} from '../config'
import {HeaderSkeleton} from './skeletons/HeaderSkeleton'

// 🐶 importe le hook 'useFetchData' depuis 'utils/hooks'
// 🐶 importe le 'clientNetFlix' depuis 'utils/clientApi'
// il nous permettra de faire les appels API REST avec 'axios'
// 🐶 importe 'authNetflix' il nous sera utile pour récuperer 
// le 'token' de l'utilisateur connecté
// 🤖 import * as authNetflix from '../utils/authNetflixProvider'

// 👨‍✈️ Trois choses à gérer dans ce composant :
//
// 1. Etat initial
//  - vérifier si ce film/serie est déjà dans les favoris
//  - faire un appel API /bookmark
// 2. Ajouter aux favoris
//  - faire un appel API POST /bookmark/tv ou /bookmark/movie
// 3. Supprimer des favoris
//  - faire un appel API DELETE /bookmark/tv ou /bookmark/movie
const NetflixHeader = ({movie, type = TYPE_MOVIE}) => {
  // 🐶 utilise le hook 'useFetchData' pour avoir : data, execute
  const title = type === TYPE_MOVIE ? movie?.title : movie?.name
  const imageUrl = `${imagePathOriginal}${movie?.backdrop_path}`
  const banner = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  }

   // 🐶 utilise le hook 'useEffect' pour faire l'appel API GET '/bookmark'
   // pour cela utilise :
   // 🤖
   // authNetflix.getToken()
   // execute(clientNetFlix(`bookmark`, {token}))
   // NOTE : authNetflix.getToken() s'utilise de manière asynchrone avec 'await'

   // 🐶 créé un boolean 'isInList' permetant de s'avoir si 'movie.id' est deja 
   // dans la liste des favoris récuperer par l'api '/bookmark'
   // rapel du format des données reçues
   // data.bookmark.movies[ids de films]
   // data.bookmark.tv[ids de séries]

   // 🐶 créé une fonction async 'handleAddToListClick' qui fera l'appel API REST
   // '/bookmark/tv' ou '/bookmark/movie'
   // utilise 'clientNetFlix' car il permet de passer des options : {token,data,method}
   // - passe le 'token'
   // - passe comme 'data' : id (l'id du film/serie)
   // - passe come 'method' 'POST'

   // 🐶 créé une fonction async 'handleDeleteToListClick'
   // pareil que précedement mais en utilisant la methode 'DELETE'

  if (!movie) {
    return <HeaderSkeleton></HeaderSkeleton>
  }
  return (
    <header style={banner}>
      <div className="banner__contents">
        <h1 className="banner__title">{title ?? '...'}</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">Lecture</button>
          {/* 🐶 utilise 'isInList' pour afficher deux bouttons differents
            1. Premier bouton : 'Supprimer de ma liste' avec onClick={handleDeleteToListClick}
            2. Deuximème bouton : 'Ajouter à ma liste' onClick={handleAddToListClick}
           */}
          <button className="banner__button banner__buttonInfo">
            Ajouter à ma liste
          </button>
        </div>
        <h1 className="synopsis">{movie?.overview ?? '...'}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

export {NetflixHeader}

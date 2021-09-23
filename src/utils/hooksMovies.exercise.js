// 🐶 importe les 3 lignes suivantes elles seonrt utiles
// import {useQuery, useMutation, useQueryClient} from 'react-query'
// import {clientApi, clientNetFlix} from './clientApi'
// import * as authNetflix from './authNetflixProvider'

const useMovie = (type, id) => {
  // 🐶 utilise 'useQuery' pour faire appel à `${type}/${id}`
  // retourne 'data'
}

const useMovieFilter = (type, filter, param) => {
  // 🐶 réutilise le code de NetflixRow
  // const endpointLatest = `${type}/upcoming`
  // const endpointPopular = `${type}/popular`
  // const endpointTopRated = `${type}/top_rated`
  // const endpointGenre = `discover/${type}?with_genres=${param}`
  // const endpointTrending = `trending/${type}/day`
  // let endpoint
  // switch (filter) {
  //   case 'populaire':
  //     endpoint = endpointPopular
  //     break
  //   case 'latest':
  //     endpoint = endpointLatest
  //     break
  //   case 'toprated':
  //     endpoint = endpointTopRated
  //     break
  //   case 'genre':
  //     endpoint = endpointGenre
  //     break
  //   case 'trending':
  //     endpoint = endpointTrending
  //     break
  //   default:
  //     throw new Error('Type non supporté')
  // }
  // const {data, error, status} = useQuery(`${endpoint}`, () =>
  //   clientApi(`${endpoint}`),
  // )
  //retourne data?.data?.results
}

const useBookmark = () => {
  // 🐶 utilise 'useQuery' pour faire appel à `bookmark`
  // utilise const token = await authNetflix.getToken()
  // pour avoir le token
  // retourne 'data'
}

const useAddBookmark = () => {
  // 🐶 créé 'queryClient'
  // const queryClient = useQueryClient()
  // 🐶 utilise 'useMutation' ajouter un bookmark
  // utilise le de la meme maniere que dans 'NetFlixHeader'
  // supprime les dependances aux states de 'NetFlixHeader'
  // à la place appelle les fonction passer en parametres
  // {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('bookmark')
  //     onSuccess()
  //   },
  //   onError: error => {
  //     onError()
  //   },
  //   onSettled: data => {
  //     onSettled()
  //   },
  //   onMutate:data => {
  //     onMutate()
  //   }
  // 🐶 tip : initialise les paramètres par des fonction vide par defaut comme
  // {onSuccess=()=>{}, onError=()=>{}, onSettled=()=>{} , onMutate=()=>{}}
}

const useDeleteBookmark = () => {
  // const queryClient = useQueryClient()
  // 🐶 utilise 'useMutation' supprimer un bookmark
  // utilise le de la meme maniere que dans 'NetFlixHeader'
  // supprime les dependances aux states de 'NetFlixHeader'
  // à la place appelle les fonction passer en parametres
  // {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('bookmark')
  //     onSuccess()
  //   },
  //   onError: error => {
  //     onError()
  //   },
  //   onSettled: data => {
  //     onSettled()
  //   },
  //   onMutate:data => {
  //     onMutate()
  //   }
  // 🐶 tip : initialise les paramètres par des fonction vide par defaut comme
  // {onSuccess=()=>{}, onError=()=>{}, onSettled=()=>{} , onMutate=()=>{}}
}

export {
  useMovie,
  useMovieFilter,
  useBookmark,
  useAddBookmark,
  useDeleteBookmark,
}

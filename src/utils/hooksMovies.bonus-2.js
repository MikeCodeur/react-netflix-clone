import {useQuery, useMutation, useQueryClient} from 'react-query'
import {clientApi,clientNetFlix} from './clientApi'
import * as authNetflix from './authNetflixProvider'


const loadingMovie = {
  id:'0',
  title: 'Loading...',
  description: 'loading...',
 /* backdrop_path:'/ck8zSCD4YppPjMbA8h6GDcPJPhH.jpg',
  poster_path:'/ck8zSCD4YppPjMbA8h6GDcPJPhH.jpg',*/
}

const useMovie = (type, id) => {
  const {data} = useQuery(`${type}/${id}`, () =>
  clientApi(`${type}/${id}`),
  )
  return data?.data /*?? loadingMovie*/
}

const useMovieFilter = (type, filter, param) => {
  const endpointLatest = `${type}/upcoming`
  const endpointPopular = `${type}/popular`
  const endpointTopRated = `${type}/top_rated`
  const endpointGenre = `discover/${type}?with_genres=${param}`
  const endpointTrending = `trending/${type}/day`

  let endpoint
  switch (filter) {
    case 'populaire':
      endpoint = endpointPopular
      break
    case 'latest':
      endpoint = endpointLatest
      break
    case 'toprated':
      endpoint = endpointTopRated
      break
    case 'genre':
      endpoint = endpointGenre
      break
    case 'trending':
      endpoint = endpointTrending
      break
    default:
      throw new Error('Type non supporté')
  }

  const {data} = useQuery(`${endpoint}`, () =>
  clientApi(`${endpoint}`),
  )
  return data?.data?.results ?? [loadingMovie]
}

const useBookmark = () => {
  const {data} = useQuery(`bookmark`, async () => {
    const token = await authNetflix.getToken()
    return clientNetFlix(`bookmark`, {token})
  })
  return data /*?? loadingMovie*/
}

const useAddBookmark = ({onSuccess=()=>{}, onError=()=>{}, onSettled=()=>{} , onMutate=()=>{}}) => {
  const queryClient = useQueryClient()

  const addMutation = useMutation(
    async ({type, id}) => {
      const token = await authNetflix.getToken()
      return clientNetFlix(`bookmark/${type}`, {
        token,
        data: {id},
        method: 'POST',
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bookmark')
        onSuccess()
      },
      onError: error => {
        onError()
      },
      onSettled: data => {
        onSettled()
      },
      onMutate:data => {
        onMutate()
      }
      
    },
  )
  return addMutation /*?? loadingMovie*/
}


const useDeleteBookmark = ({onSuccess=()=>{}, onError=()=>{}, onSettled=()=>{} , onMutate=()=>{}}) => {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation(
    async ({type, id}) => {
     
      const token = await authNetflix.getToken()
      return clientNetFlix(`bookmark/${type}`, {
        token,
        data: {id},
        method: 'DELETE',
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bookmark')
        onSuccess()
      },
      onError: error => {
        onError()
      },
      onSettled: data => {
        onSettled()
      },
      onMutate:data => {
        onMutate()
      }
    },
  )
  return deleteMutation /*?? loadingMovie*/
}



export {useMovie,useMovieFilter,useBookmark , useAddBookmark , useDeleteBookmark}
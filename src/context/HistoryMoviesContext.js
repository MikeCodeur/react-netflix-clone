import * as React from 'react'
import {TYPE_TV} from '../config'
const HistoryMovieContext = React.createContext()
const MAX_ELEMENTS = 3

const reducer = (state, action) => {
  switch (action.type) {
    case 'addMovie':
      return {
        ...state,
        movies: [action.payload, ...state.movies.slice(0, MAX_ELEMENTS - 1)],
      }
    case 'addSerie':
      return {
        ...state,
        series: [action.payload, ...state.series.slice(0, MAX_ELEMENTS - 1)],
      }
    default:
      throw new Error('Action non supporté')
  }
}

const HistoryMovieProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, {series: [], movies: []})
  const addMovie = movie => {
    dispatch({
      type: 'addMovie',
      payload: movie,
    })
  }
  const addSerie = serie => {
    dispatch({
      type: 'addSerie',
      payload: serie,
    })
  }
  const {series, movies} = state
  const value = {movies, series, addMovie, addSerie}
  return <HistoryMovieContext.Provider value={value} {...props} />
}

const useHistoryMovie = () => {
  const context = React.useContext(HistoryMovieContext)
  if (!context) {
    throw new Error(
      "useHistoryMovie() s'utilise avec <HistoryMovieContext.Provider>",
    )
  }
  return context
}

const useAddToHistory = (movie, type = TYPE_TV) => {
  const {addMovie, addSerie} = useHistoryMovie()
  React.useEffect(() => {
    if (movie) {
      if (type === TYPE_TV) {
        addSerie(movie)
      } else {
        addMovie(movie)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])
}

export {
  HistoryMovieContext,
  useHistoryMovie,
  HistoryMovieProvider,
  useAddToHistory,
}

import * as React from 'react'
const HistoryMovieContext = React.createContext()

const HistoryMovieProvider = (props) =>{
  const [movies, setMovies] = React.useState([])
  const [series, setSeries] = React.useState([])
  const value = {movies,series,setMovies, setSeries}
  return <HistoryMovieContext.Provider value={value} {...props} / >
}

const useHistoryMovie = () => {
  const context = React.useContext(HistoryMovieContext)
  if (!context) {
    throw new Error("useHistoryMovie() s'utilise avec <HistoryMovieContext.Provider>")
  }
  return context
}

export {HistoryMovieContext, useHistoryMovie ,HistoryMovieProvider}
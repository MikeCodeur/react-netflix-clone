// 🐶 importe renderHook et act depuis '@testing-library/react-hooks'
//import {renderHook, act} from '@testing-library/react-hooks'

// 🐶 importe les hook a tester
// import {
//   useClearHistory,
//   useNavigateMovie,
//   useAddToHistory,
// } from '../../context/HistoryMoviesContext'

// 🐶 test du hook useNavigateMovie() et des valeurs par default
test.todo('useNavigateMovie() valeurs par defauts')
// 🐶 utilise 'renderHook' pour faire le rendu du hook useNavigateMovie()
// 📝 https://react-hooks-testing-library.com/usage/basic-hooks
// 🐶 passe lui un wrapper

// const wrapperHistoryContext = ({children}) => {
//   return <HistoryMovieProvider>{children}</HistoryMovieProvider>
// } // note met en commun ce wrapper pour tous les tests

// 🐶 verifie que le resultat 'result.current' contienne
// movies: [],
// series: [],
// addMovie: expect.any(Function),
// addSerie: expect.any(Function),
// clearHistory: expect.any(Function),

// 🐶 test du hook useClearHistory()
test.todo('useClearHistory() est bien une fonction')
// 🐶 verifie que le resultat 'result.current' contienne une fonction

// 🐶 test du hook useClearHistory() et addMovie
test.todo('useNavigateMovie() addMovie')
// 🐶 fait le rendu de useNavigateMovie()
// créé un const movie
// 🤖 const movie = {id: '550', name: 'fakeMovie'}
// utilise 'act' pour faire appel à addMovie(movie)
// note : addMovie se trouve dans current 🤖 result.current.addMovie()

// 🐶 teste maintenant l'ajout via le hook useAddToHistory()
test.todo('ajout de films via useAddToHistory()')
// 🐶 fait le rendu de 3 hooks en meme temps dans 'renderHook' mais ne retourne que useNavigateMovie()
// useAddToHistory(movie, TYPE_MOVIE)
// useAddToHistory(movie, TYPE_TV)
// return useNavigateMovie()

// 🐶 verifie le resultat contient bien 1 fims et 1 serie

import {NetflixApp} from 'components/NetflixApp'
// 🐶 importe 
//import { ThemeProvider} from '@mui/styles'
//import { createTheme } from '@mui/material/styles'

// 🐶 créé un theme Material UI qui sera enrichie par la suite
// 🤖
// const theme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#111',
//     },
//     secondary: {
//       main: '#000',
//     },
//   },
// })

function App() {
  return (
    // 🐶 wrappe <NetflixApp /> 
    // avec <ThemeProvider> et passe 'theme' en prop 'theme'
      <NetflixApp />
  )
}

export {App}

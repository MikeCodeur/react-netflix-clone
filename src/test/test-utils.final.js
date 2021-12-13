import * as React from 'react'
import {render as renderReactTestingLib} from '@testing-library/react'
import {AuthProvider} from '../context/AuthContext'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {QueryClient, QueryClientProvider} from 'react-query'
import {HistoryMovieProvider} from '../context/HistoryMoviesContext'

const queryClient = new QueryClient()
const theme = createTheme()

function render(ui, {...options} = {}) {
  const wrapper = ({children}) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HistoryMovieProvider>
            <AuthProvider>{children}</AuthProvider>
          </HistoryMovieProvider>
        </ThemeProvider>
      </QueryClientProvider>
    )
  }
  return renderReactTestingLib(ui, {wrapper, ...options})
}

export * from '@testing-library/react'
// surcharge de render
export {render}

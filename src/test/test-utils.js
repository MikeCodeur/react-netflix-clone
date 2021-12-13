import * as React from 'react'
import {render as renderReactTestingLib} from '@testing-library/react'
import {HistoryMovieProvider} from '../context/HistoryMoviesContext'
import {AppProviders} from 'context'

const wrapperHistoryContext = ({children}) => {
  return <HistoryMovieProvider>{children}</HistoryMovieProvider>
}

function render(ui, {...options} = {}) {
  return renderReactTestingLib(ui, {wrapper: AppProviders, ...options})
}

export * from '@testing-library/react'
// surcharge de render
export {render, wrapperHistoryContext}

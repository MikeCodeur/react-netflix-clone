/* eslint-disable no-unused-vars */
import * as React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  sampleMovie,
  resultsMovies,
  bookmark,
} from 'test/test-utils'
//import userEvent from '@testing-library/user-event'
import {AUTH_URL, API_URL} from 'config'
//import {App} from 'App'
import * as authNetflix from '../utils/authNetflixProvider'
import {server, rest} from 'mocks'

afterEach(async () => {
  await authNetflix.logout()
})

beforeEach(() => {
  const user = {id: '1', username: 'fakeUsername', token: 'FAKE_TOKEN'}
  server.use(
    rest.get(`${AUTH_URL}/me`, async (req, res, ctx) => {
      return res(ctx.json({user}))
    }),
    rest.get(`${API_URL}/movie/:id`, async (req, res, ctx) => {
      return res(ctx.json(sampleMovie))
    }),
    rest.get(`${API_URL}/tv/:id`, async (req, res, ctx) => {
      return res(ctx.json(sampleMovie))
    }),
    rest.get(`${AUTH_URL}/bookmark`, async (req, res, ctx) => {
      return res(ctx.json({bookmark}))
    }),
    rest.get(`${API_URL}/*`, async (req, res, ctx) => {
      return res(ctx.json(resultsMovies))
    }),
    //bonus-4 bookmark
  )
})

//bonus-3
test.todo("rendu de l'app avec Token et NetFlixById")
// 🐶 créé une route qui à le meme id que sampleMovie
// 🤖 const route = `/movie/645886`

// mock windows.scrollTo avec jest.fn()

// 🐶 change de route avec window.history.pushState
// 🐶 met le token dans le localstorage

// 🐶 fait le rendu de app
// attend que le chargement ne soit plus la (screen.getByRole('alert'))
// attend que le skeleton ne soit plus la (screen.getByRole('button', {name: "Plus d'infos"}),)

// 🐶 verifie le nom du film, la description et que le style contienne l'url de l'image

//bonus-4
test.todo("rendu de l'app et click")
// 🐶 Meme chose que précedement pour le rendu

// 🐶 simule un clique sur 'Ajouter à ma liste'
// 🐶 attend que le boutton 'Ajouter à ma liste' disparaisse
// 🐶 verifie la présencde du boutton Supprimer de ma liste

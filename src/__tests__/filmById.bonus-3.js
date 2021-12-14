import * as React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  sampleMovie,
  resultsMovies,
  bookmark,
} from 'test/test-utils'
import {
  AUTH_URL,
  API_URL,
  localStorageTokenKey,
  imagePathOriginal,
} from 'config'
import {App} from 'App'
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
  )
})

test("rendu de l'app avec Token et NetFlixById", async () => {
  const route = `/movie/645886`
  window.history.pushState({}, 'Test page', route)
  window.scrollTo = jest.fn()
  const user = {id: '1', username: 'fakeUsername', token: 'FAKE_TOKEN'}
  const filmName = sampleMovie.title
  const overview = sampleMovie.overview
  const imageUrl = `${imagePathOriginal}${sampleMovie?.backdrop_path}`
  window.localStorage.setItem(localStorageTokenKey, user.token)

  render(<App></App>)

  expect(screen.getByRole('alert')).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.getByRole('alert'))
  await waitForElementToBeRemoved(() =>
    screen.getByRole('button', {name: "Plus d'infos"}),
  )
  //screen.debug()
  expect(screen.getByRole('heading', {name: filmName})).toBeInTheDocument()
  expect(screen.getByRole('heading', {name: overview})).toBeInTheDocument()
  expect(screen.getByRole('banner', {name: 'banner'})).toHaveAttribute(
    'style',
    expect.stringContaining(imageUrl),
  )
})

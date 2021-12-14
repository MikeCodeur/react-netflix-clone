import * as React from 'react'
import {render, screen, waitForElementToBeRemoved} from 'test/test-utils'
import userEvent from '@testing-library/user-event'
import {App} from 'App'

test("rendu de l'app avec page de Login", async () => {
  const connexion = 'Connexion'
  const register = 'Inscrivez vous'
  render(<App></App>)
  await waitForElementToBeRemoved(() => screen.getByRole('alert'))
  expect(screen.getByRole('heading', {name: connexion})).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', {name: /Nouveau sur Netflix ?/i}))
  expect(screen.getByRole('heading', {name: register})).toBeInTheDocument()
})

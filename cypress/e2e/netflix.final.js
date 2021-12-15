import faker from 'faker'

describe('netflix e2e', () => {
  it("chemin classique de l'utilisateur", () => {
    const user = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
    }
    cy.visit('/')

    cy.findByRole('button', {name: /Nouveau sur netflix ?/i}).click()

    cy.findByRole('dialog').within(() => {
      cy.findByRole('textbox', {name: /Email ou numéro de téléphone/i}).type(
        user.username,
      )
      cy.findByLabelText(/Mot de passe/i).type(user.password)
      cy.findByRole('button', {name: /INSCRIVEZ VOUS/i}).click()
    })

    cy.findByRole('link', {name: /Series/i}).click()
    cy.findByRole('heading', {name: /Séries tendances Netflix/i}).should(
      'exist',
    )
    cy.findByRole('heading', {name: /Séries les mieux notées/i}).should('exist')
    cy.findByRole('heading', {name: /Les séries populaires/i}).should('exist')
    cy.findByRole('heading', {name: /Les documentaires/i}).should('exist')
    cy.findByRole('heading', {name: /Les séries criminelles/i}).should('exist')

    cy.findByRole('link', {name: /Ma liste/i}).click()
    cy.findByRole('heading', {name: /Films favoris/i}).should('exist')
    cy.findByRole('heading', {name: /Séries favorites/i}).should('exist')

    cy.findAllByRole('listitem').should('have.length', 2)
    cy.findByRole('listitem', {name: /movie/i}).should('exist')
    cy.findByRole('listitem', {name: /tv/i}).should('exist')

    cy.findByRole('listitem', {name: /movie/i}).within(() => {
      cy.findAllByRole('link').should('have.length', 0)
    })

    cy.findByRole('button', {name: /Ajouter à ma liste/i}).click()

    cy.findByRole('listitem', {name: /movie/i}).within(() => {
      cy.findAllByRole('link').should('have.length', 1)
    })

    cy.findByRole('button', {name: /Supprimer de ma liste/i}).click()

    cy.findByRole('listitem', {name: /movie/i}).within(() => {
      cy.findAllByRole('link').should('have.length', 0)
    })

    cy.findByRole('textbox', {name: /search/i}).type('batman{enter}')

    cy.findByRole('listitem', {name: /movie/i}).within(() => {
      cy.findAllByRole('link').should('have.length', 15)
    })

    cy.findByRole('listitem', {name: /tv/i}).within(() => {
      cy.findAllByRole('link').should('have.length', 5)
    })

    cy.findByRole('button', {name: /logout/i}).click()

    cy.findByRole('dialog').within(() => {
      cy.findByRole('textbox', {name: /Email ou numéro de téléphone/i}).type(
        user.username,
      )
      cy.findByLabelText(/Mot de passe/i).type(user.password)
      cy.findByRole('button', {name: /CONNEXION/i}).click()
    })

    cy.findByRole('link', {name: /Series/i}).click()
    cy.findByRole('heading', {name: /Séries tendances Netflix/i}).should(
      'exist',
    )
    cy.findByRole('heading', {name: /Séries les mieux notées/i}).should('exist')
  })
})

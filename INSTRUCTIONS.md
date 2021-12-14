# Tests E2E (End To End)

### 💡 Tests de bout en bout

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Grace à à nos tests unitaires et tests d'intégrations nous augmentons
significativement la qualité de notre application. Mais comme nous l'avons vu
nous bouchonnons (mock) énormément de fonctionnalités du navigateur ou du
backend. Notons qu'a aucun moment nous n'avons démarré de serveurs, ni utilisé
un vrai navigateur. Les tests End To End se font de manière à être le plus
proche d'un environnement démarré avec un utilisateur final. C'est à dire avec
un serveur démarré et des interactions utilisateurs sur un écran (_enfin
presque_). Il existe de nombreuses librairies qui permettent de faire cela. Dans
notre application nous utiliserons [Cypress.io](https://www.cypress.io/) qui à
une module qui s'utilise avec
[Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/).
Ces librairies ont été ajoutées dans les dépendances du projet.

```jsx
describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
```

## Exercice

Dans cet exercice tu vas devoir tester une inscription suivit de

- navigation sur le menu série
- navigation sur bookmark
- suivi d'un ajout de film en favoris
- suppression de film en favoris
- recherche de terme batman
- deconnexion
- reconnexion

Pour utiliser `Cypress` en mode visuel :

- Démarre le serveur avec `npm start`
- Démarre `Cypress` avec `npm run cy:open`

Pour lancer `cypress` en mode non visuel

- lance avec `npm run e2e:run` (pense a faire un `npm run build avant`)

**Fichiers :**

- `cypress/e2e/Netflix.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=18%20Tests%20End%20To%20End)

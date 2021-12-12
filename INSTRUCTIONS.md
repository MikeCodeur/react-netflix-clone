# Tests unitaires

### 💡 Tests unitaires

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans une application il y a de nombreuses fonctions que nous réutilisons dans
différentes parties de notre application (_helpers, formatage de date,
manipulation d'objet ou d'array etc ..._). Un changement, un bug dans une de ces
fonctions peut impacter de nombreuses parties de l'application. Il est très
utilise de tester ce genre de fonctions avec des tests unitaires car cela nous
permettra de détecter rapidement une régression.

Pour faire nos tests unitaires dans notre application nous utiliserons
[JEST](https://jestjs.io/fr/) qui est inclus et configuré dans le
[CRA](https://create-react-app.dev/docs/running-tests/)

## Exercice

Dans cet exercice tu vas devoir tester des fonctions du helpers ce qui ne
devrait pas trop être compliqué. Ensuite tu vas devoir tester les fonctions
d'appel d'api (`clientAuth`, `clientNetflix`)

Pour cela nous allons utiliser [msw](https://mswjs.io/) qui nous permet de
mocker les appels HTTP. comme nous l'utilisons déjà dans ce projet, la
configuration et presque identique pour les tests.

```jsx
server.use(
  rest.get(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
    return res(ctx.json(resultRequest))
  }),
)
const result = await axios.get(endpoint)
expect(result.data).toEqual(resultRequest)
```

**Fichiers :**

- `src/utils/__tests__/Helper.js`
- `src/utils/__tests__/clientApi.js`

## Bonus

### 1. 🚀 Tester les erreurs d'authentification

Cette fois ci nous allons tester `clientNetflix` qui retourne un message
d'erreur en cas de problème d'authentification. `"Authentification incorrecte"`.
pour tester ce cas nous allons `mocker` et retourner un code 401

```jsx
server.use(
  rest.post(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
    return res(ctx.status(401), ctx.json(resultRequest))
  }),
)
```

Il est possible que lors de nos tests les fonctions fassent appel à des modules
externe. dans notre cas nous faisons appel à `authNetflix.logout()` qui fait une
suppression dans le `localstorage` (ce qui est supporté par `jsdom`). mais dans
certain cas cela pourrait ne pas être supporté. Il faudrait alors mocker ces
modules avec `jest.mock`.

Dans cet exercice tu vas devoir tester le code 401 et vérifier que nous avons
bien les message d'erreur `"Authentification incorrecte"` et utilise `jest.mock`
pour t'assurer que `authNetflix.logout()` a bien été appeler une fois .

Teste aussi une erreur 400 et vérifie que l'on récupère le message retouné par
le serveur

**Fichiers :**

- `src/utils/__tests__/clientApi.js`

### 2. 🚀 setupTests.js

`Jest` nous permet de centraliser de la configuration et de l'initialisation
dans un fichier `setupTests`. Regarde dans le fichier `jest.config` il y a la
configuration `setupFilesAfterEnv: fs.existsSync('src/setupTests.js')`

Ce qui veut dire que l'on peut mettre de la configuration commue aux tests ici

Dans cet exercice déplace dans `setupTests` les fonctions `beforeAll afterAll`
`afterEach` qui initialise le server `msw`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=15%20Tests%20Unitaires)

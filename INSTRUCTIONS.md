# Tests d'intégrations

### 💡 Tests d'intégrations

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans une application nous avons à tester unitairement les fonctions, c'est a
dire de manière isolée, indépendamment du reste de notre application (_ce sont
les tests unitaires_). Mais une application est un assemblage de diverses
briques : fonctions, librairies, etc ... Qui va s'assurer que tout fonctionne
tout au long de l'évolution du projet ? Qui va s'assurer que si quelqu'un
modifie un hook isolé cela ne va pas engendrer une régression sur une
fonctionnalité: (Login par exemple) Probablement les équipes de tests, le chef
de projet etc ... Toutes ces opération prennent du temps. A la place nous
pouvions créer des tests d'intégrations qui vérifient de grandes fonctionnalités
de notre application. A chaque évolution de notre code, ces tests seront
exécutés et l'on sera immédiatement averti en cas de régression. Le but est donc
de tester notre application en faisant le rendu des composant de plus haut
niveau. Dans notre cas App

```jsx
test("rendu de l'app", async () => {
  render(<App></App>)
  //expect().toBeInTheDocument()
})
```

## Exercice

Dans cet exercice tu vas devoir tester le rendu de `<App>`.Comme l'application
est dépendante de nombreux Providers, pense à utiliser notre Wrapper qui
contient tous les providers.

Dans ce premier cas de teste nous volons nous assurer que si un utilisateur non
connecté arrive, il accède correctement à la page de `Login` et lorsqu'il clique
sur `nouveau sur Netflix ?` il voit le composant Register.

**Fichiers :**

- `src/__tests__/App.js`

## Bonus

### 1. 🚀 User connecté / Mock fetch request

Dans cet exercice tu vas devoir simuler un utilisateur connecté. Pour cela nous
allons créer un objet `user` et le placer dans le `localStorage` pour déclencher
l'_autologin_.

```jsx
const user = {id: '1', username: 'fakeUsername', token: 'FAKE_TOKEN'}
window.localStorage.setItem(localStorageTokenKey, user.token)
```

L'auto-login fait un appel HTTP vers `${AUTH_URL}/me` comme nous somme dans un
environnement de test nous allons devoir mocker tous les appels HTTP

```jsx
server.use(
  rest.get(`${AUTH_URL}/me`, async (req, res, ctx) => {
    return res(ctx.json({user}))
  }),
)
//utilise cette config dans beforeEach(() => {}
```

Mock également les `endpoints` suivants car ils sont appelées par `NetflixRow`:

- `${API_URL}/movie/:id` retourne`sampleMovie`
- `${API_URL}/tv/:id` retourne`sampleMovie`
- `${API_URL}/`bookmark `bookmark`
- `${API_URL}/*` retourne `resultsMovies` un array de `sampleMovie`

> 💡Tu trouveras `sampleMovie,bookmark` et `resultsMovies` dans `src/test/data`
> et tu pourras les importer directement via
> `import {sampleMovie, resultsMovies,bookmark } from 'test/test-utils'`

Contenu du test :

- Teste la non présence de `Connexion` et `Inscrivez vous` dans la page.
- Teste la présence de la barre de menu en testant chaque élément : `Accueil` ,
  `Series` etc ...
- Teste la présence des sections de films : `Films Netflix` / `Séries Netflix` /
  `Les mieux notés` etc ...
- Teste la présence du Footer via le rôle `contentinfo`

> Pense à faire un logout après chaque test

```jsx
import * as authNetflix from '../utils/authNetflixProvider'

afterEach(async () => {
  await authNetflix.logout()
})
```

**Fichiers :**

- `src/__tests__/App.js`

### 2. 🚀 Teste d'autres routes connectées

Nous allons maintenant tester des nouvelles routes. Pour cela passe par
`history` et ensuite appelle le `render`

```jsx
const route = `/series`
window.history.pushState({}, 'Page series Netflix', route)
render(<App></App>)
```

Reprends le même teste que précédemment en testant les sections de films
différents

Teste la présence des sections de films :

- `Séries tendances Netflix`
- `Séries les mieux notées`
- `Les séries populaires`
- `Les documentaires` /
- `Les séries criminelles`

**Fichiers :**

- `src/__tests__/App.js`

### 3. 🚀 Teste de routes par ID

Nous allons maintenant tester des routes par ID comme par exemple
`/movie/645886`. Dans le composant `NetflixById` nous utilisons
`window.scrollTo` qui n'est pas supporté par `jsdom`. Nous allons donc le mocker
dans nos tests

```jsx
window.scrollTo = jest.fn()
```

Teste ensuite la route `/movie/645886`, c'est la route d'un film que nous avons
en donnée de test dans l'objet `sampleMovie` du fichier `src/test/data.js` c'est
le film retourner dans le mock du `endpoint`

```jsx
rest.get(`${API_URL}/movie/:id`, async (req, res, ctx) => {
   return res(ctx.json(sampleMovie))
}),
```

Ensuite vérifie la présence dans la page :

- du nom du film : `sampleMovie.title`
- de la description : `sampleMovie.overview`
- de l'url de l'image : `sampleMovie.backdrop_path` dans l'attribut style du
  `header`

En cas de présence du Skeleton, détecte le avec

```jsx
await waitForElementToBeRemoved(() =>
  screen.getByRole('button', {name: "Plus d'infos"}),
)
```

**Fichiers :**

- `src/__tests__/filmById.js`

### 4. 🚀 Ajout du film au bookmark

Nous voulons maintenant tester le cas du clique sur le bouton
`"Ajouter à ma liste"`. Comme ce bouton va appeler le l'API REST de l'ajout du
`bookmark` avec la méthode POST, il va falloir le `mocker` dans `beforeEach`.
Trouve une manière de retourner l'id du film en requête dans la réponse

```jsx
rest.post(`${AUTH_URL}/bookmark/:type`, async (req, res, ctx) => {
  const {id} = req.body
  const {type} = req.params
  const newbookmark = {...bookmark}
  //todo
  return res(ctx.json({bookmark: newbookmark}))
}),
```

Vérifie les même information que précédemment et simule en plus un clique sur le
bouton `"Ajouter à ma liste".` Attends ensuite que ce bouton disparaisse et
vérifie la présence du bouton `Supprimer de ma liste`

**Fichiers :**

- `src/__tests__/filmById.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=17%20Tests%20d'intégrations)

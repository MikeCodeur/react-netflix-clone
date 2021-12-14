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
```

Mock également les `endpoints` suivants :

- ``${API_URL}/movie/:id` retourne`sampleMovie`
- ``${API_URL}/tv/:id` retourne`sampleMovie`
- ``${API_URL}/*` retourne `resultsMovies` un array de `sampleMovie`

> 💡Tu trouveras `sampleMovie` et `resultsMovies` dans `src/test/data` et tu
> pourras les importer directement via
> `import {sampleMovie, resultsMovies, } from 'test/test-utils'`

Contenu du test :

- Teste la non présence de `Connexion` et `Inscrivez vous` dans la page.
- Teste la présence de la barre de menu en testant chaque élément : `Accueil` ,
  `Series` etc ...
- Teste la présence des sections de films : `Films Netflix` / `Séries Netflix` /
  `Les mieux notés` etc ...
- Teste la présence du Footer via le rôle `contentinfo`

**Fichiers :**

- `src/__tests__/App.js`

### 2. 🚀 Teste d'autres routes connectées

Nous allons maintenant tester une route connecté

## Aller plus loin

📑 Le lien vers la doc
[https://www.w3schools.com/html/html_css.asp](https://www.w3schools.com/html/html_css.asp)

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).

# React Router

### 💡 React Router

## 📝 Tes notes

Detaille ce que tu as appris ici
`src/exercise/01.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

La base du WEB est basé sur les URL. Il suffit de partager une URL à quelqu'un,
sur un site, pour accéder facilement à une ressource. Dans notre application
NetFlix, nous pourrions avoir besoin de partager la page avec le détails d'un
film ou d'une série. La page de souscription ou le login. Il existe de
nombreuses librairies pour gérer le `routing` avec `React` mais la plus utilisé,
reconnue et standard est [React Router](https://reactrouter.com/). Ci dessous un
exemple d'utilisation

- installation

```jsx
npm install react-router-dom --save
```

- exemple :

```jsx
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  )
}

//Composants dans l'aplication
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function Page404() {
  return (
    <div>
      <h2>Perdu ?</h2>
    </div>
  )
}
```

📑 Le lien vers [React Router](https://reactrouter.com/web/guides/quick-start)

## Exercice

👨‍✈️ Hugo le chef de projet nous demande d'avoir des pages différentes lorsque
l'on clique sur les menu `series` /`films` / `Nouveautés les plus regardés`

Ces menus sont liés aux PATH suivants

- `/series` une page dédiées aux séries

Cette page contiendra un header aléatoire mais uniquement sur les séries avec 5
lignes de séries

1. Séries tendances Netflix (`trending`)
2. Séries les mieux notées (`toprated`)
3. Les séries populaires (`populaire`)
4. Les documentaires (`genre 99`)
5. Les séries criminelles (`genre 80`)

- `/movies` une page dédiées aux films

Cette page contiendra un header aléatoire mais uniquement sur les films avec 5
lignes de films

1. Films Netflix (`trending`)
2. Les mieux notés (`toprated`)
3. Les films populaires (`populaire`)
4. Les films fantastiques (`genre 14`)
5. Les films de sciences fictions(`genre 878`)

- `/news` une page dédiées aux dernière nouveautés
  1. A venir (`latest`)
  2. Nouveauté (`latest`)
  3. laisse la suite comme `NetFlixApp`
- `/list` un page dédiées aux liste de film ajoutés
  - sera implémenté plus tard avec la gestion authentification

`🐶` Dans cet exercice tu vas devoir configurer le router dans `App` pour gérer
les routes

- `/`
- `/movies`
- `/series`
- `/news`
- `/*`

pour que ces routes charges les bons composants : `NetflixApp` etc ...

> 💡 Pour simplifier l'exercice `NetflixApp` à été dupliquer en `NetflixMovies`
> , `NetflixSeries`, `NetFlixNews` qui nous servira de base de départ

**Fichiers :**

- `src/App.js`
- `src/components/NetflixSeries.js`
- `src/components/NetflixMovies.js`
- `src/components/NetflixNews.js`

## Bonus

### 1. 🚀 Path Param

👨‍✈️ Hugo le chef de projet nous demande d'avoir la possibilité de partager des
films ou des séries via des URL de la forme suivante

- `/movie/:movieId`
- `/tv/:tvId`

Quand cette URL est partagée, le Header avec le titre, la description, image est
affiché. L'utilisateur doit également avoir la possibilité de naviguer librement
en **cliquant sur le lien des pochettes**. On doit aussi de pouvoir arriver sur
des pages particulière comme :

🐶 Nous allons dupliquer le composant `<NetflixApp/>` dans `<NetflixById>` et
adapter l'affichage du `header`.

Nous utiliserons deux `hooks` intéressant pour récupérer les `query params` pour
avoir l'id et savoir si on est en mode `series/films`

```jsx
import {useParams, useLocation} from 'react-router-dom'

let {tvId} = useParams() //id de la serie
const location = useLocation()
localtion.pathname //-> /tv/1554 ou /movie/5845
```

> utilise `location.pathname.includes` pour determiner le mode TV /MOVIE

Pense a modifier `NetFlixRow` pour mettre le lien vers le films/serie

📑 Le lien vers la doc de
[useParam](https://reactrouter.com/web/api/Hooks/useparams)

📑 Le lien vers la doc de
[useLocaltion](https://reactrouter.com/web/api/Hooks/uselocation)

**Fichiers :**

- `src/components/NetflixById.js`
- `src/components/NetflixRow.js`

### 2 🚀 Liens internes

Les liens de notre barre de menu sont développé avec les balises html
`<a></a href=''>`

Cela est problématique dans une application React puisque cela force le
rechargement complet de la page. _(perte des states etc ...)._ A la place il est
possible d'utiliser le composant Link de ReactRouter

```jsx
import {Link} from 'react-router-dom'
//
<Link to="/">
```

Fais ce changement dans `NetflixAppBar` et `NetflixRow`

**Fichiers :**

- `src/NetflixAppBar`
- `src/NetflixRow`

### 3 🚀 Scroll Top

Lorsque l'on navigue (on change de page) on constate que la `scrollbar` reste
dans la même position, ce qui peut être gênant

Améliore ce comportement en remontant la `scrollbar` , en douceur

```jsx
window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
```

**Fichiers :**

- `src/components/NetflixById.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=08%20React%20Router)

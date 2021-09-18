# React Router
### 💡 React Router

## 📝 Tes notes

Detaille ce que tu as appris ici `src/exercise/01.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

La base du WEB est basé sur les URL. Il suffit de partager une URL à quelqu'un, sur un site, pour accéder facilement à une ressource. Dans notre application NetFlix, nous pourrions avoir besoin de partager la page avec le détails d'un film ou d'une série. La page de souscription ou le login. Il excite de nombreuses librairies pour gérer le `routing` avec `React` mais la plus utilisé, reconnue et standard est [React Router](https://reactrouter.com/). Ci dessous un exemple d'utilisation

- installation

```jsx
npm install react-router-dom --save
```

- exemple :

```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*" >
						<Page404/>	
				  </Route>
        </Switch>
      </div>
    </Router>
  );
}

//Composants dans l'aplication
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Page404() {
  return (
    <div>
      <h2>Perdu ?</h2>
    </div>
  );
}
```

📑 Le lien vers [React Router](https://reactrouter.com/web/guides/quick-start)

## Exercice

👨‍✈️ Hugo le chef de projet nous demande d'avoir la possibilité de partager des films ou des séries via des URL de la forme suivante 

- `/movie/:movieId`
- `/tv/:tvId`

Quand cette URL est partagée, le Header avec le titre, la description, image est affiché. L'utilisateur doit également avoir la possibilité de naviguer librement en **cliquant sur le lien des pochettes**. On doit aussi de pouvoir arriver sur des pages particulière comme :

- `/series` une page dédiées aux séries

Cette page contiendra un header aléatoire mais uniquement sur les séries avec  5 lignes de séries

1. Séries tendances Netflix (`trending`)
2. Séries les mieux notées (`toprated`)
3. Les séries populaires (`populaire`)
4. Les documentaires (`genre 99`)
5. Les séries criminelles (`genre 80`)
- `/movies` une page dédiées aux films

Cette page contiendra un header aléatoire mais uniquement sur les films avec  5 lignes de films

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

🐶 Nous allons dupliquer le composant `<NetflixApp/>` dans `<NetflixById>` et adapter l'affichage du `header`.

Nous utiliserons deux `hooks` intéressant pour récupérer les `query params` pour avoir l'id et savoir si on est en mode `series/films`

```jsx
import {
  useParams,
  useLocation
} from "react-router-dom";

let {tvId} = useParams() //id de la serie
const location = useLocation() 
localtion.pathname //-> /tv/1554 ou /movie/5845
```

📑 Le lien vers la doc de [useParam](https://reactrouter.com/web/api/Hooks/useparams)

📑 Le lien vers la doc de [useLocaltion](https://reactrouter.com/web/api/Hooks/uselocation)

**Fichiers :** 

- `src/components/NetflixById.js`
- `src/components/NetflixSeries.js`
- `src/components/NetflixMovies.js`
- `src/components/NetflixNews.js`
- `src/components/NetfliRow.js`
- `src/App.js`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
# Context API (historique des visites)
### 💡 Context API & state management (historique des visites)

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Comme pour le `AuthContext`, nous avons besoin de gérer des états dans notre application sans avoir à les passer en props de composant en composant (props drill). Nous n'allons pas utiliser le `AuthContext` qui sert à la logique d'authentification. A la place nous allons créer des contextes spécifiques pour gérer les états  (state management) de nos différentes fonctionnalités de notre application.  On pourrait imaginer a terme avoir quelque chose du genre : 

```html
- AuthContext
- Paymentcontext
- SearchContext
- etc etc ...
```

## Exercice

👨‍✈️ Hugo le chef de projet nous demande un fonctionnalité d'historique des derniers films et séries visités. Cela permettra à l'utilisateur de retrouver facilement un film qui a déjà été vu ou visité (c'est à dire où l'utilisateur est allé voir la fiche de détails du film/série).  Cette liste des N derniers films/séries sera affichée dans un menu déroulant en haut à droite lors d'un clique sur un icone. Dans cet exercice tu vas devoir créer un composant `MenuHistory`  en utilisant 2 composants de Mui  `:`

- Menu Customisé : 📑 [https://mui.com/components/menus/#customization](https://mui.com/components/menus/#customization)
- Card material  : 📑  [https://mui.com/components/cards/#ui-controls](https://mui.com/components/cards/#ui-controls)

Ce composant affichera la liste de l'historique et lors d'un clique sur un item l'utilisateur sera redirigé vers la page du film

> Les données (films / séries) ne seront pas passés en `props` mais récupérer via l'`API Context`.

Un icone placé dans la `NetflixAppBar` permettra de déplier ce composant

```jsx
<MenuHistory style={{cursor: 'pointer', marginRight:'10px'}} />
```

Tu vas donc devoir créer un contexte `HistoryMoviesContext` qui permettra d'ajouter des films / séries et d'accéder à ses films / séries. Ce contexte sera utilisé : 

- Dans `MenuHistory` pour lire les dernier films / series visités
- Dans `NetFlixById` pour ajouter le film/série en cours de visite.

**Fichiers :**

- `src/context/HistoryMoviesContext.js`
- `src/components/MenuHistory.js`
- `src/components/NetFlixById.js`

## Bonus

### 1. 🚀 Logique réutilisable useReducer

Plutôt que d'avoir à gérer les `arrays` d'historique de `series` et `movies` dans les différents endroit de l'application il est préférable de centraliser cette logique dans le Provider. A la place d'avoir à gérer cela dans `NetflixById` 

```jsx
const {series, movies, setMovies, setSeries} = useHistoryMovie()
//...
if (type === TYPE_TV) {
    setSeries([
      headerMovie,
      ...series.slice(
        0,
        series.length >= MAX_ELEMENTS ? MAX_ELEMENTS - 1 : series.length,
      ),
    ])
  } else {
    setMovies([
      headerMovie,
      ...movies.slice(
        0,
        movies.length >= MAX_ELEMENTS ? MAX_ELEMENTS - 1 : movies.length,
      ),
    ])
  }
```

Tu vas devoir créer cette logique dans `HistoryMovieContext.` Pour cela n'utilise plus les states `series` et `movies` mais utilise le hook `useReducer` avec un `reducer` de telle manière que l'on puisse utiliser `useHistoryMovie` de la manière suivante.

```jsx
const {addSerie, addMovie} = useHistoryMovie()
//...
addSerie(movie)
addSerie(serie)
```

**Fichiers :**

- `src/components/NetflixApp.js`

### 2. 🚀 hook useAddToHistory

Plutôt que d’avoir à gérer un `side effect`, le type etc ...  comme cela 

```jsx
React.useEffect(() => {
  if (headerMovie) {
    if (type === TYPE_TV) {
      addSerie(headerMovie)
    } else {
      addMovie(headerMovie)
    }
  }
<<<<<<< Updated upstream
=======
// eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> Stashed changes
},[headerMovie])
```

Créé un hook `useAddToHistory` qui permettra une utilisation simplifier de la forme 

```jsx
useAddToHistory(movie, type)
```

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
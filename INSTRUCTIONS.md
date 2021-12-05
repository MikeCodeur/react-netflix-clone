# Fetch Films Series

### 💡 Fetch Films Séries

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTION.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Pour avoir accès aux nombreux films et séries disponible sur Netflix nous
aurions pu utiliser l'API développeur de Netflix. Celle n'est plus ouverte aux
développeurs. du coups nous allons utiliser l'API de
[TMDB (The Movie DB)](https://www.themoviedb.org/movie). La première chose a
faire est de [créer un compte ici](https://www.themoviedb.org/signup). Ensuite
il faut aller dans les paramètres et
[générer une clef d'API](https://www.themoviedb.org/settings/api) . On pourra
ensuite passer cette clef en `query param`. Exemple de requête

```html
https://api.themoviedb.org/3/movie/550?api_key=4fc7b001e8a107fe1fddc6b41ed0f4af
```

La réponse :

```json
{
  "adult": false,
  "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "http://www.foxmovies.com/movies/fight-club",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 42.285,
  "poster_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
  "release_date": "1999-10-15",
  "revenue": 100853753,
  "runtime": 139,
  "status": "Released",
  "tagline": "Mischief. Mayhem. Soap.",
  "title": "Fight Club",
  "video": false,
  "vote_average": 8.4,
  "vote_count": 22389
}
```

> L'api permet de chercher des films `/movie` ou des séries `/tv`

📑 Le lien vers la
[documentation de l'API TMDV](https://developers.themoviedb.org/3)

## Exercice

👨‍✈️ Hugo le chef de projet nous demande la fonctionnalité suivante : Lorsque d'un
utilisateur arrive sur le site, un film par défaut sera afficher dans le header.

🐶 Tu vas devoir appeler cette API et récupérer un film de ton choix en fonction
de son id (tu trouveras l'id dans l'url de la page de détail d'un film: Par
exemple `848278` pour `Jurrasic Hunt:`
[https://www.themoviedb.org/movie/848278-jurassic-hunt](https://www.themoviedb.org/movie/848278-jurassic-hunt)

Ce film sera affiché par défaut sur le `header` sur la page d'accueil.

Nous utiliserons `axios` pour les appels HTTP (une alternative a `fetch`)

```bash
npm install axios --save
```

exemple d'appel :

```jsx
import axios from 'axios'

axios
  .get('https://api.themoviedb.org/3/movie/550')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .then(function () {
    // always executed
  })
```

**Fichiers :**

- `src/components/NetflixApp.js`

## Bonus

### 1. 🚀 Gérer les Films et séries

👨‍✈️ Hugo le chef de projet nous demande de gérer les films mais aussi les séries
avec le même affichage.

L'API TMDB fonctionne pour les films et séries. La différence se fait sur l'url
de l'API mais aussi sur le format des données.. Quelques exemples

Films :

- url : `/movie`
- titre du film : champ `title`

Série

- url : `/tv`
- titre du film : champ `name`

Nous allons donc gérer ces deux cas : Dans `NetFlixApp` pour les appels API et
dans `NetflixHeader` pour l'affichage des données.

Le composant `NetflixHeader` :

Il doit gérer les deux cas. Pour cela tu vas devoir passer un `prop` 'type' qui
aura la valeur 'tv' ou 'movie' et en fonction du type tu vas devoir afficher le
bon titre.

Le composant `NetFlixApp` :

Créé une constante pour le type et utilise cette constante pour les appels API
et passe la a `NetflixHeader`

```jsx
const type = 'tv' // ou 'movie'
//...
<NetflixHeader movie={headerMovie?.data} type={type} />
```

Utilise ensuite le `type` dans l'url pour appeler la bonne API en fonction du
type.

> Attention aux ID qui sont différents entre films et séries, utilise `71446`
> pour casa de papel

**Fichiers :**

- `src/components/NetflixApp.js`

### 2. 🚀 Films et séries aléatoires

👨‍✈️ Hugo le chef de projet nous demande que lorsqu'un utilisateur arrive sur le
site il ne voit pas toujours même film sur dans le header. Il veut afficher
aléatoirement un film ou une série. et aléatoirement parmi une liste d'éléments.
Pour commencer il nous fournis il liste de films et séries

```jsx
const tvIds = [71446, 60574, 1399, 66732]
const moviesIds = [399566, 602734, 579047, 385128, 615658]
```

Tu vas devoir implémenter cette fonctionnalité : Pour cela Utilise
`getRandomIntInclusive` qui est dans le fichier `utils/helper.js` qui permet
d'avoir une nombre entier aléatoire sur une plage.

```jsx
import {getRandomIntInclusive} from '../utils/helper'
getRandomIntInclusive(0, 4) // nombre aleatoire entre 0 et 4
```

utilise `getRandomIntInclusive` pour afficher aléatoirement des films et des
séries.

> Transforme 'type' en `state` sinon `type` ne changera pas de valeur dans
> `NetflixHeader`. Du coup attention au dépendances de `useEffect`. On veut que
> l'appel API ne se fasse qu'une fois, utilise
> `// eslint-disable-next-line react-hooks/exhaustive-deps` pour supprimer le
> warning sur linter

**Fichiers :**

- `src/components/NetflixApp.js`

### 3. 🚀 Helper et constantes

Dans une application on réutilise souvent les mêmes variables et fonctions
utiles. Pour cela nous avons créé fichier helper dans `utils/helper.js` qui
contiendra toutes nos fonctions utile dans d'autres parties de notre
application. Par exemple les fonctions qui permettent de générer aléatoirement
des id de films / séries.

1.  Dans cette exercice tu vas devoir utiliser ces fonctions dans `NetFlixApp`

```jsx
export function getRandomType() {
  return [TYPE_TV, TYPE_MOVIE][getRandomIntInclusive(0, 1)]
}
export function getRandomMovie() {
  const moviesIds = [399566, 602734, 579047, 385128, 615658]
  return moviesIds[getRandomIntInclusive(0, moviesIds.length - 1)]
}
export function getRandomSerie() {
  const tvIds = [71446, 60574, 1399, 66732]
  return tvIds[getRandomIntInclusive(0, tvIds.length - 1)]
}
export function getRandomId(type = TYPE_MOVIE) {
  return type === TYPE_TV ? getRandomSerie() : getRandomMovie()
}
```

1. Nous aimons pas nous trimballer des `'magic string'` comme `'tv'` `'movie'`
   `'fr-fr'`,il est préférable de créer des constantes et les mettre dans un
   fichier à part.
2. De même pour les clefs d'API, si la clef change il va falloir modifier
   partout dans le code. Du coup on centralise les constantes.

```jsx
export const apiKey = '4fc7b001e8a107fe1fddc6b41ed0f4af'
export const lang = 'fr-fr'
export const imagePath = 'https://image.tmdb.org/t/p'
export const imagePathOriginal = `${imagePath}/original`
export const imagePath400 = `${imagePath}/w400`
export const TYPE_TV = 'tv'
export const TYPE_MOVIE = 'movie'
```

1. De même pour les URL images ou URL API qui peuvent varier d'un en fonction de
   l'environnement (dev, production, test etc ...)

Pour cela on utilise un fichier `.env` / `.env.production` / `.env.local`

```jsx
REACT_APP_API_URL=https://api.themoviedb.org/3
REACT_APP_IMAGE_URL=https://image.tmdb.org/t/p
```

📑 Le lien vers la doc
[cra variables environnement](https://create-react-app.dev/docs/adding-custom-environment-variables/)

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/config.js`
- `src/utils/helper.js`
- `.env`

### 4. 🚀 API Client

Nous avons précédemment exporté dans des fichiers config `API_URL` `apiKey`
`lang`. Mais nous voulons aussi externaliser l'appel `axios` qui sera
vraisemblablement toujours le même à l' exception du `endpoint` . Nous n'avons
pas envie de nous trimballer l'appel Axios, la clef,la lang etc ... Idéalement
nous voudrions faire notre appel comme ceci

- `clientApi('/movie/550')`
- `clientApi('/tv/695')`

Pour cela nous avons créé une fonction `clientApi` dans `src/utils/clienApi.js`

```jsx
const clientApi = endpoint => {
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}
```

Dans cet exercice, utilise `clientApi` au lieu de `axios`

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/utils/clientApi.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=04%20Fetch%20Films%20Series%20)

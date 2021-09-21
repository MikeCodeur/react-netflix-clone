# API REST : Gestion des favoris
### 💡 API REST : Gestion des favoris

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans une application le front interagis fortement avec le backend. Une fois l'utilisateur authentifié il peut ensuite effectuer des actions qui seront sauvegarder coté backend. Pour cela il est possible de faire des appels HTTP selon la norme API REST, GraphL ou autre. Ici nous utiliseront des API REST. Dans les API REST les paramètres importants à prendre en prendre sont : 

- La ressource (le endpoint)
- La méthode HTTP (`GET,POST,PUT,DELETE`)

 Exemple d'appel API REST pour une ressource que nous appelleront `articles`

```jsx
GET /articles
// liste tous les articles
POST /articles
// Créé un nouvel article
GET /articles/:id
// récupère une article
PUT /articles/:id
// met à jour un article
DELETE /articles/:id
// supprime une article
```

## Exercice

👨‍✈️ Hugo le chef de projet nous informe que les équipes backend viennent de nous proposer un nouvelle version des API REST qui permet de gérer liste de films et séries favorites. Voila la documentation :

```jsx
GET /bookmark
// recupère les favoris de l'utilisateur connecté
// reponse contient un array d'id de films et de series
{uid: 1, movies: [5, 10, 15], series: [20, 25]}

POST /bookmark/tv
// ajoute une série dans la liste des series favorites

POST /bookmark/movie
// ajoute un film dans la liste des series favorites

DELETE /bookmark/tv
// spprime une série dans la liste des series favorites

DELETE /bookmark/movie
// spprime un film dans la liste des series favorites
```

> L'id sera passé dans le `body` de la requête

> Une erreur st retourner en cas de doublons

👨‍✈️ Hugo le chef de projet nous demande d'implémenter la gestion des films et séries favorites. La gestion se fera principalement dans le composant `NetflixHeader`. 

- On doit pouvoir voir si un film est dans notre liste (proposer de le supprimer)
- On doit pouvoir ajouter le film/série dans la liste
- On doit pouvoir supprimer le film/série dans la liste

**Fichiers :**

- `src/components/NetflixHeader.js`

## Bonus

### 1. 🚀 Notification (SnackBars), Erreurs et Icones

👨‍✈️ Hugo le chef de projet veut un icone de suppression lorsqu'il est possible de supprimer un film série de la liste. On utilisera les icone de `material-ui`

```jsx
import DeleteIcon from '@mui/icons-material/Delete'
//.
<DeleteIcon color="secondary" style={{marginRight: '5px'}} fontSize={'small'}/>
```

📑 Le lien vers la [documentation des icones](https://mui.com/components/material-icons/) 

👨‍✈️ Hugo souhaite aussi pouvoir notifier l'utilisateur si **une erreur est survenu** ou si l'ajout/suppression s'est **dérouler correctement**. Pour cela nous utiliseront les composants `Snackbar` et `MuiAlert`

```jsx
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
}
//...
const [snackbarOpen, setSnackbarOpen] = React.useState(false)
//...
<Snackbar
  open={snackbarOpen}
  autoHideDuration={4000}
  onClose={() => setSnackbarOpen(false)}
>
  <Alert severity="error" sx={{width: '100%'}}>
	   erreur est survenue
  </Alert>
</Snackbar>
```

📑 Le lien vers la [documentation Snackbar](https://mui.com/components/snackbars/) 

Utilise `error` et `status` de `useFetchData`

```jsx
const {data, error, status, execute} = useFetchData()
```

Base toi sur les `status` et `error` : 

- `status === 'done'` pour afficher le message dans la snackbar : *Liste modifiée avec succès*
- `status === 'error'` pour afficher le message dans la snackbar : `Problème lors de l'ajout : {error.message}`

> Comme `status` vient de `useFetchData` et qu'il est partagé avec l'appel initial (`'/bookmark'`), créé un state `callBookmark` initialisé à `false` par défaut. Passe le à `true` lors d'un appel ajout/suppression aux favoris. et ajoute une condition d'affichage aux snackbars (`callBookmark && status ===` )

Pense à changer le state de la snackbar sur chaque changement de `status`

```jsx
React.useEffect(() => {
    setSnackbarOpen(true)
}, [status])
```

**Fichiers :**

- `src/components/NetflixHeader.js`

### 2. 🚀 Route affichage des favoris

👨‍✈️ Hugo souhaite avoir une route dédiée avec la liste de tous les favoris. Il souhaite avoir le même rendu que les autres pages c'est a dire :

- `<NetflixAppBar />`
- `<NetflixHeader />`
    - qui contiendra le premier film favori sinon un par défaut
- Et deux lignes (`row`)
    - une ligne : *Films favoris*
    - une ligne : *Séries favorites*

La route à été définie dans le composant `AuthApp` elle est donc accessible et il n'y aura rien a faire dessus

```jsx
import {NetflixBookmark} from 'components/NetflixBookmark'
//...
<Route path="/list">
  <NetflixBookmark logout={logout} />
</Route>
```

Créé un composant `NetflixBookmark` qui fera fera tous les appels nécessaires pour afficher les favoris

**Fichiers :**

- `src/components/NetflixBookmark.js`
- `src/components/AuthApp.js`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
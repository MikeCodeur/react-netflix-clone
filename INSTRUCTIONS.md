# Fetch avancé / status / error
### 💡 Fetch avancé / status / error

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans la section précédente nous avons vu une manière simple de gérer les appels HTTP. Pour le moment nous ne gérons pas de status : `idle`, `fetching`, `done`, `error`  etc ... ce qui nous permettrais de gérer plus finement l'état du composant. Par exemple pour afficher un <Loading> component durant le chargement, afficher un message d'erreur etc ...

## Exercice

Dans cet exercice tu vas devoir gérer deux états et ajouter 2 composants `MaterialUI`

- `fetching`(en cours de chargement)

utilisation de [CircularProgress](https://material-ui.com/components/progress/)

```jsx
import CircularProgress from '@material-ui/core/CircularProgress';
<CircularProgress />
```

> Astuce pour simuler du délais : Modifier le `clientAPI`

```jsx
const sleep = t => new Promise(resolve => setTimeout(resolve, t))

const clientApi = async endpoint => {
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  await sleep(2000)
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}
```

- `error` (erreur sur l'appel d'api)

utilisation de [Alert](https://material-ui.com/components/alert/)

```jsx
import { Alert, AlertTitle } from '@material-ui/lab';
<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert>
```

**Fichiers :**

- `src/components/NetflixApp.js`

## Bonus

### 1. 🚀 Utilisation d'un Hook `useFetchData`

Nous avions déjà coder un Hook réutilisable `useFetchData` qui permettais de gérer les états et les données et les messages d'erreur. Afin d'avoir un comportement commun dans toute l'application l'avons mis dans `src/utils/hooks.js`

```jsx
import {useFetchData} from './utils/hooks'
//...
const {data, error, status, execute} = useFetchData()
//...
execute(client(`${type}/${id}`))
```

Dans cet exercice tu vas devoir le l'utiliser.

Affiche également le libellé du message d'erreur géré par l'api. Il s'agit d'un message d'erreur fonctionnel

```jsx
<Alert severity="error">
  <AlertTitle>Une erreur est survenue</AlertTitle>
  Detail : {error.message}
</Alert>
```

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/utils/hooks.js`

### 2. 🚀 Utilisation de ErrorBoundary

Il peut survenir parfois des erreurs non gérer, erreur inconnus que nous voulons traité. Le package `ReactErrorBoundary` permet de gérer cela

```jsx
npm install --save react-error-boundary --save
```

```jsx
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const ui = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <ComponentThatMayError />
  </ErrorBoundary>
)
```

Dans cet exercice tu vas devoir gérer le cas des erreurs générales du site. Lève une erreur si le `status` est en erreur 

```jsx
if (status === 'error') {
    // sera catcher par ErrorBoundary
    throw new Error(error.message)
}
```

**Fichiers :**

- `src/App.js`
- `src/components/NetflixApp.js`

## Aller plus loin

📑 Le lien vers la doc [https://www.w3schools.com/html/html_css.asp](https://www.w3schools.com/html/html_css.asp)

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
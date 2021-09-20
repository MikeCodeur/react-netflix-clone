# Authentification
### 💡 Authentification

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il existe de de nombreuses méthodes pour gérer l'authentification d'un utilisateur. `oauth2`, `openid`, `cas`, `saml` etc ... Il s'agit souvent de de récupérer un `Token` en fonction d'un couple `username/password`. Tous les échanges sont ensuite fait avec ce `Token`. Cela évite d'avoir a échanger en permanence le `username/password`. On passe généralement le `Token` dans le header http. voici un exemple avec `'axios'`

```jsx
const config = {
  headers: {
    Authorization:  `Bearer ${token}`
  },
}
return axios.get(`/ressources`,config)
```

📑 Le liens vers la documentation de [configuration du header http avec axios](https://axios-http.com/docs/req_config)

Gérer l'authentification est les droits peut vite devenir compliqué, c'est la raison pour laquelle ils existe de nombreux service qui le gère pour nous.

- Firebase Authentication
- AWS Cognito
- Auth0
- etc ...

Il est pénible pour un utilisateur d'avoir à saisir systématiquement le  `username/password` à chaque connexion. En règle général le `Token` est stocké dans le navigateur (`Cookies`, `LocalStorage`), ce qui permet d'être directement authentifié.

## Exercice

👨‍✈️ Hugo le chef de projet nous demande de gérer l'authentification, les utilisateurs non connectés ne pourront plus voir la liste des films et verrons un formulaire d'inscription / connexion. Les équipes qui développent le backend nous on fournis un utilitaire permettant de se connecter aux API d'authentification Netflix `authNetflixProvider.js` et le composant `<LoginRegister>`. Avec cela on peux se connecter, s'enregistrer et se déconnection via :

```jsx
import * as authNetflix from 'auth-netflix-provider'

authNetflix.login({username, password})
authNetflix.register({username, password})
authNetflix.logout()
authNetflix.getToken()
```

> `login` et `register` stocke le `token` dans le navigateur (localstorage), `getToken` permet d'accéder à ce `token`, `logout` supprime le `token` du navigateur

**Fichiers :**

- `src/App.js`
- `src/AuthApp.js`
- `src/UnauthApp.js`

## Bonus

### 1. 🚀 Auto login

👨‍✈️ Hugo le chef de projet veut que lorsque l'utilisateur revient sur la page, il n'ait pas à retaper le login et mot de passe. L'utilitaire fournis par l'équipe backend `authNetflixProvider` nous permet de récupérer le `token` sauvegardé lors de la dernière connexion avec `authNetflix.getToken()`.  L'équipe backend nous informe également quand appelant l'API REST `/me` avec le `Token`, on récupère les informations de l'utilisateur connecté.

1. **Créé une fonction `getUserByToken`**

    Cette fonction  récupère le `token` avec `authNetflix.getToken()` et appel l'API `/me` 

    avec `clientAuth`

    ```jsx
    import {clientAuth} from './utils/clientApi
    clientAuth('me',token)
    ```

    et retourne l'utilisateur connecté.

2. **Utilise notre Hook `useFetchData`** 

    Afin d'uniformiser tous les appels HTTP, on utilise le `hook useFetchData` pour faire appel à `getUser`. 

    > Fait l'appel dans un `useEffect`

**Fichiers :**

- `src/App.js`

### 2. 🚀 Chargement BackDrop

Lorsque l'utilisateur se connecte il y a un petit effet ou l'on voit apparaitre le composant login puis il disparait. Utilise le `status` de `useFetchData` pour afficher un composant de chargement en plein écran 

```jsx
status === 'fetching'
```

Exemple d'utilisation de `Backdrop`

```jsx
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

<Backdrop open={true}>
  <CircularProgress color="primary" />
</Backdrop>
```

Condition l'affiche du `backdrop` quand le `status` est a `fetching`

**Fichiers :**

- `src/App.js`

### 3 🚀 **Gérer les messages d'erreur**

Lorsqu'un utilisateur veut créer un compte, il peut y avoir un problème de connexion, idem sur la création de compte. Créé un state `authError` et met à jour la valeur 

```jsx
authNetflix.register(data).then(user => setData(user)).catch(err => setAuthError(err))
```

passe ensuite ce state en `prop error` de `<UnauthApp />`

**Fichiers :**

- `src/App.js`
- `src/UnauthApp.js`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
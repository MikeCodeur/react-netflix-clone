# Context API
### 💡 Utilisation du Context API pour gérer les states dans l'application

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous gérons d'un coté, l'état (`state management`) de toutes les données du serveur grâce à `react-query` . Mais ce n'est pas suffisant, nous devons aussi gérer l'état de notre application, le user connecté et les diffèrent états des interfaces. il existe de nombreux outils (state manager) pour faire cela. comme `Redux`, `Mobx`, `zustand` etc ... mais depuis l'apparition de l'`API context` et du hook `useContext()` cela nous permet de gérer les états nativement avec React. Ces états sont ensuite accessibles dans toutes l'application sans passer par des props (`props drills pattern`) Rappel sur l'utilisation de l'api `context` et `useContext`

```jsx
const ThemeContext = React.createContext()

<ThemeContext.Provider value={theme}>
      <Toolbar />
</ThemeContext.Provider>

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Je suis stylé par le contexte de thème !
    </button>
  );
}
```

📑 Le lien vers la doc du [hook useContext](https://fr.reactjs.org/docs/hooks-reference.html#usecontext)

## Exercice

A l'heure actuelle nous passons `logout` `login` `register` en props de composants en composants. Par exemple :

- `logout` passe par : `AuthApp` → `NetflixApp` → `NetflixAppBar`
- `register` et `login` passe par : `UnauthApp`-> `LoginRegister` → `PopupLogin`

Dans cet exercice tu vas devoir créer un context `AuthContext` qui contiendra  `logout` `login` `register`, `authUser`. On pourra ensuite utiliser le `AuthContext.Provider` dans `App`

```jsx
<AuthContext.Provider value={props}>
    <AuthApp/>
</AuthContext.Provider>
//AuthApp et les enfant auront accès a AuthContext
//const {logout} = React.useContext(AuthContext)
```

**Fichiers :**

- `src/context/AuthContext.js`
- `src/App.js`
- `src/UnauthApp.js`
- `src/AuthApp.js`
- `src/components/NetflixAppBar.js`
- `src/components/LoginRegister.js`

## Bonus

### 1. 🚀 hook personnalisé useAuth

Au lieu d'avoir à utiliser `React.useContext(AuthContext)` et ensuite vérifier si le context n'est pas `null` (ce qui peut arriver lorsque l'on utilise useContext en dohers du provider), on peut créé un hook `useAuth.` Créé ce `hook` et utilise le partout ou l'on a besoin de faire appel au context pour récupérer `logout` `login` `register`, `authUser`, `authError`

**Fichiers :**

- `src/context/AuthContext.js`
- `src/components/NetflixAppBar.js`
- `src/components/LoginRegister.js`
- `src/AuthApp.js`

### 2. 🚀 AuthProvider

A l'heure actuelle nous avons toutes la logique d'authentification de l'utilisateur avec les states : `logout` `login` `register`, `authUser`, `authError,` directement dans `App` ,cela est aussi mélangé avec le code du thème de `Material-ui` et la configuration de `React-Query`. Il est préférable de séparer le code lié au l'authentification dans un composant `AuthProvider` pour une meilleure maintenabilité du code. Dans cet exercice créé un composant `AuthProvider` qui reprend toute la logique d'authentification de App et qui retourne sur le `status === 'done'`

```jsx
const value = {authUser, login, register, logout, authError}
 return <AuthContext.Provider value={value} {...props}/>
```

Utilisation dans `App` :

```jsx
<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AppConsumer />
    </AuthProvider>
  </ThemeProvider>
</QueryClientProvider>
// <AppConsumer /> est le composant qui retourne 
// <AuthApp/> / <UnauthApp/> en function de authUser
// accessible avec : const {authUser} = useAuth()
```

> On pourra également retourner le composant Mui Backdrop qui affiche le chargement sur la `status === 'fetching' || status === 'idle'`

```jsx
if (status === 'fetching' || status === 'idle') {
  return (
    <Backdrop open={true}>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}
```

**Fichiers :**

- `src/context/AuthContext.js`
- `src/AuthApp.js`

### 3. 🚀 AppProviders

Notre `App` commence à contenir de nombreux providers : 

```jsx
<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AppConsumer />
    </AuthProvider>
  </ThemeProvider>
</QueryClientProvider>
```

Nous voudrions avoir un composant `AppProviders` qui regroupe tous les providers et que nous pourrions utiliser de la manière suivante 

```jsx
<AppProviders>
  <AppConsumer />
</AppProviders>
```

Dans cet exercice créé un composant `AppProviders` qui contiendra tous les providers avec un `children`. Il contera également toute la configuration du `theme mui` et `reactQuery` de tel sorte que l'on puisse utiliser comme ceci : 

```jsx
function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  )
}
```

**Fichiers :**

- `src/context/index.js`
- `src/App.js`

### 4. 🚀 useClientNetflixHook

A plusieurs endroit dans le code nous devons avoir accès au `token` pout faire des appel API vers le backend. 

```jsx
const {data} = useQuery(`bookmark`, async () => {
  const token = await authNetflix.getToken()
  return clientNetFlix(`bookmark`, {token})
})
```

Plus l'application va grandir et plus nous aurons d'appel vers le backend en utilisant le `token` .  Pour simplifier créé un hook `useClientNetflix` qui fera appel à `useAuth()` pour récupérer le `token` et retournera un fonction `clientNetFlix` avec le token préconfiguré de tel manière que l'on puisse utiliser directement (sans gérer de token)

```jsx
const clientNetFlix = useClientNetflix()
 const {data} = useQuery(`bookmark`, () => clientNetFlix(`bookmark`))
```

**Fichiers :**

- `src/utils/hooksMovies.js`
- `src/context/AuthContext.js`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
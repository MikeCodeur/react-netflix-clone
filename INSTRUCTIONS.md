# Performance

### 💡 Optimiser les performances de notre application

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Quand on développe une application web, il y a l'aspect fonctionnel mais aussi
l'aspect performance à prendre on compte.

> _Selon une étude, une site qui se charge en 5 secondes à un taux de rebond
> multiplié par 2 par rapport à un site qui se charge en 1 seconde. 1 seconde de
> chargement supplémentaire peut engendrer un perte de 7% du taux de conversion
> (achat, lead etc ...)_

Les applications React (SPA) sont des applications qui contiennent toute la
structure de l'application dans un seul `bundle` (gros fichier JS de
l'application) , a l'inverse des applications PHP par exemple qui elle effectue
le rendu de chaque page.

Plus on ajoute de dépendances à notre projet plus la taille du `bundle` va
augmenter et peut peser parfois plusieurs MO. Ce qui rend le chargement initial
long.

De plus l'utilisateur n'a probablement pas besoin de toute les pages des le
début. Pour améliorer le temps de chargement et l'affichage de la première page
([FMP](https://developer.mozilla.org/fr/docs/Glossary/first_meaningful_paint))
on utilise le `code splitting`. Cela consiste à découper le `bundle` de notre
application

📑 Lien vers la doc de
[React sur le code splitting](https://reactjs.org/docs/code-splitting.html)

## Exercice

Dans cette exercice tu vas devoir optimiser les performances en découpant
l'application en deux bundle différents.

- Un bundle pour le login /regsiter form (`UnAuthApp`)
- Un bundle pour le reste (`AuthApp`)

Le but étant de pouvoir afficher le plus rapidement possible la fenêtre de
connexion / inscription

Pour cela on va utiliser `React.lazy` et `React.Suspense`

📑 Lien vers
[React.Lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)

> `React.Lazy` à besoin d'export par défaut, nous avons donc modifié `UnauthApp`
> et `AuthApp`

```jsx
//export {UnauthApp}
//import {UnauthApp} from 'UnauthApp'

export default UnauthApp
import UnauthApp from 'UnauthApp'
```

> Nous avons déplacé le rendu de la page de chargement (`AuthContext`) fait avec
> un composant `<Backdrop>` et `<CircularProgress>` de material-ui dans un
> composant `<LoadingFullScreen>` pour pouvoir le réutiliser plus tard

**Fichiers :**

- `src/components/App.js`

## Bonus

### 1. 🚀 Pré-chargement de composants

En HTML il existe une manière de précharger des ressources dans le but
d'optimiser le site.

```jsx
<link rel="prefetch" href="/images/big.jpeg">
```

📑 Le lien vers
[prefetch](https://developer.mozilla.org/fr/docs/Web/HTTP/Link_prefetching_FAQ)

Grace à cette technique, lorsque l'utilisateur arrivera sur une page nécessitant
cette ressource, elle sera déjà disponible. Webpack nous permet de faire cela
via des
[magic comment](https://webpack.js.org/api/module-methods/#magic-comments).

Dans cet exercice tu vas devoir précharger `<AuthApp />` afin qu'une fois
l'utilisateur authentifier il puis accéder plus rapidement à l'application en
mode connecté. (l'accès aux films Netflix)

```jsx
import(
  /* webpackPrefetch: true */
  `Component`
)
```

**Fichiers :**

- `src/components/App.js`

### 2. 🚀 Contexte mémoïser

Lorsque nous créons des composants `providers` nous passons des valeurs en props

```jsx
//AuthProvider
const value = {authUser, login, register, logout, authError}
return <AuthContext.Provider value={value} {...props} />
```

Si ces valeurs changent cela force à regenerer le rendu de l'arbre de
composants. Dans notre cas nous avons states : `authUser`, `authError` mais
aussi des fonction `register`, `login`, `logout`. Comme nous créons ces
fonctions dans le provider, a chaque rendu ces fonctions ont de nouvelles
références et cela force le rendu ce qui dégrade les performances.

Dans cet exercice tu vas devoir optimiser les performance : pour cela tu vas
devoir mémoïser toutes les valeurs du props value avec `useMemo` et
`useCallback`

**Fichiers :**

- `src/context/AuthContext.js`
- `src/context/HistoryMovieContext.js`

### 3. 🚀 Profiler une Application

Le comportement en local et en production est diffèrent. Les applications ont
généralement des système de supervision. C'est a dire un système qui permet de
voir ce qui se passe dans notre application en production chez différents
utilisateurs.

React nous fournis un utilitaire : 📑
[React Profiler](https://fr.reactjs.org/docs/profiler.html)

Pour l'utiliser il suffit de wrapper les composants à superviser

```jsx
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>,
)
```

Le callback nous fournis des informations intéressantes

```jsx
function onRenderCallback(
  id, // la prop "id" du Profiler dont l’arborescence vient d’être mise à jour
  phase, // soit "mount" (si on est au montage) soit "update" (pour une mise à jour)
  actualDuration, // temps passé à faire le rendu de la mise à jour finalisée
  baseDuration, // temps estimé du rendu pour l’ensemble du sous-arbre sans mémoïsation
  startTime, // horodatage du début de rendu de cette mise à jour par React
  commitTime, // horodatage de la finalisation de cette mise à jour par React
  interactions, // Un Set des interactions qui constituent cette mise à jour
) {
  // Agrège ou logue les mesures de rendu…
}
```

Il suffira ensuite d'activer ou non le profiler sur la compilation de notre
application grâce à `react-script et` l'option `--profile`

Dans cette exercice tu vas devoir créer un profiler qui récupère tous les
informations et logues les data.

**Fichiers :**

- `src/index.js`
- `src/components/Profiler.js`

### 4. 🚀 Envoies les informations vers le backend

Loguer les informations du profiler dans chrome est utilise pour les
developpeurs et les équipes de tests. Mais comment faire pour avoir des données
de vrais utilisateurs ? Et bien il est possible d'envoyer les informations du
profiler vers le serveur.

Dans cet exercice `👨‍✈️` Hugo le Chef de projet nous demande d'envoyer les
informations du profiler vers le backend via le endpoint `'monitoring'` via la
méthode POST. Utilise `clientAuth` pour envoyer les données

```jsx
clientAuth('monitoring', {data})
```

Afin de ne pas surcharger le serveur, empile toutes les datas dans un `Array` et
post vers le backend uniquement toutes les 10 secondes.

L'algo est le suivant :

- empile les données dans un `array` a chaque `onRender` du profile
- utilise `setInterval` pour appeler une fonction qui :
  - vérifie que la pile n'est pas vide
  - si la pile n'est pas vide, envoie des données aux backend
  - nettoyage de la pile

**Fichiers :**

- `src/components/Profiler.js`

### 5. 🚀 Trace les films ou séries visités

Il est parfois utilise de tracer des données particulières de l'application
comme par exemple les films , séries visités. Cela peut nous aider par exemple a
identifier une page qui serait plus longue a s'afficher sur un film particulier.

`👨‍✈️` Hugo le Chef de projet demande de pouvoir détecter le type et l'id du films
pour cela tu vas devoir ajouter un `prop appData` au composant Profiler et
envoie les données au server

```jsx
<Profiler id="Film by Id" appData={{type:'tv',id:'550'}}>
```

Active le Profiler sur `NetFlixById` pour monitorer les films/séries

Active le Profiler sur `NetflixBookmark` pour monitorer les bookmarks

**Fichiers :**

- `src/components/Profiler.js`
- `src/components/NetflixById.js`
- `src/components/NetflixBookmark.js`

## Aller plus loin

React nous propose en version
[expérimental un système de trace](https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16)
. Cela peut être utilise pour détecter ce qui cause le rendu de la page.

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://www.google.com/url?q=https://go.mikecodeur.com/cours-react-avis?entry.1430994900%3DReact%2520NetFlix%2520Clone%26entry.533578441%3D14%2520Performance&sa=D&source=editors&ust=1639124216256000&usg=AOvVaw0m9NtE_0nrumQjwF20hcmG)

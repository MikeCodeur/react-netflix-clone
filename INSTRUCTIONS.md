# NetflixApp structure generale

### 💡 NetflixApp structure / dépendances

## 📝 Tes notes

Detaille ce que tu as appris ici
`src/exercise/01.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Lorsque l'on démarre de `create react app` nous avons un page simple avec un
header. La première étapes va être de créer le composant de plus haut niveau de
notre application. Dans notre cas on l'appellera `NetflixApp.` On appellera
`NetflixApp` depuis `App.js.` On pourrait également appeler `NetflixApp` depuis
`index.js`.

```jsx
ReactDOM.render(
  <React.StrictMode>
    <NetflixApp />
  </React.StrictMode>,
  document.getElementById('root'),
)
```

Le but de cette première section va être de définir une structure pour nos
composants et notre application.

## Exercice

Dans cette exercice tu vas devoir nettoyer le fichier `App.js` de base de
`create-react-app` et ensuite créer un composant `NetflixApp` avec une structure
simpliste :

- Un menu de navigation
- un header
- un ligne contenant des images de pochettes vidéos (format large)
- un ligne contenant des images de pochettes vidéos (format poster)
- un footer

> Pour nous aider à faire cette maquette: le logo Netflix, Avatar et 4 pochettes
> de films/series sont déposés dans `public/images/`

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/App.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=01%20NetflixApp%20structure)

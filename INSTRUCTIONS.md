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

### 1. 🚀 Générer le Root Node

Plutôt que d’avoir le nœud `root` dans le code HTML, voyez si vous pouvez créer
celui-ci en utilisant également JavaScript.

**Fichiers :**

- `src/components/NetflixApp.js`

### 2. 🚀 Bonus 2

2Plutôt que d’avoir le nœud `root` dans le code HTML, voyez si vous pouvez créer
celui-ci en utilisant également JavaScript.

## Aller plus loin

📑 Le lien vers la doc
[https://www.w3schools.com/html/html_css.asp](https://www.w3schools.com/html/html_css.asp)

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://www.google.com/url?q=https://go.mikecodeur.com/cours-react-avis?entry.1430994900%3DReact%2520NetFlix%2520Clone%26entry.533578441%3D14%2520Performance&sa=D&source=editors&ust=1639124216256000&usg=AOvVaw0m9NtE_0nrumQjwF20hcmG)

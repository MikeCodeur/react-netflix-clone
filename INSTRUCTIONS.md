# Composant : Ligne de films

### 💡 Composant : Ligne de films

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans l'application Netflix nous avons des lignes de films / séries.

- Les plus gros succès Netflix
- Tendances actuelles
- Films d'actions
- etc ...

De plus l'affichage des pochettes parfois vertical, parfois horizontal. Un logo
Netflix est superposé sur la pochette de film.

## Exercice

👨‍✈️ Hugo le chef de projet nous demande la fonctionnalité suivante : Pourvoir
afficher des films / séries de la même manière que sur Netflix, c'est à dire :

- des lignes de films
- des lignes de séries

filtrer par

- les nouveautés
- tendances
- populaires
- les mieux notée
- par genre (action, aventure, thriller etc ...)

🐶 Le but de cet exercice va être de développer un composant `NetflixRow` qui
gère tous ces cas. Nous utiliserons les API REST suivantes

- `/movie/latest`
- `/movie/popular`
- `/movie/top_rated`
- `/tv/latest`
- `/tv/popular`
- `/tv/top_rated`
- `/trending/all/day`

`📝` [Documentation API TMDB](https://developers.themoviedb.org/3)

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/components/NetFlixRow.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=06%20Composant%20:%20Ligne%20de%20films)

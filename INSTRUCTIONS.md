# Fetching et Skeletons
### 💡 Fetching et Skeletons

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Lors d'appel HTTP il peut se passer plusieurs millisecondes et parfois plus lorsque la connexion est lente. Au lieu d'afficher des barre de chargement, spinner etc ... il est possible de créer des `skeletons.` C'est a dire des squelette de composants sans donnée, le temps que les données arrivent. `Material-UI` propose un composant <Skeleton />

```jsx
<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />
```

📑 Le lien vers la documentation de [Skeleton](https://material-ui.com/components/skeleton/)

## Exercice

Dans cet exercice tu vas devoir créer deux skeletons. Un pour le Header, un autre pour la ligne de de films.  Le principe et de faire un rendu du composant original *(même styles, classes, structure)* et de remplacer toutes les données distances (api, images etc ...) par un composant Skeleton

> Modifie `src/utils/clientApi.js` et décommente `await sleep(3000)` pour simuler des API longues

**Fichiers :**

- `src/components/skeletons/HeaderSkeleton.js`
- `src/components/skeletons/RowSkeleton.js`
- `src/components/NetflixHeader.js`
- `src/components/NetflixRow.js`

## Aller plus loin

📑 Le lien vers la doc [https://www.w3schools.com/html/html_css.asp](https://www.w3schools.com/html/html_css.asp)

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
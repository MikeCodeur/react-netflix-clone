# Découpage composants

### 💡 Découpage composants

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Pour une meilleur maintenance de l'application, nous allons maintenant découper notre application avec des composants plus petits. Le but est d'avoir `NetflixApp` de la forme :

```jsx
const NetflixApp = () => {
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader />
      <NetflixRow wideImage={false} title='Films Netflix' />
      <NetflixRow wideImage={true} title='Série Netflix' />
      <NetFlixFooter />
    </div>
  )
}
```

## Exercice

Découpe `NetflixApp` dans le but de pouvoir plus tard externaliser cers fichier dans des composants. On veut que `NetflixRow` puisse afficher des pochettes au format large ou poster.

**Fichiers :**

- `src/components/NetflixApp.js`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=03%20Découpage%20composants)
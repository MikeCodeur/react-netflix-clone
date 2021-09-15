# Style / Material UI
### 💡 Style / Material UI

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il est existe de nombreuses librairies / frameworks CSS front pour React. Ils font font gagner en productivité on peut citer 

- Material-UI
- Ant desing
- Reach UI
- Blueprint
- React Boostrap
- Onsen UI
- Evergrenn
- Semantic UI React
- Rebass
- et plein d'autres

Pour le clone de Netflix nous utiliserons Materil-Ui. Non pas qu'il est le plus adapté pour ce projet, mais il est tellement répandu qu'il est intéressant de le connaitre.

📑 Le lien vers [Material UI](https://material-ui.com/getting-started/installation/)

Il faut donc installer les dépendances 

```bash
npm install @material-ui/core --save
npm install @material-ui/lab --save
```

> Note : Cela est déjà fait dans le projet

On peut ensuite créer un thème générale pour tous les composants `Materials-UI.` Pour cela on va wrapper notre application avec le `ThemeProvider`

```bash
import { ThemeProvider } from '@material-ui/core/styles';
import NetFlixApp from './NetflixApp'

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

function Theming() {
  return (
    <ThemeProvider theme={theme}>
      <NetFlixApp/>
    </ThemeProvider>
  );
}
```

📑 Le lien vers [l](https://material-ui.com/getting-started/installation/)a [documentation du theme](https://material-ui.com/styles/advanced/)

## Exercice

Dans cet exercice nous allons commencer à styliser notre page en utilisant du CSS classique qui est dans `Netflix.css` , du CSS via le thème de `Material-UI.` ainsique que des composant Material-ui. Le premier composant que nous allons utiliser est le composant `AppBar`

```jsx
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//...
<AppBar>
 <Toolbar>
	<Typography variant="h6">
		Acceuil
	</Typography>
	<Typography variant="h6">
		Série
	</Typography>
 </Toolbar>
</AppBar>
```

📑 Le lien vers la [documentation AppBar](https://material-ui.com/components/app-bar/)

## Bonus

### 1. 🚀 Effet sur la barre de menu (scrool)

Sur le site de NetFlix la barre de menu est transparente lorsque le `scroll` est en haut de la page. Lorsque l'on `scroll` vers le bas. La barre de menu n'est plus transparente et cela s'effectue via une transition.

Dans cette exercice tu vas devoir changer le style dynamiquement en fonction de la position de la scrollbar.

```jsx
// style scrool bas
{
	background: '#111',
	transition: 'background .5s ease-out',
	boxShadow: 'none',
}
// style scrool en haut 
{
	background: 'transparent',
	transition: 'background .5s ease-out',
	boxShadow: 'none',
}
```

Pour cela transforme `appBarStyle` en `state` avec les valeurs par defaut.

Utilise ensuite le hook `useEffect` pour ajouter un eventListener sur le changement de position de scrool

```jsx
window.addEventListener('scroll', onScroll)
```

 Si `e.target.documentElement.scrollTop >= 100` applique le style `scrool` bas sinon l'autre

> pense au `cleanup` du hook `useEffect` :

```jsx
return () => window.removeEventListener('scroll', onScroll)
```

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).
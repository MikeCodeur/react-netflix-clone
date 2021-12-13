# Tests de Hooks et Components

### 💡 Tests de Hooks et Components

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous allons maintenant devoir tester nos composants. Comme nous utilisons
beaucoup de composant qui dépendent du Context API, si nous faisont le rendu
`render(<LoginRegister open={true}></LoginRegister>)` nous obtiendrons souvent
un message du genre `useAuth() s'utilise avec <AuthContext.provider>`. C'est
normal ces composant utilisent des hooks qui doivent etre wrapper de
`Context.Provider`.
[React Testing Library](https://testing-library.com/docs/react-testing-library/setup#custom-render)
nous donne une option pour wrapper les composants dans le render.

```jsx
import React from 'react'
import {render} from '@testing-library/react'
import {ThemeProvider} from 'my-ui-lib'
import {TranslationProvider} from 'my-i18n-lib'
import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({children}) => {
  return (
    <ThemeProvider theme="light">
      <TranslationProvider messages={defaultStrings}>
        {children}
      </TranslationProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
```

## Exercice

Dans cet exercice nous allons tester le composant `LoginRegister`. ce composant
fait appel a d'autres composants dépendants du context.

Dans un premier tu vas devoir créer un fichier `test-utils.js` qui wrappe tous
les providers de notre Applications. Reprend la configuration et les provider du
fichier `/context/index.js`.

**Fichiers :**

- `src/context/index.js`
- `src/test/test-utils.js`
- `src/composants/__tests__/LoginRegister.js`

## Bonus

### 1. 🚀 Teste de Hooks personnalisés

Nous allons maintenant tester nos hooks personnalisés. Dans
`HistoryMoviesContext` nous avons `useNavigateMovie`, `useClearHistory`,
`useAddToHistory`. Nous allons tester ces 3 hooks. Tu vas devoir tester ces 3
hooks en utilisant `'@testing-library/react-hooks'` et `renderHook`. Pense à
créer un wrapper pour qui contient `<HistoryMovieProvider>`

📝
[https://react-hooks-testing-library.com/usage/basic-hooks](https://react-hooks-testing-library.com/usage/basic-hooks)

**Fichiers :**

- `src/context/__tests__/hooksHistoryMovies.js`

### 2. 🚀 Optimisation de test-utils

Comme nous allons réutiliser souvent les même `wrappers` et la même
configuration, centralise la configuration dans `test-utils.js`. Déplace le
wrapper et exporte le de `test-utils.js`

```jsx
const wrapperHistoryContext = ({children}) => {
  return <HistoryMovieProvider>{children}</HistoryMovieProvider>
}
```

Note également comme le Wrapper est le même que `AppProviders` de
`src/context/index.js`

```jsx
function render(ui, {...options} = {}) {
  const wrapper = ({children}) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HistoryMovieProvider>
            <AuthProvider>{children}</AuthProvider>
          </HistoryMovieProvider>
        </ThemeProvider>
      </QueryClientProvider>
    )
  }
  return renderReactTestingLib(ui, {wrapper, ...options})
}
```

Importe donc `AppProviders` dans `test-utils.js` et utilise le comme wrapper
directement

F**ichiers :**

- `src/test/test-utils.js`
- `src/context/__tests__/hooksHistoryMovies.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20NetFlix%20Clone&entry.533578441=16%20Tests%20Hooks%20Component)

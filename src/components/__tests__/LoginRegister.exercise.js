import * as React from 'react'
// 🐶 importe {render, screen, waitForElementToBeRemoved} depuis 'test/test-utils'
// 🐶 importe 'userEvent'
// 🐶 importe le composant à tester : LoginRegister

// 🐶 dans ce test nous allons vérifier que :
// par defaut la popup est en mode connexion et lors que clique sur 'Nouveau chez Netflix'
// la popup passe en 'register'
test.todo('Popup de login ou register')
// 🐶 créé une constante qui contient le libellé de la popup en mode 'connexion'
// 🐶 créé une constante qui contient le libellé de la popup en mode 'register'

// 🐶 faire le rendu du composant avec 'render'

// 🐶 pour rappel la 'AuthProvider' retourne un <circularProgress/> le temps d'avoir le authUser
// attend l'affichage avec 'waitForElementToBeRemoved' utilise screen.debug() pour voir sur quel element te baser

// 🐶 verifie que la page contient bien 'Connexion'
// 🐶 simule un clique sur le boutton 'Nouveau sur Netflix ?'
// 🐶 verifie que la page contient bien 'Inscrivez vous'

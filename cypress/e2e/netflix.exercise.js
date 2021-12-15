// 🐶 importe faker il nous sera utilise pour générer des donn de tests user
//import faker from 'faker'

describe('netflix e2e', () => {
  it("chemin classique de l'utilisateur", () => {
    // 🐶 créé une const 'user' avec 'username' 'password' venant de faker
    //
    // 🐶 simule une connexion sur la home '/' avec visit
    // 📝https://docs.cypress.io/api/commands/visit
    //
    // 🐶 cherche le boutton : 'Nouveau sur netflix ?' et clique dessus par passer
    // dessus par passer en mode register
    // 📝https://docs.cypress.io/api/commands/click
    //
    // 🐶 REGISTER : cherche la popup avec le role 'dialog' et utilise 'within'
    // pour faire des recherche uniquement dans la popup
    // 📝https://docs.cypress.io/api/commands/within#Syntax
    // dans la popup cherche les champs input 'email' et 'mot de passe'
    // et insere le 'user.username' et 'user.password' avec type()
    // 📝https://docs.cypress.io/api/commands/type#Syntax
    // recherche le boutton INSCRIVEZ VOUS et clique dessus pour creer un compte
    //
    // 🐶 navigue sur la page 'Series'
    // recherche par le role link et le nom Serie et applique un click()
    // vérifie avec le role 'heading' et 'should'  la presence des sections
    // 📝 https://docs.cypress.io/api/commands/should
    // sections à rechercher
    // - Séries tendances Netflix
    // - Séries les mieux notées
    // - Les séries populaires
    // - Les documentaires
    // - Les séries criminelles
    //
    // 🐶 navigue sur la page des favoris
    // vérifie la presence des sections
    // - Films favoris
    // - Séries favorites
    //
    // 🐶 vérifie la presence des 2 lignes de films et serie favoris avec le role 'listitem'
    // 'findAllByRole' et '.should('have.length', 2)'
    //
    // 🐶 vérifie qu'il n'y a aucun film en favoris grace au role 'listitem' name 'movie'
    // dedans cherche le nombre de liens avec le role link
    //
    // 🐶 cherche le bouton 'Ajouter à ma liste' et clique dessus
    // 🐶 vérifie maintenant la présence d'un film dans favoris au role 'link' et have.length', 1
    //
    // 🐶 fait la meme chose en cliquant sur 'Supprimer de ma liste'
    // vérifie la presence de 0 item dans la liste
    //
    // 🐶 RECHERCHE DE FILMS
    // cherche le champ de recherche grace au role 'textbox' et saisie 'batman'
    // pour simuler la touche 'enter' utilise cela : .type('batman{enter}')
    // verifie la presence de 15 films avec le role 'listitem'
    // verifie la presence de 5 séries avec le role 'listitem'
    //
    // 🐶 DECONNEXION
    // cherche le boutton logout
    //
    // 🐶 CONNEXION
    // connecte toi avec le meme login et password
    // va sur la page série
    // verifie la presence de
    // - Séries tendances Netflix
    // - Séries les mieux notées
  })
})

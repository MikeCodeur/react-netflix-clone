import {NetflixAppBar} from 'components/NetflixAppBar'
import {Link} from 'react-router-dom'
function Error404() {
  return (
    <div>
      <NetflixAppBar />
      <div
        role="alert"
        style={{
          height: '100%',
          textAlign: 'center',
          margin: '100px 300px',
          color: '#fff',
        }}
      >
        <h1 style={{fontSize: '2.5em'}}>Vous cherchez votre chemin ?</h1>
        <pre style={{color: 'red', fontSize: '1em'}}>Erreur 404</pre>
        <div className="banner__buttons">
          <Link to="/">
            <button className="banner__button banner__buttonplay">
              Accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error404

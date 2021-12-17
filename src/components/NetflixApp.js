import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {useMovie} from '../utils/hooksMovies'
import {Helmet} from 'react-helmet-async'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import './Netflix.css'

const NetflixApp = ({logout}) => {
  const [type] = React.useState(getRandomType())
  const [defaultMovieId] = React.useState(getRandomId(type))
  const headerMovie = useMovie(type, defaultMovieId)
  return (
    <div>
      {/* <Helmet>
        <title>Vos films (accueil)</title>
        <meta name="description" content="Nested component" />
      </Helmet> */}
      <NetflixAppBar logout={logout} />
      <NetflixHeader movie={headerMovie} type={type} />
      <NetflixRow
        wideImage={true}
        watermark={true}
        type={TYPE_MOVIE}
        filter="trending"
        title="Films Netflix"
      />
      <NetflixRow
        wideImage={false}
        watermark={true}
        type={TYPE_TV}
        filter="trending"
        title="Séries Netflix"
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="toprated"
        title="Les mieux notés"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_TV}
        filter="genre"
        param="10759"
        title="Action & aventure"
        watermark={true}
        wideImage={true}
      />

      <NetflixRow
        type={TYPE_MOVIE}
        filter="genre"
        param="53"
        title="Les meilleurs Thriller"
        watermark={false}
        wideImage={false}
      />
      <NetFlixFooter color="secondary" si />
    </div>
  )
}
export {NetflixApp}

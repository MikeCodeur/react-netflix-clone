import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {NetflixRowView} from './NetflixRowView'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import {useParams} from 'react-router-dom'
import {useSearchMovie, useMovie} from '../utils/hooksMovies'

import './Netflix.css'

const NetflixSearch = ({logout}) => {
  let {query} = useParams()
  const data = useSearchMovie(query)
  const defaultMovie = useMovie(TYPE_MOVIE, 785752)
  const headerMovie = data?.[0] ?? defaultMovie
  const type = headerMovie?.media_type

  const movies = data.filter(result => result.media_type === TYPE_MOVIE)
  const series = data.filter(result => result.media_type === TYPE_TV)
  return (
    <div>
      <NetflixAppBar logout={logout} />
      <NetflixHeader movie={headerMovie} type={type} />
      {data?.length === 0 ? (
        <div className="row">
          <h2>Pas de résultat</h2>
        </div>
      ) : (
        <>
          <NetflixRowView
            data={movies}
            wideImage={true}
            watermark={true}
            type={TYPE_MOVIE}
            filter="trending"
            title="Films correspondants"
          />
          <NetflixRowView
            data={series}
            wideImage={false}
            watermark={true}
            type={TYPE_TV}
            filter="trending"
            title="Série correspondantes"
          />
        </>
      )}

      <NetFlixFooter color="secondary" si />
    </div>
  )
}


export {NetflixSearch}

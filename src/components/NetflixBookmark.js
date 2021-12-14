import * as React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixHeader} from './NetflixHeader'
import {RowCard} from './NetflixRowView'
import {useMovie, useBookmark} from '../utils/hooksMovies'
import {TYPE_MOVIE, TYPE_TV} from '../config'
import {Profiler} from './Profiler'

const NetflixBookmark = ({logout}) => {
  const data = useBookmark()
  const id = data?.bookmark?.movies?.[0] ?? 749274
  const headerMovie = useMovie(TYPE_MOVIE, id)

  return (
    <>
      <Profiler id="Bookmark" appData={{bookmark: data?.bookmark}}>
        <NetflixAppBar logout={logout} />
        <NetflixHeader movie={headerMovie} type={TYPE_MOVIE} />
        <div className="row">
          <h2>Films favoris</h2>
          <div className="row__posters" role="listitem" aria-label={TYPE_MOVIE}>
            {data?.bookmark.movies.map(id => {
              return (
                <Card
                  key={id}
                  id={id}
                  type={TYPE_MOVIE}
                  watermark={true}
                  wideImage={true}
                />
              )
            })}
          </div>
        </div>

        <div className="row">
          <h2>Séries favorites</h2>
          <div className="row__posters" role="listitem" aria-label={TYPE_TV}>
            {data?.bookmark.series.map(id => {
              return <Card key={id} id={id} type={TYPE_TV} />
            })}
          </div>
        </div>
      </Profiler>
    </>
  )
}

const Card = ({id, type, watermark, wideImage}) => {
  const data = useMovie(type, id)
  return (
    <RowCard
      movie={data}
      type={type}
      watermark={watermark}
      wideImage={wideImage}
    />
  )
}
export {NetflixBookmark}

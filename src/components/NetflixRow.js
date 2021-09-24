import * as React from 'react'
import {NetflixRowView} from './NetflixRowView'
import {TYPE_MOVIE} from '../config'
import {RowSkeleton} from './skeletons/RowSkeleton'
import {useMovieFilter} from '../utils/hooksMovies'

const NetflixRow = ({
  title = '',
  wideImage = true,
  type = TYPE_MOVIE,
  param,
  filter = 'populaire',
  watermark = false,
}) => {
  const data = useMovieFilter(type, filter, param)
  if (!data) {
    return <RowSkeleton title={title} wideImage={wideImage} />
  }
  return (
    <NetflixRowView
      data={data}
      title={title}
      type={type}
      wideImage={wideImage}
      watermark={watermark}
    />
  )
}

export {NetflixRow}

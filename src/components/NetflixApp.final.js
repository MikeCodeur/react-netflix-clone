import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import './Netflix.css'

const NetflixApp = () => {
  const [headerMovie, setHeaderMovie] = React.useState()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)
  const [queried, setQueried] = React.useState(true)

  React.useEffect(() => {
    if (!queried) {
      return
    }
    clientApi(`${type}/${defaultMovieId}`)
      .then(response => {
        setHeaderMovie(response)
        setQueried(false)
      })
      .catch(error => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queried])
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}

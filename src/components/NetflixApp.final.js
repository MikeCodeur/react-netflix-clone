import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixHeader} from './NetflixHeader'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import './Netflix.css'

const NetflixApp = () => {
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}

import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'

const styles = {
  banner: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  },
}

const HeaderSkeleton = () => {
  return (
    <header style={styles.banner}>
      <div className="banner__contents">
        <h1 className="banner__title">
          <Skeleton animation="wave" width={210} sx={{ bgcolor: 'grey.900' }}/>
        </h1>
        <h1 className="synopsis">
          <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }} />
          <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }}/>
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">Lecture</button>
          <button className="banner__button banner__buttonInfo">
            Plus d'infos
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}
export {HeaderSkeleton}

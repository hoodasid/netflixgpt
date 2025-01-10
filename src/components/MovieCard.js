import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img className='pr-4 max-w-48' width="200px" alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard

import React from 'react'
import { img_300, unavailable } from '../config/config'

const Row = ({title, release_date, id, media_type, poster}) => {
  return (
    <div className='row'>
      <img className="img" src={poster? `${img_300}/${poster}` : unavailable}/>
      <span className="title">{title}</span>
      <div className="subtitles">
        <span>{media_type}</span>
        <span>{release_date}</span>
      </div>
    </div>
  )
}

export default Row

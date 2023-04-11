import React from 'react'
import {motion } from 'framer-motion'

const Movie = ({ title, img, release, vote, overview, key}) => {
  return (
    
    <motion.div
      Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='movie'>
      <h2>{title}</h2>
      <div className='img-div'>
        <img src={'https://image.tmdb.org/t/p/w500' + img} alt="" />
        <div className="layer">
          <p>{overview}</p>
          <button  
            >Vote: {vote}
          </button>
          

        </div>
      </div>
    </motion.div>
  )
}

export default Movie

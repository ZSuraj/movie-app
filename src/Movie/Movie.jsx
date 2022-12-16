import React, { useState } from 'react'
import Modal from '../Modal/Modal'

import './Movie.css'

const Movie = ({movie}) => {
    
    const IMG = process.env.REACT_APP_API_IMG

    const [show, setShow] = useState(false)

  return (
        <div>
        <div className='movie-box' onClick={() => setShow(true)}>
            <div className='box-image'>
                <div>
                    <p>{movie.vote_average}</p>
                </div>
                <img src={IMG+movie.poster_path} alt="" />
            </div>
            <div className='box-name'>
                <p>{movie.original_title}</p>
            </div>
        </div>    
        <Modal movieDetails={movie} onClose={() => setShow(false)} show={show}/>
        </div>
  )
}

export default Movie
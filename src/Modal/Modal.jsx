import React from 'react'

import './Modal.css'

const Modal = ({show, onClose, movieDetails}) => {

    if (!show) {
        return null
    }

    const IMG = process.env.REACT_APP_API_IMG

  return (
    <div className='modal' onClick={() => {onClose()}}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <p className='modal-title'>{movieDetails.original_title}</p>
                <button onClick={() => {onClose()}}>Close</button>
            </div>
            <div className="modal-body">
                <div className='body-img-container'>
                    <img src={IMG+movieDetails.poster_path} alt="" />
                </div>
                <div className='body-text-container'>
                    <div className='release-date'>
                        <p className='bold' style={{marginRight:"3px"}}>Release Date: </p>
                        <p>{movieDetails.release_date}</p>
                    </div>
                    <p className='overview'>{movieDetails.overview}</p>
                    <div className='rating-and-others'>
                    <p className='bold' style={{marginRight:"3px"}}>{movieDetails.vote_average} </p>
                    <p> / 10 ({movieDetails.vote_count} total votes)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
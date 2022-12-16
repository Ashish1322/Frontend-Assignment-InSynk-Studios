import React from 'react'
import "./card.css"

export default function Card({movie, setMovieModal,showModal}) {

  return (
    <div 
      className='movie_card' 
      onClick={() => {
        setMovieModal(movie)
        showModal(true)
       }}>
      <div className='rating_circle'>{movie.vote_average}</div>
      <img className='movie_poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <p className='movie_name'>{movie.title}</p>
    </div>
  )
}

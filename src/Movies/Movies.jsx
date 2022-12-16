import React, { useEffect, useState } from 'react'

import Movie from '../Movie/Movie'
import './Movies.css'

const Movies = () => {
  
  const URL = process.env.REACT_APP_API_URL
  const key = process.env.REACT_APP_API_KEY

  const [moviesList, setMoviesList] = useState([])

  const [query, setQuery] = useState("")
  const [found, setFound] = useState("")

  const searchMovies = async(e) => {
    e.preventDefault()
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
      const res = await fetch(url)
      const data = await res.json()
      setMoviesList(data.results)
      setFound(query)
      setQuery("")
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetch(URL)
    .then((res)=>res.json())
    .then(data=>{
      setMoviesList(data.results)
    })

  }, [])
  
  const handleClick = () => window.location.reload(false)

  return (
    <div>
      <nav className='main-nav'>
          <div className='navbar'>            
              <h1>Insync Studios</h1>
              <form onSubmit={searchMovies}>
                  <input type="text" placeholder='Search for a movie' name='query' value={query} onChange={(e) => {setQuery(e.target.value)}} />
              </form>
          </div>
      </nav>
      <section className='main-section'>
        <h1 onClick={handleClick}>Most Recent Movies</h1>
        <div className='main-container'>
            <div className="movies-container">
                {
                  moviesList.length > 0 ?
                  moviesList?.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                  )) : <h2 style={{width:"90vw"}}>No movies found with "{found}"</h2> 
                }
            </div>
        </div>

      </section>
    </div>
  )
}

export default Movies
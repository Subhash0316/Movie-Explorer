import React from 'react'
import MovieBox from './MovieBox'

const Popular = ({popularMovies}) => {
  return (
    <div>
      <h1>Popular</h1>
        {popularMovies.length !== 0
            ? <MovieBox movies={popularMovies} />
            : <p>Loading...</p>}
    </div>
  )
}

export default Popular

import React from 'react'
import MovieBox from './MovieBox'

const Toprated = ({topRatedMovies}) => {
  return (
    <div>
      <h1>Top Rated</h1>
        {topRatedMovies.length !== 0
            ? <MovieBox movies={topRatedMovies} />
            : <p>Loading...</p>}

    </div>
  )
}

export default Toprated

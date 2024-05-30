import React, { useState, useEffect } from 'react'
import Header from './Header'
import MovieBox from './MovieBox'


const Movie = (props) => {
    const movieId = props.match.params.id

    const [movie, setMovieDetails] = useState(null)
    const [similarMovies, setSimilarMovies] = useState(null)
    let movieTrailer = ''

    if (movie && movie.videos) {
        movieTrailer = movie.videos.results.find(video => video.type === 'Trailer')
    }

    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=88e61aa3a51c0cb1b5e0f05b44543d32&append_to_response=videos`)
            .then(response => response.json())
            .then(movie => setMovieDetails(movie))

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=88e61aa3a51c0cb1b5e0f05b44543d32`)
            .then(response => response.json())
            .then(movies => setSimilarMovies(movies.results))

        setTimeout(async () => await window.scrollTo(0, 0), 200)
    }, [movieId])

    return (movie
        ? <div>
            <Header />
            <div className="movie-wrapper">
                <div className="movie-content">
                    <div className="movie-poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" />
                    </div>
                    <div className="movie-data">
                        <h1 className="movie-title">{movie.title}</h1>

                        {movieTrailer !== '' &&
                            <h3 className="watch-trailer"><a href={`https://www.youtube.com/watch?v=${movieTrailer.key}`} target={"_blank"}>
                                Watch trailer
                            </a></h3>}

                        {movie.overview && <div>
                            <h3 className="movie-info-title">Summary:</h3>
                            <span className="movie-info">{movie.overview}</span>
                        </div>}
                        {movie.release_date && <div>
                            <h3 className="movie-info-title">Release date:</h3>
                            <span className="movie-info">{movie.release_date}</span>
                        </div>}
                        
                        {!!movie.vote_average && <div>
                            <h3 className="movie-info-title">Rating:</h3>
                            <span className="movie-info">{movie.vote_average}</span>
                        </div>}
                    </div>
                </div>
            </div>

            {similarMovies &&
                <div>
                    <h3 className="review-similar-heading">You might also like</h3>
                    <MovieBox movies={similarMovies} />
                </div>
            }
        </div>

        : <p>Loading...</p>
    )
}

export default Movie
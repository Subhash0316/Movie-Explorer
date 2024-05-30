import React, { useState, useEffect } from 'react'
import Header from './Header'
import MovieBox from './MovieBox'

const SearchResult = (props) => {
    const [searchResult, setSearchResult] = useState(null)
    const searchTerm = props.location.search.split('=')[1]

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=88e61aa3a51c0cb1b5e0f05b44543d32&query=${searchTerm}`)
            .then(response => response.json())
            .then(movies => setSearchResult(movies.results));
    }, [searchTerm])

    return (
        <div>
            <Header />
            <h1>Search Results</h1>
            {searchResult && <MovieBox movies={searchResult} />}
        </div>
    )
}

export default SearchResult
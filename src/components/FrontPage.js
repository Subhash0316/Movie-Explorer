import React, { useState, useEffect } from 'react';
import Header from './Header';
import MovieBox from './MovieBox';
import Toprated from './Toprated';
import Popular from './Popular';


const FrontPage = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [show, setshow] = useState({rated:false, popular:false,all:true})


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88e61aa3a51c0cb1b5e0f05b44543d32`)
            .then(response => response.json())
            .then(movies => setPopularMovies(movies.results))

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=88e61aa3a51c0cb1b5e0f05b44543d32`)
            .then(response => response.json())
            .then(movies => setTopRatedMovies(movies.results))
    }, [])

    
    return (
        <div>
            <Header />
            <div className='btns'>
                <button
                    style={{
                        backgroundColor: !show.rated ? 'violet' : 'purple'
                      }}
                    onClick={() => setshow({
                        rated:true,
                        popular:false,
                        all:false
                    })}>Top Rated</button>
                <button 
                    style={{
                        backgroundColor: !show.popular ? 'violet' : 'purple'
                      }}
                    onClick={() => setshow({
                        rated:false,
                        popular:true,
                        all:false
                    })}>Popular</button>
                <button 
                    style={{
                        backgroundColor: !show.all ? 'violet' : 'purple'
                      }}
                    onClick={() => setshow({
                        rated:false,
                        popular:false,
                        all:true
                    })}>All</button>
            </div>
            {show.rated && <Toprated topRatedMovies = {topRatedMovies}/>}
            {show.popular && <Popular popularMovies={popularMovies}/>}
            { show.all && <>
                    <Toprated topRatedMovies = {topRatedMovies}/>
                    <Popular popularMovies={popularMovies}/>
                </>

            }
                
            
            
        </div>
    )
}

export default FrontPage
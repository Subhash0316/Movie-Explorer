import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import filmlogo from '../filmlogo.png'

const Header = () => {
    return (
        <div className="App-header">
            <div className="App-logo">
                <a className="App-header-title" href='/'><img src={filmlogo} alt="App Logo" /></a>
            </div>
            <SearchBar />
            <h1>Movie Explorer</h1>
        </div>
    );
}

export default Header;
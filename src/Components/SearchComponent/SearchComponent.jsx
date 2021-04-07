import React from 'react'
import './search-component.css';

const SearchComponent = ({className}) => {
    return (
        
        <div className="search-container">
        <div className="search-btn">
         <img src="/img/search.png" /> <input type="text" placeholder="Search..." />
        </div>
        <button className="edit-btn">
        <img src="/img/edit-icon.png"></img>
        </button>
        </div>
        
    )
}

export default SearchComponent

import React from 'react'
import './search-component.css';

const SearchComponent = ({className}) => {
    return (
        
        <div className={`${className}`}>
        {/* <div className="search-btn"> */}
         <img src="/img/search-outline-icon.svg" /> <input type="text" className="search-1" placeholder="Search..." />
        {/* </div> */}
        {/* <button className="edit-btn">
        <img src="/img/edit-icon.svg"></img>
        </button> */}
        </div>
        
    )
}

export default SearchComponent

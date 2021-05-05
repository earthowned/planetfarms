import React from 'react'
import './search-component.css';

const SearchComponent = ({ className, search, setSearch }) => {
    return (
        
        // <div className={className}>
        <div className="search-btn">
         <img src="/img/search-outline-icon.svg" alt="Search" /> <input value={search} type="text"  onChange={ (e) => setSearch(e.target.value)}  className="search-1" placeholder="Search..." />
        {/* </div> */}
        {/* <button className="edit-btn">
        <img src="/img/edit-icon.svg"></img>
        </button> */}
        </div>
        // </div>
        
    )
}

export default SearchComponent

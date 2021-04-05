import React from 'react'
import Filter from '../Filter/Filter'
import SearchComponent from '../SearchComponent/SearchComponent'
import "./library-header.css"

const LibraryHeader = () => {
    return (
        <>
        <div className="library-container">
            <ul className="library-list-container">
                <li >
                    <button className="library-list-item active">All files</button>
                    </li>
                <li >
                    <button className="library-list-item">My library & collections</button></li>
                <li >
                    <button className="library-list-item">Users collection</button></li>
                <li >
                    <button className="library-list-item">Saved collection</button></li>
            </ul>
            <button className="default-btn">Add files</button>
        </div>
        <div className="library-sub-header">
              <div className="library-sub-header-1">
              <SearchComponent /> 
              </div>
              <div className="library-sub-header-2">
              <Filter />
              </div>
           </div>
        </>
    )
}

export default LibraryHeader

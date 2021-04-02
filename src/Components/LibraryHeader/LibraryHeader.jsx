import React from 'react'
import "./library-header.css"

const LibraryHeader = () => {
    return (
        <>
            <ul className="library-list-container">
                <li >
                    <button className="library-list-item">All files</button>
                    
                    </li>
                <li >
                    <button className="library-list-item">My library & collections</button></li>
                <li >
                    <button className="library-list-item">Users collection</button></li>
                <li >
                    <button className="library-list-item">Saved collection</button></li>
            </ul>
        </>
    )
}

export default LibraryHeader

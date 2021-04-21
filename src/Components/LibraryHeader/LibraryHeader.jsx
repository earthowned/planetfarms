import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter'
import SearchComponent from '../SearchComponent/SearchComponent'

import { Link, useLocation} from 'react-router-dom';
import "./library-header.css"

const data = [
    "All files",
    "My library & collections",
    "Users collection",
    "Saved collection"
]

const LibraryHeader = ({setActive}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     let {pathname} = useLocation();
    
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function calculateWidth () {
            setWindowWidth(window.innerWidth);
        }

    useEffect(() => {
        window.addEventListener("resize", calculateWidth);

        return () => {
        window.removeEventListener("resize",calculateWidth);
        }
    },[calculateWidth])

    return (
        <div className="library-main-header-container">
        <div className="library-container">
            {windowWidth > 839
            ? <><ul className="library-list-container">
                <li >
                    <Link className={`nav-link ${(pathname === "/library") ? "library-list-item active" : "library-list-item"}`} to="/library">All files</Link>
                    </li>
                <li >
                    <Link className={`nav-link ${(pathname === "/library/collection") ? "library-list-item active" : "library-list-item"}`} to="/library/collection">My library & collections</Link></li>
                <li >
                    <Link className={`nav-link ${(pathname === "/library/collection/users") ? "library-list-item active" : "library-list-item"}`} to="/library/collection/users">Users collection</Link></li>
                <li >
                    <Link className={`nav-link ${(pathname === "/library/collection/saved") ? "library-list-item active" : "library-list-item"}`} to="/library/collection/saved">Saved collection</Link></li>
            </ul>
            <SearchComponent className="search-btn margin-0"/> 
            </>
            : <>
            <Filter data={data} newFilter="new" />
            <SearchComponent className="search-btn margin-0"/> 
            </>
        }
        </div>
        <div className="library-sub-header">
              <div className="library-sub-header-1">
              <div className="library-btn-container"><button className="default-btn" onClick={() => setActive(true)}>Add files</button></div>
              </div>
              
              <div className="library-sub-header-2">
              <Filter />
              </div>
        </div>
        </div>
    )
}

export default LibraryHeader

import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter'
import SearchComponent from '../SearchComponent/SearchComponent'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom';
import "./library-header.css"
import { searchResources, listResources } from '../../actions/resourceActions';

const data = [
    "All files",
    "My library & collections",
    "Users collection",
    "Saved collection"
]

const LibraryHeader = ({ setActive }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const { pathname } = useLocation()
    const history = useHistory()

    const dispatch = useDispatch()
    const [search, setSearch] = useState(null)

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
        if (search) dispatch(searchResources(search))
        if (!search) dispatch(listResources())

        window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth);
        })

        return () => {
            window.removeEventListener("resize", function () {
                setWindowWidth(window.innerWidth);
            })
        }
    }, [windowWidth, search, dispatch, history, userInfo])

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
                        <SearchComponent search={search} setSearch={setSearch} className="search-btn margin-0" />
                    </>
                    : <>
                        <Filter data={data} newFilter="new" />
                        <SearchComponent search={search} setSearch={setSearch} className="search search-btn margin-0" />
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

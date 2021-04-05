import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({setToggle, toggle}) => {
  let history = useHistory();
    return (
        <>
       <button className="nav-icon" onClick={() => setToggle(!toggle)}><img src="./img/nav-icon.png" /> </button>
                <div className="logo-container">
                    <div className="img-container">
                        <img src="../../img/logo.png" />
                    </div>
                    <div className="img-container-2">
                        <img src="../../img/square-icon.png" />
                    </div>
                </div>
                <ul className="list-container">
                    <li className="list-items" onClick={() => history.push('/community-page-news')}>
                        <img src="./img/user-management.png" /> <span>Ragarians</span>

                   <ul className="dropdown-container">
                        <li className="dropdown-item">Members</li>
                        <li className="dropdown-item">Groups</li>
                        <li className="dropdown-item">Enterprises</li>
                    </ul>
                    </li>
                    <li className="list-items">
                        <Link className="nav-link" to="/library" ><img src="./img/book.png" /> <span>Library</span></Link>
                    </li>
                    <li className="list-items"><img src="./img/graduation.png" /> <span>Course</span></li>
                </ul>
        </>
    )
}

export default Sidebar

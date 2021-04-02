import React from 'react'
<<<<<<< HEAD
import { Link, useHistory } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({setToggle, toggle}) => {
  let history = useHistory();
=======
import './sidebar.css'

const Sidebar = ({setToggle, toggle}) => {
>>>>>>> 901c388a... messenger-file-structure-changed
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
<<<<<<< HEAD
                    <li className="list-items" onClick={() => history.push('/community-page-news')}>
                        <img src="./img/user-management.png" /> <span>Ragarians</span>

=======
                    <li className="list-items">
                        <img src="./img/user-management.png" /> <span>Ragarians
                    
                        </span>
>>>>>>> 901c388a... messenger-file-structure-changed
                   <ul className="dropdown-container">
                        <li className="dropdown-item">Members</li>
                        <li className="dropdown-item">Groups</li>
                        <li className="dropdown-item">Enterprises</li>
                    </ul>
                    </li>
<<<<<<< HEAD
                    <li className="list-items">
                        <Link className="nav-link" to="/library" ><img src="./img/book.png" /> <span>Library</span></Link>
                    </li>
=======
                    <li className="list-items"><img src="./img/book.png" /> <span>Library</span></li>
>>>>>>> 901c388a... messenger-file-structure-changed
                    <li className="list-items"><img src="./img/graduation.png" /> <span>Course</span></li>
                </ul>
        </>
    )
}

export default Sidebar

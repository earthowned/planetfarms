import {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({setToggle, toggle}) => {
  let history = useHistory();
  const [dropdownActive, setDropdownActive] = useState(true);

    return (
        <>
       <button className="nav-icon" onClick={() => setToggle(!toggle)}><img src="/img/nav-icon.png" /> </button>
                <div className="logo-container">
                    <div className="img-container">
                        <img src="/img/logo.png" />
                    </div>
                    <div className="img-container-2">
                        <img src="/img/square-icon.png" />
                    </div>
                </div>

                <ul className="list-container">
                    <li className="list-items" onClick={() => history.push('/community-page-news')}>
                        <div className="align-content">
                        <img src="/img/user-management.png" /> <span>Ragarians</span>
                        </div>
                           { dropdownActive && <ul className="dropdown-container">
                                    <li className="dropdown-item">Members</li>
                                    <li className="dropdown-item">Groups</li>
                                    <li className="dropdown-item">Enterprises</li>
                                </ul>}
                    </li>
                    <Link className="nav-link" to="/library" >
                    <li className="list-items">
                        <div className="align-content">
                        <img src="/img/book.png" /> <span>Library</span>
                        </div>
                    </li>
                    </Link>
                    <li className="list-items">
                        <div className="align-content">
                        <img src="/img/graduation.png" /> <span>Course</span>
                        </div>
                        </li>
                </ul>
        </>
    )
}

export default Sidebar

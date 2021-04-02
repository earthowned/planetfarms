import React, {useState} from 'react'
import HeaderComponent from '../Header/HeaderComponent';
import MessengerMain from '../MessengerMain/MessengerMain';
import './style.css'

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
        <div className="container">
            <div className={toggle ? "sidebar-container" : "sidebar-container active"}>
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
                    <li className="list-items">
                        <img src="./img/user-management.png" /> <span>Ragarians
                    
                        </span>
                   <ul className="dropdown-container">
                        <li className="dropdown-item">Members</li>
                        <li className="dropdown-item">Groups</li>
                        <li className="dropdown-item">Enterprises</li>
                    </ul>
                    </li>
                    <li className="list-items"><img src="./img/book.png" /> <span>Library</span></li>
                    <li className="list-items"><img src="./img/graduation.png" /> <span>Course</span></li>
                </ul>
            </div>
            <div className="section-container">
            <HeaderComponent />
            <MessengerMain />
            </div>
            </div>
            
        </>
    )
}

export default Sidebar

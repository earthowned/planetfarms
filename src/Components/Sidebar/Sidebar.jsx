import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ setToggle, toggle }) => {
  let history = useHistory();
  const [dropdownActive, setDropdownActive] = useState(true);
  let {pathname}=useLocation()
  const [activeBar,setActiveBar]=useState()

  const handleOnClick=()=>{
      setDropdownActive(!dropdownActive)
  }

  const handleToggle=()=>{
    setToggle(!toggle)
    if (toggle === true) {
        setDropdownActive(false)
    } else {
        setDropdownActive(true)
    }
  }
  
  return (
    <>
      <button className="nav-icon" onClick={()=>handleToggle()}>
        <img src="/img/sidebar-arrow-icon.svg" />
      </button>
      <div className="logo-container">
        <div className="img-container">
          <img src="/img/logo.svg" />
        </div>
        <div className="img-container-2">
          <img src="/img/grid-icon.png" />
        </div>
      </div>

      <ul className="list-container">
        <li className="list-items"> 
          <div onClick={handleOnClick} className={`${pathname === '/community-page-news' ? " text-menu text-active" :"text-menu" }`}>
            <div  onClick={() => history.push("/community-page-news")} className="align-content">   
             <img src="/img/rag-icon.svg" /> <span >Ragarians</span>
            </div>
          </div>
          {dropdownActive  && (
            <ul className="dropdown-container">
              <div   className={`${pathname === '/community-members' ? "  text-active" :"" }`}>
                <li onClick={()=>history.push('/community-members')} className="dropdown-item">
                  <strong>Members</strong>
                </li>
              </div>        
              <div className={`${pathname === '/community-groups' ? "  text-active" :"" }`}>
                <li className="dropdown-item">
                  <strong> Groups</strong>
                </li>
              </div>
              <div  className={`${pathname === '/community-enterprises' ? "  text-active" :"" }`}>
                <li className="dropdown-item">
                  <strong>Enterprises</strong>
                </li>
              </div>
            </ul>
          )}
        </li>

        <li className=" list-items-menu">      
          <div onClick={()=>history.push('/library')}  className={`${pathname === '/library' ? "text-menu text-active" : "text-menu"}`}>
            <div className="align-content">
              <img src="/img/book.svg" /> <span>Library</span>
            </div>
          </div>
        </li>
        
        <li className="list-items-menu">
          <div className={`${pathname === '/course' ? "text-menu text-active" : "text-menu"}`}>
            <div className="align-content">
              <img src="/img/graduation-cap-1.svg" /> <span>Course</span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

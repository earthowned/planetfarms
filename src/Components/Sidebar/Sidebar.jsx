import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./sidebar.css";

const dropdown = [
  {
    name: 'Members',
    slug: '/community-members'
  },
  {
    name: 'Groups',
    slug: '/community-group'
  },
  {
    name: 'Enterprises',
    slug: '/community-enterprises'
  }
]

const Sidebar = ({ setToggle, toggle, mobileView, burgerActive }) => {
  let history = useHistory();
  const [dropdownActive, setDropdownActive] = useState(true);
  let {pathname}=useLocation()
  const [activeBar, setActiveBar]=useState()

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
    {
      !mobileView 
      ? <><button className="nav-icon" onClick={()=>handleToggle()}>
        <img src="/img/sidebar-arrow-icon.svg" />
      </button>
      <div className="logo-container">
        {toggle 
        ? <img className="logo" src="/img/logo.svg" /> 
        : <img className="logo-2" src="/img/p-icon.svg" />}
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
              {
                dropdown.map(item => {
                  return (
                     <div   className={`${pathname === `${item.slug}` ? "  text-active" :"" }`}>
                <li onClick={()=>history.push(`${item.slug}`)} className="dropdown-item">
                  <strong>{item.name}</strong>
                </li>
              </div>
                  )
                })
              }
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
    : <div className={`mobile-view-dropdown-container ${burgerActive && "slide"}`}>
     <ul className="list-container">
        <li className="list-items"> 
          <div onClick={handleOnClick} className={`${pathname === '/community-page-news' ? " text-menu text-active" :"text-menu" }`}>
            <div  onClick={() => history.push("/community-page-news")} className="align-content">   
             <img src="/img/rag-icon.svg" /> <span >Ragarians</span>
            </div>
          </div>
          {dropdownActive  && (
            <ul className="dropdown-container">
              {
                dropdown.map(item => {
                  return (
                     <div   className={`${pathname === `${item.slug}` ? "  text-active" :"" }`}>
                <li onClick={()=>history.push(`${item.slug}`)} className="dropdown-item">
                  <strong>{item.name}</strong>
                </li>
              </div>
                  )
                })
              }
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
      </div>
    }
    </>
  );
};

export default Sidebar;

<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({setToggle, toggle}) => {
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
                    <li className="list-items">
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
=======
import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function SideBar(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__title__icon">
        <div className="title__icon">
          <img className="icon-1" src="img/vector.png" />
          <img className="icon-1" src="/img/Vector1.png" />
          <img className="icon-2" src="img/Vector2.png" />
          <img className="icon-3" src="img/Vector3.png" />
          <img className="icon-2" src="img/Vector4.png" />
          <img className="icon-3" src="img/Vector5.png" />
        </div>
        <div className="sidebar__grid border-1px-quarter-spanish-white">
          <div className="grid-outline-2">
            <div className="grid-flex">
              <img className=" grid-image" src="img/grid.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__menu">
        <ul className="menu-list list-container">
          {/* <div className="active-menu"> */}
          {/* <img className="ragrarians__image" src="img/ragarians-icons.png" />  */}
          <li>
          </li>
            <NavLink
              to="#"
              className="menu__text  semi-bold-quarter-white-16px" 
            >
              Ragrarians
            </NavLink>
          {/* </div> */}
          <NavLink to="#" className="menu__text semi-bold-quarter-white-16px">
            Member
          </NavLink>
          <NavLink to="#" className="menu__text semi-bold-quarter-white-16px">
            Groups
          </NavLink>
          <NavLink to="#" className="menu__text semi-bold-quarter-white-16px">
            Enterprises
          </NavLink>
        </ul>
        {/**
         * 
         *  <ul className="list-container">
//             <li className="list-items">
//               <img src="/img/ragarians.png" /> <span>Ragarians</span>
//               <ul className="dropdown-container">
//                 <li className="dropdown-item">Members</li>
//                 <li className="dropdown-item">Groups</li>
//                 <li className="dropdown-item">Enterprises</li>
//               </ul>
//             </li>
//             <li className="list-items">
//               <img src="/img/book.png" /> <span>Library</span>
//             </li>
//             <li className="list-items">
//               <img src="/img/graduation.png" /> <span>Course</span>
//             </li>
//           </ul>
         */}
        {/* <div className="arrow-icon">
          <div className="arrow-right">
            <img className="arrow-image" src="img/arrow-icon.png"/>
            <img className="arrow-image" src="img/arrow-icon.png"/>
          </div>
        </div> */}
      </div>
      <div className="library-menuu-button">
        <div className="book">
          <div className="libarary-group">
            <img className="libarary-image" src="img/book.png" />
          </div>
        </div>
        <div className="library-text semi-bold-quarter-white-16px">Library</div>
      </div>
      <div className="course-menu-button">
        <div className="graduation-cap-1">
          <img className="graduation-cap" src="img/graduation-cap 1.png" />
        </div>
        <div className="course-text semi-bold-quarter-white-16px">Courses</div>
      </div>
    </div>
  );
}
export default SideBar;

// import React, { useState } from "react";

// import "./style.css";

// const Sidebar = () => {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <>
//       <div className="container">
//         <div
//           className={toggle ? "sidebar-container" : "sidebar-container active"}
//          >
//           <button className="nav-icon" onClick={() => setToggle(!toggle)}>
//             <img src="./img/arrow-icon.png" />{" "}
//           </button>
//           <div className="sidebar__title__icon">
//          <div className="title__icon">
//         <img className="icon-1" src="img/vector.png" />
//           <img className="icon-1" src="/img/Vector1.png" />
//          <img className="icon-2" src="img/Vector2.png" />
//          <img className="icon-3" src="img/Vector3.png" />
//          <img className="icon-2" src="img/Vector4.png" />
//          <img className="icon-3" src="img/Vector5.png" />
//        </div>
//         <div className="sidebar__grid border-1px-quarter-spanish-white">
//          <div className="grid-outline-2">
//              <div className="grid-flex">
//              <img className=" grid-image" src="img/grid.png" />
//             </div>
//           </div>
//          </div>
//        </div>
//           <ul className="list-container">
//             <li className="list-items">
//               <img src="/img/ragarians.png" /> <span>Ragarians</span>
//               <ul className="dropdown-container">
//                 <li className="dropdown-item">Members</li>
//                 <li className="dropdown-item">Groups</li>
//                 <li className="dropdown-item">Enterprises</li>
//               </ul>
//             </li>
//             <li className="list-items">
//               <img src="/img/book.png" /> <span>Library</span>
//             </li>
//             <li className="list-items">
//               <img src="/img/graduation.png" /> <span>Course</span>
//             </li>
//           </ul>
//         </div>
//         <div className="section-container">hello hello</div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
>>>>>>> a25ae778... community-news-

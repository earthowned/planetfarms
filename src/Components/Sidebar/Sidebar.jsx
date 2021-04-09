import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ setToggle, toggle }) => {
  let history = useHistory();
  const [dropdownActive, setDropdownActive] = useState(true);
  return (
    <>
      <button className="nav-icon" onClick={() => setToggle(!toggle)}>
        <img src="/img/sidebar-arrow-icon.svg" alt="arrow-icon" />{" "}
      </button>
      <div className="logo-container">
        <div className="img-container">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="img-container-2">
          <img src="/img/grid-icon.svg" alt="grid-icon" />
        </div>
      </div>
      <ul className="list-container">
        <li
          className="list-items"
          onClick={() => history.push("/community-page-news")}
        >
          <img src="/img/user-management.svg" alt="user-management" />{" "}
          <span>Ragarians</span>
          <ul className="dropdown-container">
            <li className="dropdown-item">Members</li>
            <li className="dropdown-item">Groups</li>
            <li className="dropdown-item">Enterprises</li>
          </ul>
        </li>
        <li className="list-items">
          <Link className="nav-link" to="/library">
            <img src="/img/book.svg" alt="book-icon" /> <span>Library</span>
          </Link>
        </li>
        <li className="list-items">
          <img src="/img/graduation-cap-1.svg" alt="graduation-icon" />{" "}
          <span>Course</span>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;

import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__title__icon">
        <div className="title__icon">
          <img alt="" className="icon-2" src="img/vector.png" />
          <img alt="" className="icon-1" src="/img/Vector1.png" />
          <img alt="" className="icon-2" src="img/Vector2.png" />
          <img alt="" className="icon-3" src="img/Vector3.png" />
          <img alt="" className="icon-2" src="img/Vector4.png" />
          <img alt="" className="icon-3" src="img/Vector5.png" />
        </div>
        <div className="sidebar__grid border-1px-quarter-spanish-white">
          <div className="grid-outline-2">
            <div className="grid-flex">
              <img alt="" className=" grid-image" src="img/grid.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="menu-list">
          <div className="active-menu">
            <img
              alt=""
              className="ragrarians__image"
              src="img/ragarians-icons.png"
            />
            <NavLink
              to="#"
              className="menu__text semi-bold-quarter-white-16px"
              style={{ margin: "20px" }}
            >
              Ragrarians
            </NavLink>
          </div>
          <NavLink to="#" className="menu__text semi-bold-quarter-white-16px">
            Member
          </NavLink>
          <NavLink to="#" className="menu__text semi-bold-quarter-white-16px">
            Groups
          </NavLink>
          <NavLink to="#" className="menu__text semi-bold-quarter-white-16px">
            Enterprises
          </NavLink>
        </div>
        <div className="arrow-icon">
          <div className="arrow-right">
            <img alt="" className="arrow-image" src="img/arrow-icon.png" />
            <img alt="" className="arrow-image" src="img/arrow-icon.png" />
          </div>
        </div>
      </div>
      <div className="library-menuu-button">
        <div className="book">
          <div className="libarary-group">
            <img alt="" className="libarary-image" src="img/book.png" />
          </div>
        </div>
        <div className="library-text semi-bold-quarter-white-16px">Library</div>
      </div>
      <div className="course-menu-button">
        <div className="graduation-cap-1">
          <img
            alt=""
            className="graduation-cap"
            src="img/graduation-cap-1.png"
          />
        </div>
        <div className="course-text semi-bold-quarter-white-16px">Courses</div>
      </div>
    </div>
  );
}
export default SideBar;

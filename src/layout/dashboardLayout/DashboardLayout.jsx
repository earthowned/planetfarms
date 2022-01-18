/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/header/HeaderComponent";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";

import { Link, useLocation } from "react-router-dom";
import MessageDropdown from "../../components/messageDropdown/MessageDropdown";
import { TABLET_SIZE } from "../../constants/sizeConstants";

// importing custom hooks sizefinder to calculate window width from utils
import useSizeFinder from "../../utils/sizeFinder";
import ProfileMenu from "../../components/header/ProfileMenu";

// import svg images
import { ReactComponent as Hamburger } from "url:../../../public/img/ham-menu.svg";
import { ReactComponent as NotificationMenu } from "url:../../../public/img/bell-icon.svg";
import { ReactComponent as MessageMenu } from "url:../../../public/img/email.svg";
import { ReactComponent as UserMenu } from "url:../../../public/img/user-green-outline.svg";

const DashboardLayout = ({ title, children }) => {
  const [toggle, setToggle] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  const [userActive, setUserActive] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/dashboard") setUserActive(true);
    if (pathname === "/messenger") setMessageActive(true);
  }, [setMessageActive, setUserActive]);

  // using custom function
  const windowWidth = useSizeFinder();

  // mobile button functionality
  function activeBurger() {
    setSidebar(!sidebar);
    setBurgerActive(!burgerActive);
    // making the notification off
    setNotificationActive(false);
    // making the user off
    setUserActive(false);
    // making the message off
    setMessageActive(false);
  }

  function activeNotification() {
    setNotificationActive(!notificationActive);
    // making the sidebar off
    setSidebar(false);
    setBurgerActive(false);
    // making the user off
    setUserActive(false);
    // making the message off
    setMessageActive(false);
  }

  function activeMessage() {
    setMessageActive(!messageActive);
    // making the sidebar off
    setSidebar(false);
    setBurgerActive(false);
    // making the notification off
    setNotificationActive(false);
    // making the user off
    setUserActive(false);
  }

  function activeUser() {
    setUserActive(!userActive);
    // making the sidebar off
    setSidebar(false);
    setBurgerActive(false);
    // making the notification off
    setNotificationActive(false);
    // making the message off
    setMessageActive(false);
  }

  return (
    <div>
      {windowWidth > TABLET_SIZE ? (
        <div className="container">
          <div className={`sidebar-container ${!toggle ? "active" : ""}`}>
            <Sidebar setToggle={setToggle} toggle={toggle} />
          </div>
          <div className="section-container">
            <HeaderComponent title={title} />
            {children}
          </div>
        </div>
      ) : (
        <>
          <MessageDropdown
            mobileView="mobileView"
            btnName="see more"
            clickHandler={setMessageActive}
            messageActive={messageActive}
            message="Your Messages"
          />
          <MessageDropdown
            mobileView="mobileView"
            btnName="see more"
            clickHandler={setNotificationActive}
            message="Your Notifications"
            notificationActive={notificationActive}
          />
          <Sidebar mobileView="mobileView" burgerActive={burgerActive} />
          <div className="layout-container">
            <div className="dashboard-header">
              <img
                className="mobile-logo"
                src="/img/logo.svg"
                alt="text logo of planet farm"
              />
              {/* mobile view: profie dropdown */}
              <ProfileMenu />
            </div>
            <h1>{title}</h1>
            <div>{children}</div>
            <div className="space-taker" />
          </div>
          <div className="footer-nav">
            <div
              onClick={() => activeUser()}
              className={`mobile-tab-wrapper ${userActive ? "bgactive" : ""} `}
            >
              <Link to="/dashboard">
                <UserMenu className="mobile-tab" />
              </Link>
            </div>
            <div
              onClick={() => activeMessage()}
              className={`mobile-tab-wrapper ${
                messageActive ? "bgactive" : ""
              }`}
            >
              <MessageMenu className="mobile-tab" />
            </div>
            <div
              onClick={() => activeNotification()}
              className={`mobile-tab-wrapper ${
                notificationActive ? "bgactive" : ""
              }`}
            >
              <NotificationMenu className="mobile-tab" />
            </div>
            <div
              onClick={(e) => {
                activeBurger();
              }}
              className={`mobile-tab-wrapper ${burgerActive ? "bgactive" : ""}`}
            >
              <Hamburger className="ham-tab" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;

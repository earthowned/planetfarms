import React from "react";
import './style.css'

function NavBar() {
 
  return (
    <div className="navbar">
      <h1 className="title__navbar title_text_white_24px ibmplexsans-semi-bold-quarter-spanish-white-24px">Ragrarians News</h1>
      <div className="account__navbar">
        <div className="navbar__person-outline-1">
        <img
          className="navbar__person__image"
         src="img/person.png"
        />
        </div>
        <div className="myAccount__navbar title_text_white_16px  ibmplexsans-semi-bold-quarter-spanish-white-16px">My DashBoard</div>
      </div>
      <div className="avatar-icons">
        <div className="email-outline">
          <div className="email_group">
          {/* <img className="vector-15" src="img/email-icon.png" /> */}
             <img className="email-image" src="img/email-icon.png" />
          </div>
        </div>
        <div className="bell-outline">
          <div className=" bell__group">
          {/* <img className="vector-17" src="img/bell-icon.png" /> */}
            <img className="bell-image" src="img/bell-icon.png " />
          </div>
        </div>
        <div
          className="avatar"
         style={{ backgroundImage: `url("img/avatar.png")` }}
         ></div>
      </div>
    </div>
  );
}
export default NavBar

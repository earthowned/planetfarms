import React from "react";
import './style.css'

function NavBar(props) {
 
  return (
    <div className="dashboard-nav">
      <h1 className="ragrarians-i1161397 ibmplexsans-semi-bold-quarter-spanish-white-24px">Ragrarians News</h1>
      <div className="dashboard-account">
        <div className="person-outline-1">
        <img
          className="vector-12"
         src="img/person.png"
          style={{ height: "20px", width: "20px" }}
        />
          
        </div>
        <div className="text-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">My DashBoard</div>
      </div>
      <div className="avatar-icons">
        <div className="email-outline">
          <div className="overlap-group">
          <img className="vector-15" src="img/email-icon.png" />
             <img className="vector-16" src="img/email-icon.png" />
          </div>
        </div>
        <div className="bell-outline">
          <div className="overlap-group1">
          <img className="vector-17" src="img/bell-icon.png" />
            <img className="vector-18" src="img/bell-icon.png " />
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

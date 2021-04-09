import React from 'react'
import "./back-button.css"
import { Link } from "react-router-dom";


const BackButton = ({ location }) => {
  return (
    <Link to={location}>
      <div className="back-btn-container">
        <div className="icon-wrapper">
          <img className="icon-image-btn" src="/img/back-button-icon.svg" />
        </div>
        <div className="back-text">Back</div>
      </div>
    </Link>
  )
}

export default BackButton

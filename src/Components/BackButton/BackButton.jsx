import React from 'react'
import "./back-button.css"
import { Link } from "react-router-dom";


const BackButton = ({ location }) => {
  return (
    <Link to={location}>
      <div className="back-btn">
        <div className="icons-arrows-left">
          <div className="overlap-group">
            {/* <img className="vector-stroke-1" alt="back" src="./img/back.svg" /> */}
            <img className="vector-stroke" alt="back" src="./img/back.svg" />
          </div>
        </div>
        <div className="place valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">Back</div>
      </div>
    </Link>
  )
}

export default BackButton

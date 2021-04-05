import React from 'react'
import "./back-button.css"
import {  Link } from "react-router-dom";


const BackButton = ({location}) => {
    return (
      <Link to={location}>
    <div className="back-btn">
      <div className="icons-arrows-left">
        <div className="overlap-group">
          <img className="vector-stroke-1"
src="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6066cc208808fdc0d78f8168/img/vector--stroke-@2x.png"
/>
          <img className="vector-stroke"
src="https://anima-uploads.s3.amazonaws.com/projects/6062d6e20bde0e437064350b/releases/6066cc208808fdc0d78f8168/img/vector--stroke--1@2x.png"
/>
        </div>
      </div>
      <div className="place valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">Back</div>
    </div>
      </Link> 
    )
}

export default BackButton
